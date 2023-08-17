"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const router = useRouter();

    console.log(isLoggedIn)
    // Effect hook that runs when the component mounts or router changes
    useEffect(() => {

        // Check if user has already login previously
        if (isLoggedIn) {
            router.push('/user/profile'); // Redirect to the user's profile page if user data exists
        }
        else{
            router.push('/') // Redirect to the default page if user data doesn't exist
        }
    }, [router]);
     // Return the child components
    return children;
};


export default AuthContext;
