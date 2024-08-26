import React from 'react'
import { FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex min-h-96 pb-36 pt-56 main-color flex-col justify-center align-middle">
      <h2 className=' mx-auto text-4xl font-bold '>ABOUT COMPONENT</h2>
      <div className='about-lines mt-5'>
      <FaStar className='mx-auto text-lg'/>
      </div>
      <div className="grid md:grid-cols-2 mx-auto container-about  lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
        <div className=' row-span-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className=' row-span-6'>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </div>
  )
}
