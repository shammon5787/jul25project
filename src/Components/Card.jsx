import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const [activeCard, setactiveCard] = useState(false)
    const selectItem = useSelector((state)=>state.cart.cart)

    const TotalItems = selectItem.reduce((TotalItems, items)=>TotalItems + items.qty, 0)
    const TotalPrice = selectItem.reduce((TotalPrice, item) =>TotalPrice + item.qty * item.price, 0)
    return (
        <>
            <div className={`fixed top-0 right-0 bg-gradient-to-l from-green-950 to-slate-800 w-full h-full lg:w-[30vw] p-3 z-50 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-semibold'>Your Orders</h1>
                    <IoMdClose onClick={()=>setactiveCard(false)} className='text-3xl font-semibold cursor-pointer hover:text-yellow-400 transition-all duration-500' />
                </div>

                {
                    selectItem.map((food)=>{
                        return(
                            <CardItem key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} qty = {food.qty} />
                        )
                    })
                }

                <div className='absolute bottom-2'>
                    <h1 className='font-semibold'>Total Items: {TotalItems} </h1>
                    <h1 className='font-semibold'>Total Price: {TotalPrice} </h1>
                    <hr />
                    <button className='bg-slate-950 px-2 font-semibold rounded-md hover:bg-green-500 hover:text-black transition-all duration-500 mt-2 py-2 w-[90vw] lg:w-[27vw] '>Add To Card</button>
                </div>
            </div>
            <BiSolidCart onClick={()=>setactiveCard(true)} className={`text-6xl text-green-700 cursor-pointer fixed bottom-7 right-7 bg-white rounded-full ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card