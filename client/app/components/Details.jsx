"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Details() {
    const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
    const [editing, setEditing] = useState({ name: false, email: false, phone: false });
    const [editedUserData, setEditedUserData] = useState({ name: '', email: '', phone: '' });

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                const user = response.data.user; // Update this according to your API response structure
                setUserData({
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleEditClick = (key) => {
        setEditing((prevEditing) => ({
            ...prevEditing,
            [key]: true,
        }));
        setEditedUserData({
            ...editedUserData,
            [key]: userData[key],
        });
    };

    const handleCancelClick = (key) => {
        setEditing((prevEditing) => ({
            ...prevEditing,
            [key]: false,
        }));
    };

    const handleSaveClick = async (key) => {
        try {
            await axios.put(`http://localhost:5500/api/profile/edit/${userId}`, {
                [key]: editedUserData[key],
            });
            setUserData((prevData) => ({
                ...prevData,
                [key]: editedUserData[key],
            }));
            setEditing((prevEditing) => ({
                ...prevEditing,
                [key]: false,
            }));
        } catch (error) {
            console.error('Error updating user details:', error);
        }
    };

    const handleInputChange = (e, key) => {
        const { value } = e.target;
        setEditedUserData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <>
            <ul className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
                {Object.keys(userData).map((key) => (
                    <li key={key} className="py-3 sm:py-4">
                        <div className="flex items-center justify-between space-x-4 space-y-2">
                            <div className="flex-shrink-0">
                                <p className="font-medium text-lg text-warmGray-900">{key === 'name' ? 'Your Name' : key}</p>
                                {editing[key] ? (
                                    <input
                                        type={key === 'email' ? 'email' : 'text'}
                                        name={key}
                                        value={editedUserData[key]}
                                        onChange={(e) => handleInputChange(e, key)}
                                        className="mt-3 border rounded-md px-2 py-1 w-full"
                                    />
                                ) : (
                                    <p className="text-gray-500 mt-3">{userData[key]}</p>
                                )}
                            </div>
                            {editing[key] ? (
                                <div className="inline-flex space-x-2">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                                        onClick={() => handleSaveClick(key)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleCancelClick(key)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4 cursor-pointer"
                                    onClick={() => handleEditClick(key)}
                                >
                                    Edit
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

