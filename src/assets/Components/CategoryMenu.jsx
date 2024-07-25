import React, { useEffect, useState } from 'react'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    
    useEffect(() => {
        const fetchCategory = async ()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setcategories(data)
        }    
        fetchCategory()  
    }, [])
    
  return (
    <div className='flex gap-5 overflow-x-scroll mt-20 '>
        {
            categories.map((cate)=>{
                return(
                    <button key={cate.id} className='bg-gradient-to-l from-blue-700 px-2 rounded-md w-auto my-3'>{cate.category}</button>
                )
            })
        }
    </div>
  )
}

export default CategoryMenu