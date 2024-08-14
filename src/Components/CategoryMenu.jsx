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

    const dispatch = useDispatch()

    return (
        <div className='mt-20'>
            <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
            <div className='mt-3 flex items-center gap-5'>
                <button onClick={() => dispatch(addCategory("All"))} className='bg-gradient-to-l py-0.5 from-slate-600 to-blue-800 px-2 rounded-md hover:bg-gradient-to-t hover:from-gray-50 hover:text-black font-semibold transition-all duration-500'>All</button>
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-gradient-to-l py-0.5 from-slate-600 to-blue-800 px-2 rounded-md hover:bg-gradient-to-t hover:from-gray-50 hover:text-black font-semibold transition-all duration-500'>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu