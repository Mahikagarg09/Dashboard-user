"use client"
import React, { useEffect, useState } from 'react';
import Connect from '../../components/Connect'
import axios from 'axios';

const potentialConnections = [
    {
        _id: '2',
        username: 'Jane Smith',
        role: 'Front-end Developer',
        company: 'Web Co.',
        isConnected: false,
    },

];

export default function Page() {

    const [userconnected, setuserconnected] = useState([]);
    const[userCanConnect,setUserCanConnect]=useState([]);

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }


    useEffect(() => {
        // Fetch the people who user have connected with
        const fetchuserconnected = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/connect/connections",{
                    params: {
                      user_id: userId,
                    },
                  });
                setuserconnected(response.data.connectedPeople || [])
               
            } catch (error) {
                console.error('Error fetching user connections:', error);
            }
        };

        fetchuserconnected();
    }, []);


    //fetch the people who user can connect to
    useEffect(() => {
        // Fetch the people who user have connected with
        const fetchuserCanConnect = async () => {
            try {
                const response = await axios.get("http://localhost:5500/api/connect/connections/available",{
                    params: {
                      user_id: userId,
                    },
                  });
                setUserCanConnect(response.data.availableConnections || [])
               
            } catch (error) {
                console.error('Error fetching people who user can connect with :', error);
            }
        };

        fetchuserCanConnect();
    }, []);


    return (
        <div className="relative">
          {/* -------------------HEADER------------------------------ */}
            <div className="bg-blue-900 text-white h-[25vh] md:h-[28vh] rounded-lg">
                <p className="p-3 md:p-5 text-sm md:text-lg">My Connections</p>
            </div>

            {/* -----------------------MAIN CONTENT--------------------- */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9">
                {userconnected.map((connected,index) => (
                    <Connect key={index} user={connected}  isConnected={true} />
                ))}
            </div>
            <div className="mt-14">
                <h1 className="text-2xl">People you can also connect</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9 mb-20">
                    {userCanConnect.map((available,index) => (
                        <Connect key={index} user={available} isConnected={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}
