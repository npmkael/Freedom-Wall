import React from 'react'
import logo from '../assets/images/Paper-notes.svg'
import { FaNoteSticky } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='hidden lg:flex bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <FaNoteSticky color='#3b82f6' size={40}/>
        <a className='hidden lg:block h-[30px] overflow-hidden font-medium' href="#" rel='nofollow'>
          <span className='flex items-center h-[30px] text-blue-600'>Home</span>
        </a>
        <a className='hidden lg:block h-[30px] overflow-hidden font-medium' href="#" rel='nofollow'>
          <span className='flex items-center h-[30px] text-blue-600'>About</span>
        </a>
        <a className='hidden lg:block h-[30px] overflow-hidden font-medium' href="#" rel='nofollow'>
          <span className='flex items-center h-[30px] text-blue-600'>Contact</span>
        </a>
      </div>
      <div className='flex items-center gap-4'>
        <button className='hidden lg:block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap'>Log in</button>
        <button className='hidden lg:block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-md whitespace-nowrap'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar;
