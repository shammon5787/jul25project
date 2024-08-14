import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItems from '../Components/FoodItems'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItems />
    </div>
  )
}

export default Home