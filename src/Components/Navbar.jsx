import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div>
            <h2 className='font-bold text-4xl'> {new Date().toUTCString().slice(0, 16)} </h2>
            <h2 className='font-bold text-4xl uppercase'>welcome to new fast food center</h2>
        </div>
        <input className='p-2 w-full lg:w-[25vw] rounded-lg outline-none text-black font-semibold ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar