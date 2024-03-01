import React from 'react'
import image from '../assets/img.png'
import { FaArrowRightLong } from "react-icons/fa6";

function Price() {
  return (
    <div className='flex flex-col items-center justify-center m-1 p-2 h-[450px] w-[370px] bg-blue-600 text-white rounded-lg'>
      <h2 className='font-semibold text-xl p-8 text-center'>Get Started with KoinX for FREE</h2>
      <p className='text-xs text-center px-8'>with our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
      <img src={image} alt="" className='h-40 w-40 object-contain'/>
      <button className='bg-white text-black font-semibold py-2 px-8 flex items-center gap-2 rounded-md'> Get Started for FREE <FaArrowRightLong/> </button>
    </div>
  )
}

export default Price