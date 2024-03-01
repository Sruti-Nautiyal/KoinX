import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bitcoin from '../assets/bitcoin.png'
import chart from '../assets/chart.png'
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";


function Rank() {
    const [rank,setRank]=useState([])
    useEffect(()=>{
        const bitcoinInfo=async()=>{
            try {
                const response=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true');
                setRank(response.data.bitcoin)
                console.log(response.data.bitcoin)
                
            } catch (error) {
                console.error("error handling the responce;",error)
            }
        }
        bitcoinInfo();
    },[])
  return (
    <div className='bg-white h-full rounded-md p-3 mb-2 md:m-3'>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2  '>
                <img src={bitcoin} alt="bitcoin" className='h-12 w-12 object-contain'/>
                <p className='font-semibold'>Bitcoin <span className='font-medium text-[10px] text-gray-400'> BTC</span></p>
            </div>
            <div>
                <button className='bg-gray-400 rounded-md text-white text-[10px] p-1'> Rank #1</button>
            </div>
         </div>
         <div className='flex gap-5 px-4'>
               <h2 className='font-semibold'> ${rank.usd}</h2>
               {
                rank.usd_24h_change>0?
               (<>
               <button className='flex items-center text-green-500 bg-green-100 rounded-md text-xs px-3'> <VscTriangleUp/> {rank && typeof rank.usd_24h_change === 'number' ? rank.usd_24h_change.toFixed(2) : 'N/A'} %</button> <span className='text-xs font-light'>(24H)</span>
               </>):
               (<>
               <button className='flex items-center text-red-500 bg-red-100 rounded-md text-xs px-3'> <VscTriangleDown/> {rank && typeof rank.usd_24h_change === 'number' ? rank.usd_24h_change.toFixed(2) : 'N/A'} %</button> <span className='text-xs font-light'>(24H)</span>

               </>)
               }
        </div>
        <div className='text-xs px-4'> ₹{rank.inr}</div>
        {/* <Chart/> */}
        <div className='w-full'>
            <img src={chart} alt="chart" className=' w-full md:h-[550px] object-contain ' />
        </div>
    </div>
  )
}

export default Rank