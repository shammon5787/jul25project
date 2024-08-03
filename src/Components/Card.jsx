import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';


const Card = () => {
    const [activCard, setactivCard] = useState(true)
    const selectitem = useSelector((state)=>state.cart.cart)
    const totalitem = selectitem.reduce((totalitem, items)=>totalitem + items.qty , 0)
    const totalprice = selectitem.reduce((totalprice, items)=>totalprice + items.qty * items.price, 0)
    return (
        <>
            <div className={`bg-slate-700 fixed top-0 right-0 w-full h-full lg:w-[29vw] p-3 ${activCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='flex items-center justify-between font-semibold text-3xl'>
                    <h1>Your Orders</h1>
                    <MdOutlineClose onClick={() => setactivCard(false)} className='cursor-pointer hover:text-yellow-700 animate-spin hover:animate-none' />
                </div>

                {
                    selectitem.map((food)=>(
                        <CardItem key={food.id} id = {food.id} name ={food.name} price = {food.price} image = {food.image} qty = {food.qty} />
                    ))
                }

                <div className='font-semibold absolute bottom-3'>
                    <h1>Total Items: {totalitem} </h1>
                    <h1>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-600 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-800 mt-2 w-[90vw] lg:w-[27vw] '>Check Out</button>
                </div>
            </div>
            <BiSolidCart onClick={()=>setactivCard(true)} className={`text-6xl cursor-pointer fixed bottom-5 right-5 ${selectitem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card