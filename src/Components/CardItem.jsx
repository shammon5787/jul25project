
import React from 'react'
import img from '../Food/3.avif'
import { TbMinus, TbPlus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const CardItem = () => {
  return (
    <div className='p-2 bg-slate-900 rounded-lg flex gap-5'>
        <MdDelete className='absolute right-8 mb-3 text-xl cursor-pointer hover:text-red-600 ' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {img} alt="" />
        <div className='flex font-semibold'>
            <div>
                <h1>Pizza</h1>
                <h1>$: 56</h1>
            </div>
            <div className='flex absolute right-6 mt-8 gap-3 items-center'>
                <TbMinus className='cursor-pointer text-2xl hover:text-green-700' />
                <span>1</span>
                <TbPlus className='cursor-pointer text-2xl hover:text-green-700' />
            </div>
        </div>
    </div>
  )
}

export default CardItem