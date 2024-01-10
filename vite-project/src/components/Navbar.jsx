import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const[nav,setNav] = useState(false)

    const handleClick = () =>
    {
        setNav(!nav)
    }
  return (
    <>
        <div className='max-w-[1240px] h-24 flex flex-row items-center justify-between mx-auto px-4'>
            <h1 className='font-bold text-3xl  text-green-700 cursor-pointer'>REACT.</h1>
            <ul className='hidden md:flex'>
                <li className='px-4 py-2 text-base text-white'><button>Home</button></li>
                <li className='px-4 py-2 text-base  text-white'><button>Company</button></li>
                <li className='px-4 py-2 text-base text-white'><button>Resources</button></li>
                <li className='px-4 py-2 text-base text-white'><button>About</button></li>
                <li className='px-4 py-2 text-base text-bold text-black bg-white rounded-lg'><button>Contact</button></li>
            </ul>
            <div onClick={handleClick} className='block md:hidden cursor-pointer '>
                {!nav? <AiOutlineClose className='text-white text-3xl'/> : <AiOutlineMenu className='text-white text-3xl'/>}
            </div>
            <div className={!nav ? 'fixed top-0 left-0 w-[40%] h-full bg-[#000300] ease-in-out duration-500' : 'fixed top-0 left-[-100%] w-[40%] h-full ease-in-out duration-500'}>
            <h1 className='font-bold text-3xl  text-green-700 cursor-pointer m-4'>REACT.</h1>
                <ul className='p-4 '>
                    <li className='px-4 py-2 text-base border-b border-gray-600 text-white'><button>Home</button></li>
                    <li className='px-4 py-2 text-base border-b border-gray-600 text-white'><button>Company</button></li>
                    <li className='px-4 py-2 text-base border-b border-gray-600 text-white'><button>Resources</button></li>
                    <li className='px-4 py-2 text-base border-b border-gray-600 text-white'><button>About</button></li>
                    <li className='px-4 py-2 text-base  text-bold text-white '><button>Contact</button></li>
                </ul>
            </div>         
        </div>
    </>
  )
}

export default Navbar