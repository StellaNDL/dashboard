import React from 'react'
import { FaThLarge } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { FaWallet } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => (
    <div bg-white className="fixed h-screen"> 
 <div className="bg-gray-200 w-64 h-screen shadow">
    <h1 className="text-xl font-bold p-4 flex justify-center">CryptX</h1>
    <br />
    <div  className="text-gray-600 p-4 flex">
    <ul>
      <li className="text-blue-500 flex gap-3 m-2 p-2"><div><FaThLarge /></div> Overview •</li>
      <li className="flex gap-3 m-2 p-2"><div><FaChartLine /></div> Chart</li>
      <li className="flex gap-3 m-2 p-2"><div><GrTransaction /></div> Transactions</li>
      <li className="flex gap-3 m-2 p-2"><div><FaWallet /></div> Wallet</li>
      <li className="flex gap-3 m-2 p-2"><div><IoMdMail /></div> Mailbox</li>
      <li className="flex gap-3 m-2 p-2"><div><IoMdSettings /></div> Settings</li>
      <li className="flex gap-3 m-2 p-2"><div><IoLogOut /></div> Logout</li>
    </ul>
    </div>
  </div>
  </div>
);

export default Sidebar;
