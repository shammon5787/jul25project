import React from 'react'
import img from '../Food/5.avif'
import { IoStar } from "react-icons/io5";
import { GiPriceTag } from 'react-icons/gi';
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, price, image,  desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='mt-5 bg-slate-600 w-full lg:w-[22vw] rounded-lg '>
            <div className='flex items-center flex-col p-3'>
                <img className='w-[200px] h-[100px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='bg-gradient-to-l from-fuchsia-950 to-green-900 rounded-b-lg p-3'>
                <div className='flex items-center justify-between '>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex items-center justify-between my-2'>
                    <span className='flex items-center gap-2'>
                        <IoStar className='text-yellow-400 text-2xl' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, image, price, qty : 1}))} className='bg-gradient-to-b from-blue-300 to-cyan-900 rounded-md hover:bg-gradient-to-b hover:from-fuchsia-100 hover:to-blue-800 transition-all duration-500 font-semibold text-xl hover:text-black px-2'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard