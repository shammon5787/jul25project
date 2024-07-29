import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div>
            <h1 className='lg:text-4xl font-bold'> {new Date().toUTCString()} </h1>
            <h1 className='lg:text-4xl font-bold uppercase'>welcome to the new fas food center G-B</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full rounded-md lg:w-[25vw] outline-none text-black ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar