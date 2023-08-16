"use client"
import React, { useState } from "react";
import axios from "axios";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [certificationName, setCertificationName] = useState("");
    const [certificationAuthBy, setCertificationAuthBy] = useState("");
    const [experienceRole, setExperienceRole] = useState("");
    const [experienceJobType, setExperienceJobType] = useState("");
    const [experienceCompany, setExperienceCompany] = useState("");
    const [experienceYears, setExperienceYears] = useState("");
    const [educationInstitute, setEducationInstitute] = useState("");
    const [educationDegree, setEducationDegree] = useState("");
    const [educationYears, setEducationYears] = useState("");
    const [educationDescription, setEducationDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary");
            return;
        }

        const skillsArray = skills.split(',').map(skill => skill.trim());

        const res = {
            name,
            email,
            password,
            phone,
            about,
            skills:skillsArray,
            certificationName,
            certificationAuthBy,
            experienceRole,
            experienceJobType,
            experienceCompany,
            experienceYears,
            educationInstitute,
            educationDegree,
            educationYears,
            educationDescription,
        };

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.");
            return;
        };

        try {
            const response = await axios.post("http://localhost:5500/api/auth/register", res);
            console.log(response.data); // Display the response from the server

            // Clear form fields or show success message
        } catch (error) {
            if (error.response) {
                console.error(error); // Display the error response from the server
            } else {
                console.error("An error occurred while registering:", error.message);
            }
            setError("An error occurred while registering");
        }

    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="md:grid md:grid-cols-3 md:gap-5 text-center md:text-left">
                {/* ---------------------PERSONAL DETAILS------------------------ */}
                <div className="col-span-1 mb-5 md:mb-0">
                    <h1 className="text-xl text-blue-900 font-semibold">Personal Details</h1>
                </div>
                <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3">
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Email Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Phone</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Phone"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => { setPhone(e.target.value) }}
                        />
                    </div>
                </div>
            </div>
            {/* ------------------------ABOUT--------------------------------------- */}
            <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                <div className="col-span-1">
                    <h1 className="text-xl text-blue-900 font-semibold">About</h1>
                </div>
                <div className="col-span-2 m-auto mt-3">
                    <div className="form-control md:max-w-xs lg:w-full mb-2">
                        <label className="label">
                            <span className="label-text text-md font-semibold">About</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Give a brief summary about yourself"
                            className="border border-trueGray-900 py-3 md:w-[42vw]"
                            onChange={(e) => { setAbout(e.target.value) }}
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text text-md font-semibold">Skills</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your skills separated by commas"
                                className="border border-trueGray-900 md:w-[42vw]"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------CERTIFICATIONS------------------------- */}
            <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                <div className="col-span-1">
                    <h1 className="text-xl  text-blue-900 font-semibold">Certifications Information</h1>
                </div>
                <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Certification Course</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Certification Name"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setCertificationName(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Certification By</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Authority"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setCertificationAuthBy(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* -----------------------------EXPERIENCE------------------------------ */}
            <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                <div className="col-span-1">
                    <h1 className="text-xl  text-blue-900 font-semibold">Work Experience</h1>
                </div>
                <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Experience Role</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Experience Role"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setExperienceRole(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Job Type</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Job Type"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setExperienceJobType(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Company</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Company Name"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setExperienceCompany(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Time</span>
                        </label>
                        <input
                            type="text"
                            placeholder="For e.g 2021-2022"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setExperienceYears(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {/* ------------------------------EDUCATION------------------------------- */}
            <div className="md:grid md:grid-cols-3 md:gap-5 md:text-left md:mt-5 text-center mt-12">
                <div className="col-span-1">
                    <h1 className="text-xl  text-blue-900 font-semibold">Education</h1>
                </div>
                <div className="col-span-2 lg:grid lg:grid-cols-2 lg:gap-3 mt-5">
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Institute</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Institute Name"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setEducationInstitute(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Degree </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Degree"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setEducationDegree(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Duration</span>
                        </label>
                        <input
                            type="text"
                            placeholder="For e.g (2021 - 2025)"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setEducationYears(e.target.value)}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs mb-2 m-auto">
                        <label className="label">
                            <span className="label-text text-md font-semibold">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder=" Description"
                            className="border border-trueGray-900 w-full max-w-xs"
                            onChange={(e) => setEducationDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-9">
                <button className="bg-blue-900 text-white w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Register</button>
            </div>
            {error && (
                <div>
                    <p className="mt-5 text-center text-md font-semibold text-red-500 ">{error}</p>
                </div>
            )}
        </form>
    );
};

export default Register;
