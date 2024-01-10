import React from 'react'
import Laptop from "../images/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-5 px-4'>
        <div className='items-center grid md:grid-cols-2'>
            <img src={Laptop} className='max-w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center '>
                <p className='text-green-600 font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold text-2xl md:text-3xl'>Manage Data Analytics Centrally</h1>
                <p className='py-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className=' mx-auto bg-black text-green-600 px-10 rounded py-2 mt-4 text-lg font-bold'>Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics