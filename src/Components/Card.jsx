import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { BiSolidCart } from "react-icons/bi";
import CardItem from './CardItem';

const Card = () => {
  const [activeCard, setactiveCard] = useState(true)
  return (
    <>
      <div className={`bg-zinc-800 w-full lg:w-[28vw] h-full fixed top-0 right-0 p-4 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
        <div className='flex items-center justify-between font-semibold text-xl'>
          <h1>Your Orders</h1>
          <IoMdClose onClick={() => setactiveCard(false)} className='text-3xl cursor-pointer animate-spin hover:animate-none hover:text-green-600' />
        </div>

        <CardItem />

        <div className='absolute bottom-3 font-semibold'>
          <h1>Total Items: </h1>
          <h1>Totla Price: </h1>
          <hr />
          <button className='bg-gradient-to-t from-zinc-950 to-gray-500 px-2 mt-2 rounded-md font-semibold hover:bg-gradient-to-t hover:from-red-950 hover:to-white hover:text-black transition-all duration-500 w-[90vw] lg:w-[25vw] '>Check Out</button>
        </div>
      </div>
      <BiSolidCart onClick={()=>setactiveCard(true)} className='text-5xl absolute right-5 bottom-5 cursor-pointer bg-yellow-500 rounded-full' />
    </>
  )
}

export default Card