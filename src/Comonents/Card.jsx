import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const selectItem = useSelector((state)=>state.cart.cart)
    return (
        <div className='bg-slate-800 fixed top-0 right-0 w-full h-full lg:w-[30vw] p-4 '>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-2xl'>Your Orders</h1>
                <IoCloseSharp className='font-semibold text-2xl cursor-pointer hover:text-yellow-400 transition-all duration-300' />
            </div>

            {
                selectItem.map((food)=>{
                    return(
                        <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} qty = {food.qty} />
                    )
                })
            }

            <div className='absolute bottom-5'>
                <h1 className='font-semibold'>Total Items: </h1>
                <h1 className='font-semibold'>Total Price: </h1>
                <hr />
                <button className='bg-gradient-to-b from-blue-300 to-cyan-900 rounded-md hover:bg-gradient-to-b hover:from-fuchsia-100 hover:to-blue-800 transition-all duration-500 font-semibold text-xl hover:text-black px-2 mt-2 w-[90vw] lg:w-[25vw] '>Check Out</button>
            </div>
        </div>
    )
}

export default Card