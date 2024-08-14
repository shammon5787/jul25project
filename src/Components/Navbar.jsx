import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div>
            <h1 className='font-bold text-4xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='font-bold text-4xl uppercase'>welcome to new fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='w-full lg:w-[25vw] p-2 rounded-md outline-none text-black' type="search" name='search' id = 'id' placeholder='search here' />
    </div>
  )
}

export default Navbar