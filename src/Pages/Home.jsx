import React from 'react'
import Navbar from '../Comonents/Navbar'
import CategoryMenu from '../Comonents/CategoryMenu'
import FoodItem from '../Comonents/FoodItem'
import Card from '../Comonents/Card'

const Home = () => {
  return (
    <div className='m-6'>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Card />
    </div>
  )
}

export default Home