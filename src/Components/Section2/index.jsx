
import { forwardRef } from "react"
// eslint-disable-next-line react/display-name
export const Section2 = forwardRef((props,ref) => {
    return (
        <div ref={ref} className=" bg-[#112C41] lg:px-28 lg:pt-28 px-16 pt-16">

            <div className='lg:flex '>
                <div className="lg:w-1/2 ">
                    <h2 className="text-[55px] text-white font-light">We believe in <span className="text-[#F36F2B]"> diversity & inclusion</span></h2>
                </div>
                <div className="lg:w-1/2 leading-10">
                    <p className="text-[14px] font-light text-white">
                        At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
                        employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.
                    </p>
                    <p className="mt-12 text-[14px] text-white">

                        Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging.
                    </p>
                    <p className="text-white font-bold mt-12">
                        Some of our strategic initiatives include:
                    </p>
                </div>
            </div>
            <div>
                <img src="/assets/section2.png" />
            </div>
        </div>
    )
}
)
