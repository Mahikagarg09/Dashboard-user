"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'


export default function Education() {

    const [educationData, seteducationData] = useState([]);

    const userId=localStorage.getItem("userId")

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetcheducationData = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                seteducationData(response.data.user.education || [])
               
            } catch (error) {
                console.error('Error fetching user education:', error);
            }
        };

        fetcheducationData();
    }, []);

  return (
    <div className="py-3 sm:py-4">
                <div className="flex items-center justify-between space-x-4 space-y-2">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="text-lg">Education</p>
                            <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                                edit
                            </div>
                        </div>
                        {educationData.map((edu,index) => (
                            <div className="shadow-sm shadow-gray-500 rounded-xl p-4 mt-4" key={index}>
                            <div className="py-3 sm:py-4">
                            <p className="text-xl text-blue-900 font-medium">{edu.institute}</p>
                                <div className="flex items-center justify-between space-x-4 space-y-2">
                                    
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold text-trueGray-800">({edu.years})</p>
                                            <div className="inline-flex items-center text-base font-semibold rounded-xl text-trueGray-800 px-4">
                                                {edu.degree}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>

            </div>
  )
}
