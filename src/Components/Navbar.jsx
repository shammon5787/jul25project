import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase'>welcome to new fast food G-B</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[25vw] rounded-lg text-black outline-none font-semibold ' type="search" name="search" id="" />
    </div>
  )
}

export default Navbar