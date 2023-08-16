import React from 'react';
import Image from 'next/image';
import Logo from "../../public/company_logo.png";

const staticExperiences = [
    {
        years: "2-3 years",
        company: "Company A",
        role: "Software Engineer",
        job_type: "Full-time"
    },
    {
        years: "1 year",
        company: "Company B",
        role: "Front-end Developer",
        job_type: "Contract"
    },
];

const Experience = () => {

    return (
        <div>
            <div className="flex justify-between mb-5">
                <div>
                    <h1 className="text-lg">Experience</h1>
                </div>
                <div>
                    <button className="text-base font-medium rounded-xl bg-violet-50 px-4">Edit</button>
                </div>
            </div>
            {staticExperiences.map((experience, index) => (
                <div key={index} className="p-3 rounded-lg">

                    <div className=" border-2 border-trueGray-900 rounded-xl px-5 py-4 text-center md:text-left md:flex md:space-x-5">
                        <div>
                            <p>{experience.years}</p>
                            <p className="text-[#1F1F1FB2]">{experience.company}</p>
                        </div>
                        <div>
                            <p>{experience.role}</p>
                            <p>{experience.job_type}</p>
                        </div>
                        <div className="flex justify-center md:block md:mt-0">
                            <Image src={Logo} alt="logo" className="w-16" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;
