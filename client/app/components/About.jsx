"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function About() {
    const [userData, setUserData] = useState({ name: '', about: '' });
    const [editing, setEditing] = useState(false);
    const [editedAbout, setEditedAbout] = useState('');

    let userId;

    if (typeof window !== 'undefined') {
        userId = localStorage.getItem("userId");
    }

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://user-dashboard-9a9g.onrender.com/api/profile/${userId}`);
                const user = response.data.user; // Update this according to your API response structure
                setUserData({
                    name: user.name,
                    about: user.about,
                });
                setEditedAbout(user.about);
            } catch (error) {
                console.error('Error fetching user about:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleCancelClick = () => {
        setEditing(false);
        setEditedAbout(userData.about);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`https://user-dashboard-9a9g.onrender.com/api/profile/edit/${userId}`, { about: editedAbout });
            setUserData((prevData) => ({
                ...prevData,
                about: editedAbout,
            }));
            setEditing(false);
        } catch (error) {
            console.error('Error updating about:', error);
        }
    };

    const handleInputChange = (e) => {
        setEditedAbout(e.target.value);
    };

    return (
        <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="py-3 sm:py-4">
                <div className="flex items-center justify-between space-x-4 space-y-2">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="text-lg">
                                About{' '}
                                <span className="text-blue-900">{userData.name}</span>
                            </p>
                            {editing ? (
                                <div className="flex space-x-2">
                                    <button
                                        className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 mx-2"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 "
                                        onClick={handleCancelClick}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4 cursor-pointer"
                                    onClick={handleEditClick}
                                >
                                    Edit
                                </div>
                            )}
                        </div>
                        {editing ? (
                            <textarea
                                value={editedAbout}
                                onChange={handleInputChange}
                                className="mt-2 border rounded-md px-2 py-1 w-full"
                            />
                        ) : (
                            <p className="text-gray-600 mt-2">{userData.about}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
