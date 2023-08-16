import React from 'react'


export default function Skills() {
    return (
        <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Skills</h1>
                </div>
                <div>
                    <button className="font-medium rounded-xl bg-violet-50 px-4">
                        Edit
                    </button>
                </div>
            </div>
            <div className="mt-5">

                <ul>
                    <li  className="mb-3">
                        nextjs
                    </li>
                    <li  className="mb-3">
                        ui design
                    </li>
                </ul>
            </div>
        </div>
    )
}
