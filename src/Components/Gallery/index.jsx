import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
export const  Gallery = forwardRef((props, ref) => {
    return (
        <dib ref={ref} className="lg:grid grid-rows-3 grid-cols-3 gap-4 w-full p-6 ">
            <div className="h-[481px] p-10 lg:p-0">
                <img
                    className="h-full  rounded-lg w-[] object-cover"
                    src="/assets/cr1.jpeg"
                    alt="gallery-photo"
                />
            </div>
            <div className="h-[481px] p-10 lg:p-0">
                <img
                    className="h-full  rounded-lg object-cover"
                    src="/assets/r1c2.jpeg"
                    alt="gallery-photo"
                />
            </div>
            <div className="row-span-2 p-10 lg:p-0">
                <img
                    className="h-full  rounded-lg object-cover"
                    src="/assets/c3.jpeg"
                    alt="gallery-photo"
                />
            </div>
            <div className="row-span-2 p-10 lg:p-0">
                <img
                    className="h-full  rounded-lg object-cover"
                    src="/assets/r2.jpeg"
                    alt="gallery-photo"
                />
            </div>
            <div className="h-[481px] p-10">
                <h2 className="text-[55px] font-light leading-10">
                    We celebrate <span className="text-[#F36F2B]">success</span>
                </h2>
                <p className="text-[#515151] mt-10 text-[13px]">
                    At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                    celebrating these moments because they underscore the commitment and effort put into each project.

                </p>
                <p className="text-[#515151] mt-10 text-[13px]">
                    Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                    team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.
                </p>
            </div>
            <div className="col-span-2 h-[481px] w-full p-10 lg:p-0">
                <img
                    className="h-full  rounded-lg w-full object-cover"
                    src="/assets/r3.jpeg"
                    alt="gallery-photo"
                />
            </div>
        </dib>

    );
})