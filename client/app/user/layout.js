"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/menuIcon.png";
import companylogo from "../../public/company_logo.png";
import avatar from "../../public/user.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from 'axios';

export default function layout({children}) {

    const [sidebarVisible, setSidebarVisible] = useState(false);

     const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Close the sidebar when clicking outside of it
    useEffect(() => {
        const closeSidebarOnOutsideClick = (e) => {
            if (sidebarVisible && !e.target.closest(".sidebar")) {
                setSidebarVisible(false);
            }
        };

        document.addEventListener("click", closeSidebarOnOutsideClick);

        return () => {
            document.removeEventListener("click", closeSidebarOnOutsideClick);
        };
    }, [sidebarVisible]);

    const router=useRouter();
    const pathname = usePathname();

    const handleLogOut = () => {
        localStorage.clear();
        router.push('/');
    }

    const [name, setname] = useState("");

    // const userId=localStorage.getItem("userId")
    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

    useEffect(() => {
        // Fetch user data from your API endpoint
        const fetchname = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
                setname(response.data.user.name) // Update this according to your API response structure
                
            } catch (error) {
                console.error('Error fetching user name:', error);
            }
        };

        fetchname();
    }, []);

 
    return (
        <div>
            <div className="z-10 bg-white flex justify-between items-center py-2 px-4 border-2 border-trueGray-900 sticky top-0 w-full">
                <div className="flex">
                    <div>
                        <Image alt="menu" src={menuIcon} className="cursor-pointer w-10 object-cover md:hidden" onClick={toggleSidebar} />
                    </div>
                    <div>
                        <Image alt="logo" src={companylogo} className="cursor-pointer object-cover ml-1 mt-1 md:hidden" />
                    </div>
                </div>
                <div className="flex md:mr-7 cursor-pointer">
                    <div className="flex justify-center w-16 md:mr-3">
                        <IoNotificationsOutline size={28} className="mt-2 md:mt-3" />
                    </div>
                    <div className="hidden md:flex md:justify-center border-2 border-trueGray-900 rounded-md py-1 w-full">
                        <div>
                            <Image alt="user" src={avatar} className="w-12 mr-2 h-12 rounded-full object-cover" />
                        </div>
                        <div className="block text-blue-900 mr-7">
                            <p className="text-xs mt-1">Welcome Back,</p>
                            <p className="text-md font-semibold">{name}</p>
                        </div>
                        <div>
                            <FiChevronDown className="text-blue-900mt-3" size={25} />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <img alt="user" src={avatar} className="w-12 h-12 rounded-full object-cover" />
                    </div>
                </div>
            </div>

            <div
                className={`${sidebarVisible ? "translate-x-0" : "-translate-x-full"
                    } sidebar md:-translate-x-0 bg-white border-2 border-trueGray-900 z-10 fixed top-0 h-screen w-[300px] px-5 cursor-pointer transform transition-transform duration-500 ease-in-out`}
            >
                <div>
                    <Link href="/user/profile">
                        <div className="text-center text-xl font-bold mt-7 mb-3">
                            <span className="border-2 border-trueGray-900 px-12 py-3 rounded-lg">Dashboard</span>
                        </div>
                    </Link>
                    <div className="text-blue-900 mt-16">
                        <Link href="/user/profile">
                            <div className="flex mb-3">
                                <BiChevronRight size={25} className="mt-3" />
                                <p className= {`ml-5 text-lg px-12 py-3 ${pathname == '/user/profile' ? 'border-2 border-blue-900 rounded-lg' : ''}`}>My Profile</p>
                            </div>
                        </Link>
                        <Link href="/user/connections">
                            <div className="flex mb-3">
                                <BiChevronRight size={25} className="mt-3" />
                                <p className={`ml-5 text-lg px-12 py-3 ${pathname == '/user/connections' ? 'border-2 border-blue-900 rounded-lg' : ''}`}>My Connections</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center text-lg font-bold fixed bottom-10 w-[250px]">
                    <p className="text-center" onClick={handleLogOut}>Log Out</p>
                </div>
            </div>
            <div className="md:ms-[300px] p-5">{children}</div>
        </div >

    )
}
