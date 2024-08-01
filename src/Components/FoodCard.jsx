import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";

const FoodCard = ({id, name, price, image, rating,  desc}) => {
    return (
        <div className='bg-gray-700 w-full lg:w-[22vw] rounded-lg mt-3 '>
            <div className='p-3 flex flex-col items-center'>
                <img className=' w-[200px] h-[100px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex justify-between'>
                    <span className='flex items-center gap-1.5'>
                        <MdOutlineStar className='text-yellow-500 text-3xl' />
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-gradient-to-l from-fuchsia-700 to-fuchsia-900 px-2 py-1 rounded-md hover:bg-gradient-to-l hover:from-black hover:to-slate-600 hover:text-yellow-700 font-semibold transition-all duration-500 mt-2'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard