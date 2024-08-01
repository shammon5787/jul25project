import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqueCatgory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
        listUniqueCatgory()
    }, [])

    return (
        <div className='mt-20'>
            <h1 className='uppercase font-bold text-2xl'>order your favorite food</h1>
            <div className='flex items-center gap-6 overflow-x-scroll lg:overflow-x-hidden'>
                {
                    categories.map((category, index) => {
                        return (
                            <button key={index} className='bg-gradient-to-l from-fuchsia-700 to-fuchsia-900 px-2 py-1 rounded-md hover:bg-gradient-to-l hover:from-black hover:to-slate-600 hover:text-yellow-700 font-semibold transition-all duration-500 mt-2'>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu