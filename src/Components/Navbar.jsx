import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div>
            <h1 className='font-bold text-5xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='font-bold text-4xl uppercase'>welcome to new fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='w-full p-2 lg:w-[25vw] rounded-md outline-none text-black font-semibold ' type="search" name="search" id="" placeholder='search here' />
    </div>
  )
}

export default Navbar