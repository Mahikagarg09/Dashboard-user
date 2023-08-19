"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Badge from "../../public/badge.png";
import axios from 'axios';

const Certifications = () => {
    let userId;

    if (typeof window !== 'undefined') {
        userId = localStorage.getItem("userId");
    }

    const [editable, setEditable] = useState(false);
    const [certifications, setCertifications] = useState([]);
    const [originalCertifications, setOriginalCertifications] = useState([]);

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchCertificationData = async () => {
            try {
                const response = await axios.get(`https://user-dashboard-9a9g.onrender.com/api/profile/${userId}`);
                setCertifications(response.data.user.certifications || []);
                setOriginalCertifications(response.data.user.certifications || []);
            } catch (error) {
                console.error('Error fetching user certifications:', error);
            }
        };

        fetchCertificationData();
    }, [userId]);

    const handleEditClick = () => {
        setEditable(true);
    };

    const handleSaveClick = async () => {
        try {
            await axios.put(`https://user-dashboard-9a9g.onrender.com/api/profile/edit/${userId}`, { certifications });
            setEditable(false);
            setOriginalCertifications(certifications);
        } catch (error) {
            console.error('Error updating certifications:', error);
        }
    };

    const handleCancelClick = () => {
        setEditable(false);
        setCertifications(originalCertifications);
    };

    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Certifications</h1>
                </div>
                <div>
                    {editable ? (
                        <>
                            <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 mx-2" onClick={handleSaveClick}>Save</button>
                            <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4" onClick={handleCancelClick}>Cancel</button>
                        </>
                    ) : (
                        <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4" onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            </div>
            <div className="mt-3 border-2 border-borderColor sm:rounded-[3rem] sm:px-5 sm:py-4 sm:flex sm:space-x-20 px-3 py-2 rounded-xl">
                <div className="sm:block flex justify-center">
                    <Image src={Badge} alt="badge" className="w-42 sm:w-full sm:ml-5 mt-1" />
                </div>
                {certifications.map((certification,index)=> (
                    <div key={index} className="text-[#1F1F1FB2] text-center sm:text-left">
                        {editable ? (
                            <>
                                <input
                                    type="text"
                                    className="text-lg w-[200px] p-1 rounded-md border-2 border-borderColor focus:outline-borderColor mt-2 sm:mt-0"
                                    value={certification.name}
                                    onChange={(e) => {
                                        const updatedCertifications = certifications.map(cert => {
                                            if (cert.id === certification.id) {
                                                return { ...cert, name: e.target.value };
                                            }
                                            return cert;
                                        });
                                        setCertifications(updatedCertifications);
                                    }}
                                />
                                <input
                                    type="text"
                                    className="mt-2 w-[200px] p-1 rounded-md border-2 border-borderColor focus:outline-borderColor"
                                    value={certification.auth_by}
                                    onChange={(e) => {
                                        const updatedCertifications = certifications.map(cert => {
                                            if (cert.id === certification.id) {
                                                return { ...cert, auth_by: e.target.value };
                                            }
                                            return cert;
                                        });
                                        setCertifications(updatedCertifications);
                                    }}
                                />
                            </>
                        ) : (
                            <div>
                                <p className="text-lg">{certification.name}</p>
                                <p>{certification.auth_by}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certifications;
