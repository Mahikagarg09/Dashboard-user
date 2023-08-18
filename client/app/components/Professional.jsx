import React from 'react'
import stars from "../../public/stars.png"
import Image from 'next/image';

export default function Professional() {
    return (
        <div className="mb-5 mt-5 border-2 border-trueGray-900 p-5 rounded-lg">
            <div className="sm:flex justify-between">
                <div>
                    <h1 className="text-lg">Professional Details</h1>
                    <p className="mt-1 text-[#1F1F1FB2]">
                        These are professional details shown to users in app
                    </p>
                </div>
                <div>
                    <Image src={stars} alt="star" className="w-20 hidden sm:block" />
                </div>
            </div>
        </div>
    )
}
