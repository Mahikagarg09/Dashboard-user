const express = require('express');
const router = express.Router();
const User = require('../models/users'); 
const cloudinary = require("./cloudinary");

// GET route to fetch all user information
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        // Find the user by userId
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Respond with the user data
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data' });
    }
});


//EDIT ROUTE SO THAT USER CAN EDIT HIS INFORMATION
router.put('/edit/:userId', async (req, res) => {
    const userId = req.params.userId;
    const updatedData = req.body; // The updated information sent in the request body

    try {
        // Find the user by their ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user properties based on the updatedData
        if (updatedData.name)user.name = updatedData.name
        if (updatedData.phone)user.phone = updatedData.phone;
        if (updatedData.email)user.email = updatedData.email;
        if (updatedData.password) user.password = updatedData.password;
        if (updatedData.about) user.about = updatedData.about;
        if (updatedData.skills) user.skills = updatedData.skills;
        if (updatedData.certifications)user.certifications = updatedData.certifications;
        if (updatedData.experience)user.experience = updatedData.experience;
        if (updatedData.education)user.education = updatedData.education;

        const updatedUser = await user.save();

        res.status(200).json({ message: 'User information updated', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

router.post("/uploads/:userId", async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    try {
        const imageFile = req.body.image; // Base64 encoded image data
        if (imageFile) {
            const uploadRes = await cloudinary.uploader.upload(imageFile, {
                upload_preset: "user-profile"
            });
            if (uploadRes) {
                user.image = uploadRes; // Update user's image field with Cloudinary response
                await user.save();
                return res.status(200).json({ message: "Image uploaded successfully" });
            }
        } else {
            return res.status(400).json({ message: "No image provided" });
            console.log("no image")
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});
module.exports = router;
