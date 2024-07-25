import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const ListUniqueCategory = () => {
        const uniquecategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniquecategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])
    const dispatch = useDispatch()

    return (
        <div className='mt-20'>
            <h1 className='font-bold text-2xl uppercase'>Order Your Favorite Food</h1>
            <div className='mt-2 flex gap-5 overflow-x-scroll lg:overflow-hidden'>
                <button onClick={() => dispatch(addCategory("All"))} className='bg-gradient-to-b from-blue-300 to-cyan-900 rounded-md hover:bg-gradient-to-b hover:from-fuchsia-100 hover:to-blue-800 transition-all duration-500 font-semibold text-xl hover:text-black px-2 py-1'>All</button>
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-gradient-to-b from-blue-300 to-cyan-900 rounded-md hover:bg-gradient-to-b hover:from-fuchsia-100 hover:to-blue-800 transition-all duration-500 font-semibold text-xl hover:text-black px-2 py-1'>{category}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryMenu