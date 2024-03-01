
import logo from '../assets/logo.svg';

import React, { useState } from 'react'

const Header = () => {
    let Links =[
      {name:"Crypto Taxes",link:"/"},
      {name:"Free Tools",link:"/"},
      {name:"Resource Center",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white  md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'>
        
        <img src={logo} alt="" className=' h-20 w-20 object-contain' />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm font-medium md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className=' bg-blue-500 rounded-lg p-2 text-sm md:ml-9 text-white'>Get Started </button>
      </ul>
      </div>
    </div>
  )
}

export default Header;