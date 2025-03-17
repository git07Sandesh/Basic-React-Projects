import React from 'react'
import { FaBook, FaCog, FaHome, FaInfoCircle, FaPhone, FaSearch, FaThemeco, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='bg-transparent p-2 flex flex-row items-center justify-center max-w-full'>
      {/* {left} */}
       <div className= 'flex items-center justify-center gap-20 p-2 m-2 w-5/6 sm:gap-28 md:gap-40 lg:gap-64'>
            <div className='flex items-center'>
                <FaHome className='text-xl ' />
                <span className='hidden md:inline-flex pl-2'>Home</span>
            </div>
            <div className='flex items-center'>
                <FaBook className='text-xl ' />
                <span className='hidden md:inline-flex pl-2'>Nepal</span>
            </div>
            <div className='flex items-center'>
                <FaPhone className='text-xl ' />
                <span className='hidden md:inline-flex pl-2'>Contact</span>
            </div> 
        </div>
        {/* right */}
        <div className='flex items-center ml-auto'>
                <FaThemeco className='text-xl ' />
                <span className='hidden md:inline-flex pl-2'>Theme</span>
        </div>
  

    </div>
  )
}

export default Header