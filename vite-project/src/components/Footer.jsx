 import React from 'react'
//  import {FaDribbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from "react-icons/fa"
 
 const Footer = () => {
   return (
     <div  className='w-full my-10'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div> 
                <h1 className='font-bold text-3xl  text-green-700 cursor-pointer'>REACT.</h1>
                <p className='text-white py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiu Ut enim ad minim veniam, qip ex ea 
                </p>
            </div>
            <div className='text-white flex flex-row justify-between mx-4'>
                <ul>
                    <li className='py-2 px-3'>Solutions</li>
                    <li className='py-2 px-3'>Analytics</li>
                    <li className='py-2 px-3'>Marketing</li>
                    <li className='py-2 px-3'>Commerce</li>
                </ul>
                <ul>
                    <li className='py-2 px-3'>Solutions</li>
                    <li className='py-2 px-3'>Analytics</li>
                    <li className='py-2 px-3'>Marketing</li>
                    <li className='py-2 px-3'>Commerce</li>
                </ul>
                <ul>
                    <li className='py-2 px-3'>Solutions</li>
                    <li className='py-2 px-3'>Analytics</li>
                    <li className='py-2 px-3'>Marketing</li>
                    <li className='py-2 px-3'>Commerce</li>
                </ul>
            </div>
        </div>
     </div>
   )
 }
 
 export default Footer