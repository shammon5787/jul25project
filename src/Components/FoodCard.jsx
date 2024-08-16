import React from 'react'
import img from '../Food/2.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = ({id, name, image, price, rating, desc}) => {
    return (
        <div className='w-full bg-gradient-to-tr from-zinc-900 to-slate-600 rounded-lg lg:w-[23vw] mt-3 '>
            <div className='p-4 flex items-center flex-col'>
                <img className='w-[210px] h-[100px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-3 bg-gray-600 rounded-b-lg font-semibold'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='leading-5'>{desc}.</p>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <MdOutlineStar />
                        <span>{rating}</span>
                    </div>
                    <button className='bg-blue-950 px-2 rounded-md hover:bg-gray-700 mt-2 font-semibold text-xl'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard