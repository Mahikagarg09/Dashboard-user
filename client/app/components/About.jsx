"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function About() {

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
                    about: user.about
                });
            } catch (error) {
                console.error('Error fetching user about:', error);
            }
        };

        fetchUserData();
    }, []);


  return (
    <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="py-3 sm:py-4">
                <div className="flex items-center justify-between space-x-4 space-y-2">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="text-lg">About <span className="text-blue-900">{userData.name}</span></p>
                            <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                                Edit
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">
                            {userData.about}
                        </p>
                    </div>
                </div>
            </div>
        </div>

  )
}
