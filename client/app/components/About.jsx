import React from 'react'

export default function About() {
  return (
    <div className="border-2 border-trueGray-900 p-5 rounded-lg mt-4">
            <div className="py-3 sm:py-4">
                <div className="flex items-center justify-between space-x-4 space-y-2">
                    <div className="flex-grow">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-lg">About <span className="text-blue-900">UserName</span></p>
                            <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 px-4">
                                Edit
                            </div>
                        </div>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </div>
        </div>

  )
}
