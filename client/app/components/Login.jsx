import React from 'react'
import Link  from 'next/link';

export default function Login() {
    return (
        <div class="h-screen bg-gray-200 py-20 p-4 md:p-20 lg:p-32">
            <div className=" pb-[80px] text-center ">
                <h1 className="text-3xl lg:text-[2.5rem]">Create New Account</h1>
                <p className="mt-5">
                    <Link href={`/`}>Already have an account? <span className='text-blue-900 font-semibold'>Log In</span></Link>
                </p>
            </div>
            <div class="max-w-md bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                <div class="p-6">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                    <p class="text-gray-700 mb-6 text-lg">Please sign in to your account</p>
                    <form>
                        <div class="mb-4">
                            <label class="block text-blue-900 font-bold mb-2 text-xl" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-blue-900 text-xl font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                        </div>
                        <div class="flex items-center justify-center">
                            <button class="bg-blue-900 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
