"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from "../../public/company_logo.png";
import axios from 'axios';

const Experience = () => {
    const [experienceData, setExperienceData] = useState([]);
    const [editedExperienceIndex, setEditedExperienceIndex] = useState("");
    const [editedExperience, setEditedExperience] = useState({});

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchExperienceData = async () => {
            try {
                const response = await axios.get(`https://user-dashboard-9a9g.onrender.com/api/profile/${userId}`);
                setExperienceData(response.data.user.experience || []);
            } catch (error) {
                console.error('Error fetching user experience:', error);
            }
        };

        fetchExperienceData();
    }, []);

    const handleEditClick = (index) => {
        setEditedExperienceIndex(index);
        setEditedExperience(experienceData[index]);
    };

    const handleCancelClick = () => {
        setEditedExperienceIndex("");
        setEditedExperience({});
    };

    const handleSaveClick = async (index) => {
        try {
            const updatedExperienceData = [...experienceData];
            updatedExperienceData[index] = editedExperience;

            await axios.put(`https://user-dashboard-9a9g.onrender.com/api/profile/edit/${userId}`, {
                experience: updatedExperienceData,
            });
            setExperienceData(updatedExperienceData);
            setEditedExperienceIndex("");
            setEditedExperience({});
        } catch (error) {
            console.error('Error updating user experience:', error);
        }
    };

    const handleInputChange = (e, field) => {
        setEditedExperience({
            ...editedExperience,
            [field]: e.target.value,
        });
    };

    return (
        <div>
            {experienceData.map((experience, index) => (
                <div key={index} className="mb-2 p-5 rounded-lg">
                    <div className="flex justify-between mb-5">
                        <div>
                            <h1 className="text-lg">Experience</h1>
                        </div>
                        <div>
                            {editedExperienceIndex === index ? (
                                <>
                                    <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 mx-2" onClick={() => handleSaveClick(index)}>Save</button>
                                    <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 " onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 " onClick={() => handleEditClick(index)}>Edit</button>
                            )}
                        </div>
                    </div>
                    <div className="mt-3 border-2 border-borderColor rounded-xl px-5 py-4 text-center md:text-left md:flex md:space-x-5">
                        <div>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedExperience.years || ''}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'years')}
                                    />
                                ) : (
                                    experience.years
                                )}
                            </p>
                            <p className="text-[#1F1F1FB2]">
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedExperience.company || ''}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'company')}
                                    />
                                ) : (
                                    experience.company
                                )}
                            </p>
                        </div>
                        <div>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedExperience.role || ''}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'role')}
                                    />
                                ) : (
                                    experience.role
                                )}
                            </p>
                            <p>
                                {editedExperienceIndex === index ? (
                                    <input
                                        type="text"
                                        value={editedExperience.jobtype || ''}
                                        className="p-1 rounded-md border-2 border-borderColor focus:outline-borderColor w-[150px]"
                                        onChange={(e) => handleInputChange(e, 'jobtype')}
                                    />
                                ) : (
                                    experience.jobtype
                                )}
                            </p>
                        </div>
                        <div className="flex justify-center mt-2 md:block md:mt-0">
                            <Image src={Logo} alt="logo" className="w-16" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
