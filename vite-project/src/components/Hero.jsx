import React from 'react'
import Typed from "react-typed"

const Hero = () => {
  return (
    <>
        <div className='text-white'>
            <div className=' max-w-[800px] text-center w-full h-screen mt-[-60px] my-auto mx-auto flex flex-col items-center justify-center'>
                <p className='font-bold text-green-700 mb-2'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='font-bold text-5xl md:text-7xl sm:text-6xl md:mb-2'>Grow with data</h1>
                <div className='flex'>
                    <p className='font-bold md:text-2xl sm:text-xl text-xl my-3'>Fast,Flexible,Financing for </p>
                    <Typed
                    className='font-bold md:text-2xl sm:text-xl text-xl my-3  px-3'
                    strings={[
                        'BTC',
                        'USD',
                        'SAAS']}
                        typeSpeed={100}
                        backSpeed={100}
                        loop >
                    </Typed>
                </div>
                <p className='md:text-2xl text-sm font-bold text-gray-500 my-2'>Monitor your data analytics to increase revenue for BTB,BTC,& SASS platforms.</p>
                <button className='text-black mx-auto bg-green-600 px-10 rounded py-2 mt-4 text-lg font-bold'>Get Started </button>
            </div>
        </div>
    </>
  )
}

export default Hero