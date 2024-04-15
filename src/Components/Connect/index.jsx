import {forwardRef} from 'react'
import { DetailAccordion } from './Accordian'
// eslint-disable-next-line react/display-name
export const Connect = forwardRef((props,ref) => {
    return (
        <div ref={ref} className=' lg:flex min-h-screen lg:pl-28 lg:pr-0 px-10 gap-10 '>
            <div className=' py-28 w-[100%]'>
                <h2 className='text-[44px] font-extralight tracking-tighter]'>We <span className='text-[#F36F2B]'  >stay connected</span> </h2>
                <div className=''>
                    {
                        DATA.map((el, index) => <DetailAccordion key={index} number={index + 1} title={el.title} description={el.description} />)
                    }
                </div>
            </div>
            <div className=''>
                <img src="/assets/connect.jpeg" className='w-full h-full object-cover brightness-50' />
            </div>
        </div>
    )
}
)



const DATA = [
    {
        title: "Quarterly Business Updates",
        description: "We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential."
    },
    {
        title: "Industry Events & Networking",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose."
    },
    {
        title: "Associations Memberships",
        description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]