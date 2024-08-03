import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc,rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-600 mt-2 w-full lg:w-[22vw] rounded-lg '>
            <div className='p-3 flex flex-col items-center'>
                <img className='w-[200px] h-[100px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='bg-green-950 rounded-b-lg p-3'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex font-semibold items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <MdOutlineStarPurple500 className='text-2xl text-yellow-500' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, image, price, qty :1}))} className='bg-slate-800 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-800'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard