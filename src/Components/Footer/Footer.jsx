import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";


export default function Footer() {
  return (
<div>
    <div className='grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4 footer-bg py-20 px-16'>
      <div className="grid grid-cols-1 text-center">
        <h2 className='text-3xl font-semibold mb-3'>LOCATION</h2>
        <p className=' mb-3 '>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>

      </div>
      <div className="grid grid-cols-1 text-center">
        <h2 className='text-3xl font-semibold	'>AROUND THE WEB</h2>
        <div className="flex justify-center space-x-2"> 
          <div className='flex items-center justify-center w-10 h-10 border rounded-full p-2'>
            <FaFacebook className=' text-lg' />
          </div>
          <div className='flex items-center justify-center w-10 h-10 border rounded-full p-2'>
            <FaTwitter className=' text-lg' />
          </div>
          <div className='flex items-center justify-center w-10 h-10 border rounded-full p-2'>
            <FaLinkedinIn className=' text-lg' />
          </div>
          <div className='flex items-center justify-center w-10 h-10 border rounded-full p-2'>
            <TfiWorld className=' text-lg' />
          </div>
        </div>


      </div>
      <div className="grid grid-cols-1 text-center">
        <h2 className='text-3xl font-semibold		'>ABOUT FREELANCER</h2>
        <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

      </div>
    </div>
    <div className=' text-center footer-bg2 p-6'>
      <p>Copyright © Your Website 2021</p>
    </div>
  </div>
  )
}
