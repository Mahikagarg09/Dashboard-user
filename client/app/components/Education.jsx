"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Education = () => {

    // State variables for controlling edit mode and edited content
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState({
        institute: '',
        degree: '',
        years: '',
        description: '',
    });

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

    // Fetch education details when the component mounts
    useEffect(() => {
        fetchEducationDetails();
    }, []);


    // Function to fetch education details from the server
    const fetchEducationDetails = () => {
        axios
            .get(`https://user-dashboard-9a9g.onrender.com/api/profile/${userId}`)
            .then(response => {
                const userData = response.data.user;
                const educationDetails = userData.education[0] || {};
                setEditedContent(educationDetails);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };


    // Function to enable edit mode
    const handleEdit = () => {
        setIsEditing(true);
    };


    // Function to cancel edit mode and reset edited content
    const handleCancel = () => {
        setIsEditing(false);
        fetchEducationDetails();
    };


    // Function to save edited content
    const handleSave = () => {
        setIsEditing(false);
        axios.put(`https://user-dashboard-9a9g.onrender.com/api/profile/edit/${userId}`, {
            education: [editedContent],
        })
            .then(response => {
                console.log('User data updated:', response.data);
            })
            .catch(error => {
                console.error('Error updating user data:', error);
            });
    };


    // Function to handle changes in input fields and textarea
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedContent(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Education</h1>
                </div>
                <div>
                    {isEditing ? (
                        <div>
                            <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 mx-2" onClick={handleSave}>Save</button>
                            <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 " onClick={handleCancel}>Cancel</button>
                        </div>
                    ) : (
                        <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4" onClick={handleEdit}>Edit</button>
                    )}
                </div>
            </div>
            <div className="mt-3 border-2 border-trueGray-900 rounded-xl px-5 py-4">
                <div>
                    {isEditing ? (
                        <input
                            type="text"
                            name="institute"
                            value={editedContent.institute}
                            onChange={handleChange}
                            className="p-1 rounded-md border-2 border-trueGray-900 focus:outline-trueGray-900 w-32"
                        />
                    ) : (
                        <h1 className="text-lg text-blue-900">{editedContent.institute}</h1>
                    )}
                </div>
                <div className="flex justify-between mt-2">
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="years"
                                value={editedContent.years}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-trueGray-900 focus:outline-trueGray-900 w-24"
                            />
                        ) : (
                            <p>{editedContent.years}</p>
                        )}
                    </div>
                    <div>
                        {isEditing ? (
                            <input
                                type="text"
                                name="degree"
                                value={editedContent.degree}
                                onChange={handleChange}
                                className="p-1 rounded-md border-2 border-trueGray-900 focus:outline-trueGray-900 w-16 font-semibold"
                            />
                        ) : (
                            <p>{editedContent.degree}</p>
                        )}
                    </div>
                </div>
                <div className="mt-2 text-[#1F1F1FB2]">
                    {isEditing ? (
                        <textarea
                            name="description"
                            value={editedContent.description}
                            onChange={handleChange}
                            className="p-1 rounded-md border-2 border-trueGray-900 focus:outline-trueGray-900 w-full"
                        />
                    ) : (
                        <p>{editedContent.description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Education;
