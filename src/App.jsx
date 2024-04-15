import './App.css'
import { useRef } from 'react'
import { StickyNavbar } from './Components/Navbar'
import {CarouselDefault} from './Components/Carousal'
import SubNav from './Components/SubNav'
import {Connect} from './Components/Connect'
import {Section2} from './Components/Section2'
import { Gallery } from './Components/Gallery'
import Section3 from './Components/Section3'
import Section4 from './Components/Section4'
import {Story} from './Components/Story'
import Location from './Components/Location'
import { Footer } from './Components/Footer'
function App() {
const connectedRed = useRef(null)
const believe = useRef(null)
const celebrate = useRef(null)
const handleClick = (val) => {
  if(val === 0 && connectedRed?.current ){

    connectedRed?.current?.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      // block: 'start', // Align the top of the section at the top of the viewport
    }); 
  }
  else if(val === 1 && believe?.current ){

    believe?.current?.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      // block: 'start', // Align the top of the section at the top of the viewport
    }); 
  }
  else if(val === 2 && celebrate?.current ){

    celebrate?.current?.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling behavior
      // block: 'start', // Align the top of the section at the top of the viewport
    }); 
  }
}
  return (
    <>

       <StickyNavbar />
       <CarouselDefault />
       <SubNav handleClick={handleClick}/>
       <Connect ref={connectedRed}/>
       <Section2 ref={believe}/>
       <Gallery ref={celebrate} />
       <Section3 />
       <Section4 />
       <Story />
       <Location />
       <Footer />
    </>
  )
}

export default App
