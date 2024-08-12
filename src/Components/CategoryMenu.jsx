import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listuniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
        listuniqueCategory()
    }, [])

    const dispatch = useDispatch();

    return (
        <div className='mt-20'>
            <h1 className='font-bold text-2xl uppercase'>order your favorite food</h1>
            <div className='flex items-center gap-4 mt-3'>
            <button onClick={()=>dispatch(addCategory("All"))} className='bg-gradient-to-t from-zinc-950 to-gray-500 px-2 py-0.5 rounded-md font-semibold hover:bg-gradient-to-t hover:from-red-950 hover:to-white hover:text-black transition-all duration-500'>All</button>
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-gradient-to-t from-zinc-950 to-gray-500 px-2 py-0.5 rounded-md font-semibold hover:bg-gradient-to-t hover:from-red-950 hover:to-white hover:text-black transition-all duration-500'>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu