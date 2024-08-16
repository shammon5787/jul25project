import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listuniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listuniqueCategory()
    }, [])

    const dispatch = useDispatch()
    
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
        <div className='flex items-center gap-5'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-800 px-2 rounded-md hover:bg-gray-700 mt-2 font-semibold py-1 text-xl'>All</button>
            {
                categories.map((category, index)=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-800 px-2 rounded-md hover:bg-gray-700 mt-2 font-semibold py-1 text-xl'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu