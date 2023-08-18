"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Avatar from '../../public/user.png';
import axios from 'axios';


const Uploadpic = () => {

    let userId;

    if (typeof window !== 'undefined') {
        // Check if running on the client side
        userId = localStorage.getItem("userId");
    }

    const [selectedImage, setSelectedImage] = useState(null);

    const [uploading, setUploading] = useState(false);

    const fileInputRef = useRef(null);

    const [userImage, setUserImage] = useState(null);

    useEffect(() => {
        fetchUserImage();
        console.log("setSelectedImage is", selectedImage);
    }, []);

    const fetchUserImage = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/api/profile/${userId}`);
            const userData = response.data.user;
            if (userData.image && userData.image.url) {
                setUserImage(userData.image.url);
            }
        } catch (error) {
            console.error('Error fetching user image:', error);
        }
    };

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log("Selected file:", selectedFile);
        transformFile(selectedFile);
    };

    const transformFile = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadstart = () => {
                console.log("Reader load started");
            };
            reader.onload = () => {
                console.log("Reader load completed");
                console.log(reader.result);
                setSelectedImage(reader.result);
            };
            reader.onloadend = () => {
                console.log("Reader load ended");
                console.log("setSelectedImage is", selectedImage);
            };
        } else {
            setSelectedImage(null);
        }
    };

    console.log(selectedImage)


    // Upload the selected image to the server
    const uploadImage = async () => {
        try {
            setUploading(true);
            const response = await axios.post(`http://localhost:5500/api/profile/uploads/${userId}`, {
                image: selectedImage,
            });
            setUploading(false);
            setSelectedImage(null);
            fetchUserImage();
            console.log(response)
        } catch (error) {
            console.log('Error uploading image:', error);
            setUploading(false);
        }
    };


    return (
        <div className="sm:flex text-center sm:justify-between mb-2 p-5 pt-2">
            <div className="flex justify-center">
                {selectedImage || userImage ? (
                    <img src={selectedImage || userImage} alt="Avatar" className="bg-cover w-28 h-28 rounded-full" />
                ) : (
                    <Image src={Avatar} alt="Avatar" className="w-28 bg-cover" />
                )}
            </div>
            <div className="sm:mt-[40px] mt-5">
                {uploading ? (
                    <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 mx-2" disabled>
                        Uploading...
                    </button>
                ) : selectedImage ? (
                    <button className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 " onClick={uploadImage}>
                        Upload
                    </button>
                ) : (
                    <label className="items-center text-base font-medium rounded-xl bg-violet-50 px-4 cursor-pointer">
                        Upload Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            className="hidden"
                        />
                    </label>
                )}
            </div>
        </div>
    );
};

export default Uploadpic;
