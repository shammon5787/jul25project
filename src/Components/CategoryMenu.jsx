import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/Category.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])

    const listuniquecategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listuniquecategory()
    }, [])
    
    const dispatch = useDispatch()
    
  return (
    <div className='mt-24'>
        <h1 className='lg:text-3xl font-bold uppercase'>order your favorite food</h1>
        <div className='mt-2 flex gap-5'>
            {
                categories.map((category, index)=>{
                    return(
                        <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-950 px-2 text-2xl font-semibold rounded-md hover:bg-green-950 hover:text-blue-700 transition-all duration-500'>{category}</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default CategoryMenu