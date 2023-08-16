"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import avatar from '../../public/user.png'

const page= ({ user }) => {
    const [isConnected, setIsConnected] = useState(user.isConnected);

    return (
        <div className="flex justify-evenly border-2 border-trueGray-900 rounded-xl bg-secondaryColor py-7">
            <div>
                <h1 className="text-lg">{user.username}</h1>
                <p className="mt-2 text-[#1F1F1FB2]">{user.role}</p>
                <p className="text-[#1F1F1FB2]">{user.company}</p>
                <button
                    className="mt-3 bg-[#BAB6EB] text-[#1F1F1FB2] font-semibold px-2 py-1 rounded-xl "
                >
                    {isConnected ? 'Remove Connection' : 'Connect'}
                </button>
            </div>
            <div>
                <Image src={avatar} alt="avatar" width={100} height={100} />
            </div>
        </div>
    );
};

export default page;
