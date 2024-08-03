import React from 'react'
import img from '../Food/4.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-950 p-2 rounded-md flex gap-5 mt-1.5 shadow-md'>
            <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-5 hover:text-red-600 cursor-pointer' />
            <img className='w-[55px] h-[55px] rounded-full ' src={image} alt="" />
            <div className='flex font-semibold'>
                <div className='leading-5 mt-3'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <div className='flex absolute right-5 mt-8 gap-3 items-center'>
                    <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-xl hover:text-yellow-500 cursor-pointer' />
                    <span>{qty}</span>
                    <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='text-xl hover:text-yellow-500 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default CardItem