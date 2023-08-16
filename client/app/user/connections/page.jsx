import React from 'react';
import Connect from '../../components/Connect'

const connectedUsers = [
    {
        _id: '1',
        username: 'John Doe',
        role: 'Software Engineer',
        company: 'Tech Inc.',
        isConnected: true,
    },

];

const potentialConnections = [
    {
        _id: '2',
        username: 'Jane Smith',
        role: 'Front-end Developer',
        company: 'Web Co.',
        isConnected: false,
    },

];

export default function Page() {
    return (
        <div className="relative">
          {/* -------------------HEADER------------------------------ */}
            <div className="bg-blue-900 text-white h-[25vh] md:h-[28vh] rounded-lg">
                <p className="p-3 md:p-5 text-sm md:text-lg">My Connections</p>
            </div>

            {/* -----------------------MAIN CONTENT--------------------- */}
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9">
                {connectedUsers.map(user => (
                    <Connect key={user._id} user={user} connected="Remove Connection" />
                ))}
            </div>
            <div className="mt-14">
                <h1 className="text-2xl">People you can also connect</h1>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-5 mt-9 mb-20">
                    {potentialConnections.map(user => (
                        <Connect key={user._id} user={user} connected="Connect" />
                    ))}
                </div>
            </div>
        </div>
    );
}
