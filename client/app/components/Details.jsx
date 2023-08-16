import React from 'react'

export default function Details() {
    return (
        <>
            <ul  className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Your Name</p>
                            <p className="text-gray-500 mt-3">Username</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Email</p>
                            <p className="text-gray-500 mt-3">xyz@gmail.com</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center justify-between space-x-4 space-y-2">
                        <div className="flex-shrink-0">
                            <p className="font-medium text-lg text-warmGray-900">Phone No.</p>
                            <p className="text-gray-500 mt-3">+91 123456789</p>
                        </div>
                        <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                            Edit
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
