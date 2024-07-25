import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
            <h1 className='font-bold text-4xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='font-bold text-4xl uppercase'>welcome to fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[26vw] rounded-lg border outline-none text-black ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar