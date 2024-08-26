import React from 'react'
import { FaStar } from "react-icons/fa";

export default function Contact() {

  return (
    <div>

      <div className="flex min-h-96 pb-36 pt-32 flex-col justify-center align-middle">
        <h2 className=' mx-auto text-4xl font-bold text-dark uppercase'>contact section</h2>
        <div className='about-lines-p mt-5'>
          <FaStar className='mx-auto text-dark text-lg' />
        </div>

        <form className=" mx-auto w-1/2 my-8">
          <div className="relative z-0 w-full mb-10 group">
            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-3 pl-2 text-zinc-800 px-0 w-full text-sm  bg-transparent border-0 border-b-2  border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label htmlFor="floating_first_name" className="peer-focus:font-medium pl-2 absolute text-md text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input type="number" name="floating_user_age" id="floating_user_age" className="block py-3 pl-2 text-zinc-800 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label htmlFor="floating_user_age" className="peer-focus:font-medium pl-2 absolute text-md text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Age </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input type="email" name="floating_user_email" id="floating_user_email" className="block py-3 pl-2 text-zinc-800 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label htmlFor="floating_user_email" className="peer-focus:font-medium pl-2 absolute text-md text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Email </label>
          </div>
          <div className="relative z-0 w-full mb-10 group">
            <input type="password" name="floating_password" id="floating_password" className="block py-3 pl-2 text-zinc-800 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0  peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium pl-2 absolute text-md text-gray-500 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-500 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Password</label>
          </div>


          <button type="submit" className="font-semibold rounded-lg text-md sm:w-auto px-4 py-2 text-center main-color">Send Message</button>
        </form>

      </div>


    </div>
  )
}