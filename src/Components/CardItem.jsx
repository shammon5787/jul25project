import React from 'react'
import { TbMinus, TbPlus } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='bg-green-700 rounded-md p-2 flex gap-5 mt-1.5 shadow-md'>
        <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-5 cursor-pointer hover:text-red-600' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex'>
            <div>
                <h1 className= 'font-semibold'>{name}</h1>
                <h1 className= 'font-semibold'>$: {price}</h1>
            </div>
            <div className='flex items-center gap-2 absolute right-6 mt-8'>
                <TbMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-xl cursor-pointer hover:text-yellow-400' />
                <spa className= 'font-semibold'>{qty}</spa>
                <TbPlus onClick={()=>dispatch(incrementItem({id}))} className='text-xl cursor-pointer hover:text-yellow-400' />
            </div>
        </div>
    </div>
  )
}

export default CardItem