import React from 'react'
import img from '../Food/3.avif'
import { IoMdStar } from "react-icons/io";

const FoodCard = ({id, name, image, price, desc,  rating}) => {
    return (
        <div className='mt-5 bg-green-700 w-full lg:w-[23vw] rounded-lg hover:scale-110 transition-all duration-500 '>
            <div className='p-4 flex items-center flex-col'>
                <img className='w-[210px] h-[100px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='p-4 font-semibold bg-slate-600 rounded-b-lg'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <hr />
                <p>{desc}!</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <IoMdStar className='text-3xl text-yellow-400' />
                        <h1>{rating}</h1>
                    </span>
                    <button className='bg-gradient-to-l py-0.5 from-slate-950 to-blue-800 px-2 rounded-md hover:bg-gradient-to-t hover:from-gray-50 hover:text-black font-semibold transition-all duration-500'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard