import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col text-white mx-auto'>
                    <h1 className='font-bold text-3xl py-2'>Want tips and tricks to optimize your flow?</h1>
                    <p className='text-center md:text-start'>Sign up to our newsletter and stay up to date</p>
                </div>
                <div className='flex flex-col items-center md:items-end mt-5'>
                    <div><input type='text' className='px-4 py-2 rounded-lg outline-none' placeholder='Enter the email'/> <button className='  bg-green-600 text-black px-4 rounded py-2 mx-3 text-lg font-bold'>Get Started </button></div>
                    <p className='text-white text-sm my-3 mr-[40px] '> We care about the protection of your data . Read out <br/><span className='text-green-600 cursor-pointer'>Privacy Policy </span></p>
                </div>
        </div>
    </div>
  )
}

export default Newsletter