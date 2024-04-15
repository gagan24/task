import React from 'react'

const Location = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-32 p-20'>
            <p className='text-[28px] lg:w-[45vw]'>
                As a <span className='text-[#F36F2B]'> global business, </span>we encourage you to contact us no matter where you are located in the world.
            </p>
            <p className='my-8'>
                Browse our job opportunities across the globe.
            </p>
            <div >
                <p className='text-[#F36F2B]'>OPEN ROLES</p>
            </div>
            <div className='my-16 lg:mx-20'>
                <img
                    src="/assets/location.png"
                    alt="image 2"
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    )
}

export default Location