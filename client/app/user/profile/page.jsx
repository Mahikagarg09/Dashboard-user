import React from 'react'
import About from '../../components/About'
import Uploadpic from '../../components/Uploadpic'
import Details from '../../components/Details'
import Skills from '../../components/Skills'
import Professional from '../../components/Professional'
import Experience from '../../components/Experience'
import Certifications from '../../components/Certifications'
import Education from '../../components/Education'

const page = () => {
    return (

        <div className="relative">
            {/* ---------------HEADER----------------------- */}

            <div className="bg-blue-900 text-white h-[25vh] md:h-[28vh] rounded-lg">
                <p className="p-3 md:p-5 text-sm md:text-lg">My profile</p>
            </div>

            {/* -----------------PROFILE CONTENT----------------------- */}

            <div className="w-[80vw] mt-[-90px] sm:w-[90vw] md:w-[53vw] lg:w-[65vw] xl:w-[72vw] m-auto md:mt-[-80px] bg-white rounded-md sm:px-9 px-2 py-7">
                <div className="xl:grid xl:grid-cols-2 xl:gap-20">
                    <div>
                        <Uploadpic/>
                        <Details/>
                        <About/>
                        <Skills/>
                    </div>
                    <div>
                        <Professional/>
                        <Certifications/>
                        <Experience/>
                        <Education/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default page