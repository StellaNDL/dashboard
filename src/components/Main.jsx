import React from 'react'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import BTCPrices from '../../src/assets/BTCPrices.jpg'
import Cards from '../../src/assets/Cards.jpg'
import { FaLitecoinSign } from 'react-icons/fa6';
import { SiCardano } from "react-icons/si";

const Main = ({ sidebarToggle }) => {
  return (
   <div
  className={`w-full p-4 transition-all duration-300 ${sidebarToggle ? "ml-0" : "ml-64"}`}
>
  <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
     <div className='bg-white p-4 shadow-lg rounded-lg'>
      <img src={Cards} alt="Picture of cards." />
    </div>
    <div className='bg-white p-4 shadow-lg rounded-lg'>
      <img src={BTCPrices} alt="Picture of BTC Prices." />
    </div>
  </div>
  <div  className='bg-white p-4 shadow-lg rounded-lg flex justify-around'>
    <h2>
        Live Markets
        <hr />
        <ul className='p-2 m-4 gap-y-5'>
            <li>
                <FaBitcoin  className='inline-block'/> Bitcoin Change Price
                <p className='text-sm text-gray-400'>ETH/USDT</p>
            </li>
            <li>
                <FaEthereum className='inline-block'/> Ethereum Change Price
                <p className='text-sm text-gray-400'>ETH/USDT</p>
            </li>
            <li>
                <FaLitecoinSign className='inline-block'/> Litecoin Change Price
                <p className='text-sm text-gray-400'>ITC/USDT</p>
            </li>
            <li>
                <SiCardano className='inline-block'/> Cardano Change Price
                <p className='text-sm text-gray-400'>ADA/USDT</p>
            </li>
        </ul>
        </h2>
        <h2>
            Transactions
            <hr />
            <ul className='p-2 m-4 gap-y-5'>
                <li>
                    Etheruem
                    $24,102
                     <p className='text-sm text-gray-400'>Received
                        Today 19:30
                     </p>
                </li>
                <li>
                    Bitcoin
                    $4,157
                    <p className='text-sm text-gray-400'>Buy
                        Today 14:32
                    </p>
                </li>
                <li>
                    Bitcoin 
                    $64,784
                    <p className='text-sm text-gray-400'>Buy
                        Today 13:50
                    </p>
                </li>
                <li>
                    Litecoin
                    $14,266
                    <p className='text-sm text-gray-400'>Buy
                        Today 09:38
                    </p>
                </li>
            </ul>
        </h2>
        
  </div>
  </div>

  );
};

export default Main;

