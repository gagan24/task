
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function StickyNavbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [openNav, setOpenNav] = React.useState(false);
  const [changeColor, setChangeColor] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  React.useEffect(() => {
    const func = () => {
      if(window.scrollY > 200 ){
        setChangeColor(true)
        } else {
          setChangeColor(false)
        }
    }
window.addEventListener("scroll", func)

return () => window.removeEventListener("scroll", func)


  }, [])

  const navList = (

    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Expertise
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          People
        </a>
      </Typography>
    </ul>
  );

  const navList2 = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          AU
        </a>
      </Typography>

    </ul>
  );

  console.log(changeColor)


  return (
    <div className=" w-[calc(100%+48px)] relative h-full ">
      <nav className={`fixed lg:right-0 left-0 top-0 z-10 h-max max-w-full rounded-none px-4 py-6 lg:px-8 lg:py-4 border-b-[1px] border-white ${changeColor ? "bg-[#112C41]" : ""}`}>
        <div className="flex items-center justify-between text-white w-full">
          <div className="flex items-center gap-4 w-full">


            <div className=" hidden lg:block  w-full">
              <div className="flex justify-between w-full items-center">
                {navList}
<div className="lg:flex lg:w-[52%] justify-between">

                <img
                  src="/assets/nav.png"
                  alt="image 2"
                  className="h-20 "
                  />
                {navList2}
                  </div>
              </div>

            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="text-white" open={openNav}>
          {navList}
          {navList2}

        </MobileNav>
      </nav>
      <div>
        {children}
      </div>
    </div>
    //     <nav className="bg-gray-800 shadow-lg sticky">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="flex justify-between h-16">
    //             <div className="flex items-center">
    //                 {/* Hamburger icon for mobile */}
    //                 <div className="flex-shrink-0">
    //                     <button
    //                         onClick={toggleNavbar}
    //                         className="text-white p-2 focus:outline-none focus:bg-gray-700 md:hidden"
    //                     >
    //                         {isOpen ? <FaTimes /> : <FaBars />}
    //                     </button>
    //                 </div>
    //                 {/* Logo */}
    //                 <div className="flex-shrink-0 flex items-center">
    //                     <a href="#" className="text-white font-semibold">Logo</a>
    //                 </div>
    //             </div>
    //             {/* Navbar items */}
    //             <div className={`md:flex md:items-center hidden lg:block`}>
    //                 <div className="md:flex-grow">
    //                     <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">Item 1</a>
    //                     <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">Item 2</a>
    //                     <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">Item 3</a>
    //                     <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white mr-4">Item 4</a>
    //                     <a href="#" className="block mt-4 md:inline-block md:mt-0 text-white">Item 5</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     {/* Dropdown for mobile */}
    //     <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    //         <div className="px-2 pt-2 pb-3 space-y-1">
    //             <a href="#" className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Item 1</a>
    //             <a href="#" className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Item 2</a>
    //             <a href="#" className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Item 3</a>
    //             <a href="#" className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Item 4</a>
    //             <a href="#" className="block mt-1 px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Item 5</a>
    //         </div>
    //     </div>
    // </nav>
  );
}