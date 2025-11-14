import React from 'react'
import { FaBitcoin } from 'react-icons/fa'

const Main = ({ sidebarToggle }) => {
  return (
   <div
  className={`w-full p-4 transition-all duration-300 ${sidebarToggle ? "ml-0" : "ml-64"}`}
>
  <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    <div className='bg-white p-6 shadow-lg rounded-lg'>
      <h2 className='text-xl font-bold'>
        <FaBitcoin className='bg-amber-600 rounded-full'/>
      </h2>
      <p className='text-lg p-1 text-gray-600'>This is a sample card with............... Place content here</p>
    </div>
    <div className='bg-white p-6 shadow-lg rounded-lg'>
      <p className='text-lg p-1 text-gray-600'>This is a sample card with............... Place content here</p>
    </div>
    <div className='bg-white p-6 shadow-lg rounded-lg'>
      <p className='text-lg p-1 text-gray-600'>This is a sample card with............... Place content here</p>
    </div>
    <div className='bg-white p-6 shadow-lg rounded-lg'>
      <p className='text-lg p-1 text-gray-600'>This is a sample card with............... Place content here</p>
    </div>
  </div>
</div>

  );
};

export default Main;

