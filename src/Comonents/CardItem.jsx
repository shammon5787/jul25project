import React from 'react'
import img from '../Food/4.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CardItem = ({id, name, price, image, qty}) => {
  return (
    <div className='bg-slate-700 p-2 rounded-lg flex gap-5 mt-1.5 shadow-md'>
        <MdDelete className='absolute right-7 mb-12 cursor-pointer hover:text-red-800 transition-all duration-500' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex absolute right-7 items-center gap-3 mt-8'>
                <FiMinus className='font-semibold cursor-pointer text-xl  hover:text-yellow-400' />
                <span>{qty}</span>
                <FiPlus className='font-semibold cursor-pointer text-xl  hover:text-yellow-400' />
            </div>
        </div>
    </div>
  )
}

export default CardItem