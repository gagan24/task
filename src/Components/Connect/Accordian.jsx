import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function DetailAccordion({number, title, description}) {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

 

  
  return (
    <>
     <Accordion open={open === number} icon={<Icon id={number} open={open} />}>
     <AccordionHeader className="font-medium text-[24px]" onClick={() => handleOpen(number)}>{title}</AccordionHeader>
        <AccordionBody className="text-[#6B6B6B] leading-9	">
        {description}
        </AccordionBody>
      </Accordion>
    </>
  );
}