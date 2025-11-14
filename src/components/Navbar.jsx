import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'
import { FaCircleQuestion } from 'react-icons/fa6'

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <nav className='bg-white px-4 py-3 flex justify-between'> 
        <div className='flex items-center text-xl'>
            <FaBars className='text-gray-400 me-4 cursor-pointer' 
            onClick={() => setSidebarToggle(!sidebarToggle)}/>
            <span className='text-black font-semibold'></span>
        </div>
        <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='p-1 focus:outline-none text-gray-400 md:text-gray-400'><FaSearch /></button>
                    </span>
                <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' />
            </div>

            <div className='text-gray-400'><FaBell className='w-4 h-4' /></div>
            <div className='text-gray-400'><FaCircleQuestion className='w-4 h-4' /></div>

            <div>
                <button className='text-gray-400'>
                    <FaUserCircle className='w-5 h-5 mt-1.5' />
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar