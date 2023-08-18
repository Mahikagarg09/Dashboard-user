"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Skills() {
    const [skillsData, setSkillsData] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editedSkills, setEditedSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');

    let userId;

    if (typeof window !== 'undefined') {
        userId = localStorage.getItem("userId");
    }


    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                const user = response.data.user; // Update this according to your API response structure
                setSkillsData(user.skills || []);
            } catch (error) {
                console.error('Error fetching user skills:', error);
            }
        };

        fetchSkills();
    }, [userId]);

    const handleEditClick = () => {
        setEditing(true);
        setEditedSkills([...skillsData]);
    };

    const handleCancelClick = () => {
        setEditing(false);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`http://localhost:5500/api/profile/edit/${userId}`, { skills: editedSkills });
            setSkillsData([...editedSkills]);
            setEditing(false);
        } catch (error) {
            console.error('Error updating user skills:', error);
        }
    };

    const handleInputChange = (e, index) => {
        const updatedSkills = [...editedSkills];
        updatedSkills[index] = e.target.value;
        setEditedSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        const updatedSkills = [...editedSkills, newSkill];
        setEditedSkills(updatedSkills);
        setNewSkill('');
    };

    return (
        <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Skills</h1>
                </div>
                <div>
                    {editing ? (
                        <div className="flex space-x-2">
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                            <button
                                className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button
                            className="font-medium rounded-xl bg-violet-50 px-4"
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
            <div className="mt-5">
                <ul>
                    {editing ? (
                        editedSkills.map((skill, index) => (
                            <li key={index} className="mb-3">
                                <input
                                    type="text"
                                    value={skill}
                                    onChange={(e) => handleInputChange(e, index)}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </li>
                        ))
                    ) : (
                        skillsData.map((skill, index) => (
                            <li key={index} className="mb-3">
                                {skill}
                            </li>
                        ))
                    )}
                    {editing && (
                        <li className="mb-3">
                            <input
                                type="text"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                className="border rounded-md px-2 py-1 w-full"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mt-2"
                                onClick={handleAddSkill}
                            >
                                Add Skill
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
