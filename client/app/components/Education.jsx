import React from 'react'

const Edu = [
    {
        Institute: "IIT Hyderabad",
        Time: "2021-2025",
        Course: "Btech",
        Info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
]

export default function Education() {
  return (
    <div className="py-3 sm:py-4">
                <div className="flex items-center justify-between space-x-4 space-y-2">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="text-lg">Education</p>
                            <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                                edit
                            </div>
                        </div>
                        {Edu.map((edu) => (
                            <div className="shadow-sm shadow-gray-500 rounded-xl p-4 mt-4" key={edu.Time}>
                            <div className="py-3 sm:py-4">
                            <p className="text-xl text-blue-900 font-medium">{edu.Institute}</p>
                                <div className="flex items-center justify-between space-x-4 space-y-2">
                                    
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold text-trueGray-800">({edu.Time})</p>
                                            <div className="inline-flex items-center text-base font-semibold rounded-xl text-trueGray-800 px-4">
                                                {edu.Course}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>

            </div>
  )
}
