import React from 'react'
import { SiLoopback } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiPieChart2Line } from "react-icons/ri";
import { LuWallet } from "react-icons/lu";
import { TfiWallet } from "react-icons/tfi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? " hidden " : " block "}w-64 bg-stone-100 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className=' flex text-2xl text-black font-bold'><SiLoopback className='w-8 h-8 text-blue-600'/>CryptX</h1>
      </div>
      <hr />
      <ul className='mt-3 text-gray-400 font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3 text-blue-500'>
            <LuLayoutDashboard className='inline-block w-6 h-6 mr-2 -mt-2'></LuLayoutDashboard>
          Overview  •
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <RiPieChart2Line className='inline-block w-6 h-6 mr-2 -mt-2'></RiPieChart2Line>
          Chart
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <LuWallet className='inline-block w-6 h-6 mr-2 -mt-2'></LuWallet>
          Transactions
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <TfiWallet className='inline-block w-6 h-6 mr-2 -mt-2'></TfiWallet>
          Wallet
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <MdOutlineMailOutline className='inline-block w-6 h-6 mr-2 -mt-2'></MdOutlineMailOutline>
          Mailbox
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <IoSettingsOutline className='inline-block w-6 h-6 mr-2 -mt-2'></IoSettingsOutline>
          Settings
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-gray-300 py-2'>
          <a href="" className='px-3'>
            <TbLogout2 className='inline-block w-6 h-6 mr-2 -mt-2'></TbLogout2>
          Logout
          </a>
        </li>
      </ul>
      </div>
  )
}

export default Sidebar