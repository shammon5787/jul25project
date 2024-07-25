import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div>
            <h1 className='font-bold text-3xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='font-bold text-3xl uppercase'>welcome to fast food center</h1>
        </div>
        <input className='p-2 w-full lg:w-[25vw] rounded-lg border outline-none text-slate-950 ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar