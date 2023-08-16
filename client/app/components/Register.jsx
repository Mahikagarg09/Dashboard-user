"use client"
import React, { useState } from "react";

const Register = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <form>
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
                        />
                    </div>
                </div>
            </div>
            <div className="text-center mt-9">
                <button className="bg-blue-900 text-white w-full max-w-xs mt-5 px-1 py-2 rounded-lg">Register</button>
            </div>
        </form>
    );
};

export default Register;
