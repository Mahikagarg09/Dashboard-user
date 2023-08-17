"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErr("All fields are necessary");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5500/api/auth/login', { email, password });
            console.log(response.data.message);
            router.push('/user/profile')
        } catch (error) {
            setErr('Invalid email or password');
            console.log(err);
        }
    };

    return (
        <div class="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
            <div className=" pb-[80px] text-center ">
                <h1 className="text-3xl lg:text-[2.5rem]">Create New Account</h1>
                <p className="mt-5">
                    <Link href={`/register`}>Already have an account? <span className='text-blue-900 font-semibold'>Log In</span></Link>
                </p>
            </div>
            <div class="max-w-md bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                <div class="p-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                    <p class="text-gray-700 mb-6 text-lg">Please sign in to your account</p>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label class="block text-blue-900 font-bold mb-2 text-xl" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="email"
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="mb-6">
                            <label class="block text-blue-900 text-xl font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="flex items-center justify-center">
                            <button class="bg-blue-900 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                {err && (
                    <div>
                        <p className="mt-5 text-center text-md font-semibold text-red-500">{err}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
