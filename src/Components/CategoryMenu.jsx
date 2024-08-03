import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])

    const dispatch = useDispatch()

    return (
        <div className='mt-24'>
            <h1 className='font-bold text-3xl uppercase'>order your favorite food</h1>
            <div className='flex items-center gap-5 mt-2'>
                <button onClick={() => dispatch(addCategory("All"))} className='bg-blue-600 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-800'>All</button>
                {
                    categories.map((category, index) => (
                        <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-blue-600 px-2 py-0.5 rounded-md font-semibold text-xl hover:bg-green-800'>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu