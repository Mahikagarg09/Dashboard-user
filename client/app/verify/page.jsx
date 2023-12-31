"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Page() {

    const [otp, setOtp] = useState("");
    const [error, setError] = useState(null); // State to hold error information
    const router = useRouter();

    const handleVerify = async (e) => {
        e.preventDefault();

        const params = new URLSearchParams(window.location.search);
        const userId = params.get("userId"); 

        console.log(userId);

        try {
            const response = await axios.post("https://user-dashboard-9a9g.onrender.com/api/auth/verifyOTP", { userId, otp });
            console.log(response);
            const status = response.data.status;

            if (status === 'VERIFIED') {
                // Navigate to home page after successful verification
                router.push('/');
            }
        } catch (error) {
            setError(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email</p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleVerify}>
                            <div className="form-control w-full max-w-xs m-auto py-3 items-center justify-center text-xl">
                                <input
                                    type="text"
                                    placeholder="Enter your OTP here"
                                    className="input w-full max-w-xs mb-3 border border-trueGray-900 py-3 text-center"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div className="text-center">
                                <button className="bg-blue-900 text-white w-full max-w-xs mt-5 px-1 py-2 rounded-lg">
                                    Verify
                                </button>
                            </div>
                        </form>
                    </div>
                    {error && (
                        <div className="text-center text-red-500">
                            {error}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
