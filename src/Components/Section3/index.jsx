

const Section3 = () => {
    return (
        <div className='lg:flex py-6 px-8 h-[60vh]'>
            <div className="lg:w-1/2 lg:p-20">

                <p className="text-[34px] font-light leading-8">
                    Employee  <span className="text-[#F36F2B]">Appreciation Program</span>
                </p>

                <p className="text-[#515151] mt-10 text-[13px]">
                    Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                    and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                    company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                    recognition of their unwavering dedication. our way of saying thank you and ensuring that every significant chapter in our collective journey is
                    celebrated with the grandeur it deserves

                </p>
            </div>
            <div className="lg:w-1/2">
                <img
                    className="w-full h-full rounded-lg object-cover "
                    src="/assets/program.jpeg"
                    alt="gallery-photo"
                />
            </div>
        </div>
    )
}

export default Section3