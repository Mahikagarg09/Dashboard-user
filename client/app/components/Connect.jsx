"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import avatar from '../../public/user.png'
import axios from 'axios'

const page = ({ user, isConnected,onConnectionChange }) => {
    const [isConnectedState, setIsConnectedState] = useState(isConnected);

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

        const handleClick = async () => {
            try {
                if (isConnectedState) {
                    console.log(userId);
                    console.log(user._id);
                    const remove = await axios.delete('http://localhost:5500/api/connect/connections/remove', {
                        data: {
                            user_id: userId,
                            connect_person_id: user._id,
                        }
                    });
                    console.log(remove.data)
                } else {
                    // Add the connection
                    console.log(userId);
                    console.log(user._id);
                    const add = await axios.post('http://localhost:5500/api/connect/connections/add', {
                        user_id: userId,
                        connect_person_id: user._id,
                    });
                    console.log(add.data)
                }
    
                // Toggle the connection status in the component
                setIsConnectedState(!isConnectedState);
                onConnectionChange();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    
    return (
        <div className="flex justify-evenly border-2 border-trueGray-900 rounded-xl bg-secondaryColor py-7">
            <div>
                <h1 className="text-lg">{user.username}</h1>
                <p className="mt-2 text-[#1F1F1FB2]">{user.role}</p>
                <p className="text-[#1F1F1FB2]">{user.company}</p>
                <button
                    className="mt-3 bg-[#BAB6EB] text-[#1F1F1FB2] font-semibold px-2 py-1 rounded-xl "
                    onClick={handleClick}
                >
                    {isConnectedState ? 'Remove Connection' : 'Connect'}

                </button>
            </div>
            <div>
                <Image src={avatar} alt="avatar" width={120} height={120} />
            </div>
        </div>
    );
};

export default page;
