const express = require('express');
const router = express.Router();
const connectavailable = require('../models/connectavailable');
const UserConnection = require('../models/userconnect');


//----------------------ADDING A CONNECTION TO USER----------------------//

router.post('/connections/add', async (req, res) => {
    try {
        const { user_id, connect_person_id } = req.body;

        const newConnection = new UserConnection({ user_id, connect_person_id });
        await newConnection.save();

        res.status(201).json({ message: 'Connection added successfully', connection: newConnection });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

//------------------FETCHING ALL CONNECTIONS USER HAVE CONNECTED WITH------------------//

router.get('/connections', async (req, res) => {
    try {
        const { user_id } = req.query;

        // Find all connections for the given user ID
        const userConnections = await UserConnection.find({ user_id });

        // Retrieve detailed information about the connected people
        const connectedPeople = await Promise.all(
            userConnections.map(async (connection) => {
                const personId = connection.connect_person_id;
                const personInfo = await connectavailable.findById(personId);
                return personInfo;
            })
        );

        res.status(200).json({ connectedPeople });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

//-----------------------------FETCHING ALL POTENTIAL CONNECTIONS WHICH USER CAN CONNECT WITH
router.get('/connections/available', async (req, res) => {
    try {
      const { user_id } = req.query;
  
      // Find all connections for the given user ID
      const userConnections = await UserConnection.find({ user_id });
  
      // Fetch all potential connections
      const potentialConnections = await connectavailable.find();
  
      // Filter out potential connections that the user is already connected with
      const availableConnections = potentialConnections.filter(connection =>
        !userConnections.some(userConnection =>
          userConnection.connect_person_id.toString() === connection._id.toString()
        )
      );
  
      res.status(200).json({ availableConnections });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  });


// ----------------------------REMOVE A USER CONNECTION---------------------------//
router.delete('/connections/remove', async (req, res) => {
    try {
        const { user_id, connect_person_id } = req.body;

        // Find the connection and remove it
        const removedConnection = await UserConnection.findOneAndRemove({
            user_id,
            connect_person_id
        });

        if (!removedConnection) {
            return res.status(404).json({ message: 'Connection not found or already removed' });
        }

        res.status(200).json({ message: 'Connection removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});
module.exports = router;
