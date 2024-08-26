import React from 'react'
import mainImg from "../../Imgs/avataaars.svg";
import { FaStar } from "react-icons/fa";


export default function Main() {
  return (
    <div className=' flex flex-col justify-center pb-16 pt-28 main-color align-middle'>
      <img src={mainImg} alt="avatar main img" className=' w-1/5 mx-auto' />
      <h2 className=' mx-auto text-4xl font-bold uppercase mb-2 mt-10'>start Framework</h2>
      <div className='about-lines'>
      <FaStar className='mx-auto text-lg'/>
      </div>
      <p className=' mx-auto mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
