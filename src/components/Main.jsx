import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { SiBitcoinsv } from "react-icons/si";

const Main = () => (
 <main>
    <header className="bg-white p-4 flex justify-evenly">
        <button className="p-2 lg:hidden"><GiHamburgerMenu /></button>
        <div className=''>
        <input className="border-2 rounded" type="search" placeholder='Search type of keywords' />
        </div>
        <div className="flex pr-10"><CiBellOn /> <CiCircleQuestion /></div>
        <div className="bg-gray-400 w-10 h-10 rounded-full">
           <p className="text-gray-500 gap-x-6">Laurice <br /> @laurice22</p>
      </div>
    </header>
<div>
 <div className="flex">
    <SiBitcoinsv />
 </div>
</div>


 </main>
  
);

export default Main;
