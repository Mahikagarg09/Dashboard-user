"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Details() {

    const [userData, setUserData] = useState({ name: '', about: '' });

    const userId=localStorage.getItem("userId")

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                const user = response.data.user; // Update this according to your API response structure
                setUserData({
                    name: user.name,
                    email: user.email,
                    phone:user.phone
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserData();
    }, []);


    return (
        <>
            <ul  className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Your Name</p>
                            <p className="text-gray-500 mt-3">{userData.name}</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Email</p>
                            <p className="text-gray-500 mt-3">{userData.email}</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Phone No.</p>
                            <p className="text-gray-500 mt-3">{userData.phone}</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
