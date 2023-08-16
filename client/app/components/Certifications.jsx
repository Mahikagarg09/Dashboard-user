import React from 'react';
import Image from 'next/image'; // You need to import the 'Image' component from Next.js
import Badge from "../../public/badge.png";


const certifications = [
    {
        id: 1,
        name: 'Certification 1',
        issued_by: 'Organization A'
    },
];


export default function Certifications() {
    return (
        <div className="mb-2 p-5 rounded-lg">
            <div className="flex justify-between">
                <div>
                    <h1 className="text-lg">Certifications</h1>
                </div>
                <button className="text-base font-medium rounded-xl bg-violet-50 px-4">Edit</button>
            </div>
            <div className="mt-3 border-2 border-trueGray-900 sm:rounded-[3rem] sm:px-5 sm:py-4 sm:flex sm:space-x-20 px-3 py-2 rounded-xl">
                <div className="sm:block flex justify-center">
                    <Image src={Badge} alt="badge" className="w-42 sm:w-full sm:ml-5 mt-1" />
                </div>
                {certifications.map(certification => (
                    <div key={certification.id} className="text-[#1F1F1FB2] text-center sm:text-left">
                        {/* Display certification details in non-editable mode */}
                        <div>
                            <p className="text-lg">{certification.name}</p>
                            <p>{certification.issued_by}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
