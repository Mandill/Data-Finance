import React from 'react'
import Single from "../images/single.png"

const Cards = () => {
  return (
    <div className='w-full py-10 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full p-4 shadow-lg rounded-lg flex flex-col items-center hover:scale-105 duration-200'>
                <img className='w-20 mx-auto mt-4 ' src={Single} />
                <h2 className='text-2xl font-bold text-center py-4'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$500</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='mx-auto bg-black text-green-600 px-10 rounded py-2 mt-4 text-lg font-bold'>Start Trial</button>
            </div>

            <div className='w-full p-4 shadow-xl rounded-lg flex flex-col items-center hover:scale-105 duration-200'>
            <img className='w-20 mx-auto mt-4 ' src={Single} />
            <h2 className='text-2xl font-bold text-center py-4'>Double User</h2>
            <p className='text-center text-4xl font-bold'>$1000</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='mx-auto bg-black text-green-600 px-10 rounded py-2 mt-4 text-lg font-bold'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl p-4  rounded-lg flex flex-col items-center hover:scale-105 duration-200'>
            <img className='w-20 mx-auto mt-4 ' src={Single} />
            <h2 className='text-2xl font-bold text-center py-4'>Triple User</h2>
            <p className='text-center text-4xl font-bold'>$1500</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='mx-auto bg-black text-green-600 px-10 rounded py-2 mt-4 text-lg font-bold'>Start Trial</button>
            </div>

        </div>
    </div>
  )
}

export default Cards