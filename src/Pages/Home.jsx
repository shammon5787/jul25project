import React from 'react'
import Navbar from '../assets/Components/Navbar'
import CategoryMenu from '../assets/Components/CategoryMenu'
import FoodItem from '../assets/Components/FoodItem'

const Home = () => {
  return (
    <div className='m-6'>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
    </div>
  )
}

export default Home