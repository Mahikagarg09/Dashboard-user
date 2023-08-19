"use client"
import React, { useEffect, useState } from 'react';
import Connect from '../../components/Connect'
import axios from 'axios';

export default function Page() {

    const [userconnected, setuserconnected] = useState([]);
    const[userCanConnect,setUserCanConnect]=useState([]);

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

        const fetchUserConnected = async () => {
            try {
                const response = await axios.get("https://user-dashboard-9a9g.onrender.com/api/connect/connections", {
                    params: {
                        user_id: userId,
                    },
                });
                setuserconnected(response.data.connectedPeople || []);
            } catch (error) {
                console.error('Error fetching user connections:', error);
            }
        };

        // Fetch the people who user can connect to
        const fetchUserCanConnect = async () => {
            try {
                const response = await axios.get("https://user-dashboard-9a9g.onrender.com/api/connect/connections/available", {
                    params: {
                        user_id: userId,
                    },
                });
                setUserCanConnect(response.data.availableConnections || []);
            } catch (error) {
                console.error('Error fetching people who user can connect with:', error);
            }
        };

        useEffect(() => {
            fetchUserConnected();
            fetchUserCanConnect();
        }, []);
    
        // Function to update connections after adding or removing
        const updateConnections = () => {
           fetchUserConnected();
            fetchUserCanConnect();
        };
    
    return (
        <div className="relative">
          {/* -------------------HEADER------------------------------ */}
            <div className="bg-blue-900 text-white h-[25vh] md:h-[28vh] rounded-lg">
                <p className="p-3 md:p-5 text-sm md:text-lg">My Connections</p>
            </div>

            {/* -----------------------MAIN CONTENT--------------------- */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9">
                {userconnected.map((connected,index) => (
                    <Connect key={index} user={connected}  isConnected={true} onConnectionChange={updateConnections} />
                ))}
            </div>
            <div className="mt-14">
                <h1 className="text-2xl">People you can also connect</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9 mb-20">
                    {userCanConnect.map((available,index) => (
                        <Connect key={index} user={available} isConnected={false} onConnectionChange={updateConnections}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
