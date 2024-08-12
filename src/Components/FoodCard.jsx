import React from 'react'
import img from '../Food/3.avif'
import { FaStar } from "react-icons/fa";

const FoodCard = ({id, name, image, price, desc, rating}) => {
  return (
    <div className='mt-3 bg-slate-800 w-full lg:w-[23vw] rounded-lg '>
        <div className='flex flex-col items-center p-3'>
            <img className='w-[300px] lg:w-[200px] h-[100px] rounded-lg cursor-pointer hover:scale-110 transition-all duration-500 ' src= {image} alt="" />
        </div>
        <div className='p-3 font-semibold bg-gradient-to-t from-neutral-600 to-zinc-950 rounded-b-lg'>
            <div className='flex items-center justify-between'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <p className='font-thin'>{desc}.</p>
            <div className='flex items-center justify-between'>
                <span className='flex items-center gap-3'>
                    <FaStar className='text-2xl text-yellow-400' />
                    <h1>{rating}</h1>
                </span>
                <button className='bg-gradient-to-t from-zinc-950 to-gray-500 px-2 py-0.5 rounded-md font-semibold hover:bg-gradient-to-t hover:from-red-950 hover:to-white hover:text-black transition-all duration-500'>Add To Card</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard