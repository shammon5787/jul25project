import React from 'react'
import img from '../Food/4.avif'
import { IoIosStar } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addCard } from '../Store/CardSlice';

const FoodCard = ({id, name, price, image, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='mt-5 bg-gradient-to-t from-cyan-950 to-slate-700 w-full lg:w-[22vw] rounded-lg '>
            <div className='p-3 flex items-center flex-col'>
                <img className='lg:w-[200px] w-[50vw] h-[120px] cursor-grab rounded-lg ' src={image} alt="" />
            </div>
            <div className='p-3 bg-gradient-to-b from-green-950'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>$: {price}</h1>
                </div>
                <p>{desc}</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center'>
                        <IoIosStar className='text-yellow-400 text-2xl' />
                        <h1 className='font-semibold'>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='bg-slate-950 px-2 font-semibold rounded-md hover:bg-green-500 hover:text-black transition-all duration-500 py-1.5'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard