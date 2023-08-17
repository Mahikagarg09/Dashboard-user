"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Skills() {

    const [skillsData, setskillsData] = useState([]);

    const userId = localStorage.getItem("userId")

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchskills = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                const user = response.data.user; // Update this according to your API response structure
                setskillsData(user.skills || []);

            } catch (error) {
                console.error('Error fetching user skills:', error);
            }
        };

        fetchskills();
    }, []);

    return (
        <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Skills</h1>
                </div>
                <div>
                    <button className="font-medium rounded-xl bg-violet-50 px-4">
                        Edit
                    </button>
                </div>
            </div>
            <div className="mt-5">

                <ul>
                    <ul>
                        {skillsData.map((skill, index) => (
                            <li className="mb-3" key={index}>
                                {skill}
                            </li>
                        ))}
                    </ul>


                </ul>
            </div>
        </div>
    )
}
