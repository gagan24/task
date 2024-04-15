import React from 'react'

const Section4 = () => {
    return (
        <div className='lg:flex gap-4 lg:h-[55vh] m-9 mt-40'>
            <dic className="w-[65%]">
                <img
                    className="h-full w-full rounded-lg object-cover"
                    src="/assets/thank.jpeg"
                    alt="gallery-photo"
                />
            </dic>
            <div className="w-[35%]">
                <img
                    className="h-full w-full  rounded-lg object-cover"
                    src="/assets/group.jpeg"
                    alt="gallery-photo"
                />
            </div>
        </div>
    )
}

export default Section4