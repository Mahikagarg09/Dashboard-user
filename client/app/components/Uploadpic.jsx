import React from 'react'
import Avatar from "../../public/user.png"
import Image from 'next/image';


export default function Uploadpic() {
    return (
        <div className="flow-root bg-white">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0">
                    <Image className="w-28 h-28 rounded-full" src={Avatar} alt="user photo" />
                    
                </div>
                <div className="inline-flex items-center text-base font-medium rounded-xl bg-violet-50 py-1 px-4">
                    Upload Photo
                </div>
            </div>
        </div>
    )
}
