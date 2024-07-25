import React, { useEffect, useState } from 'react'

const FoodCard = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setproducts(data)
        }
        fetchProduct()
    }, [])

    return (
        <div>
            {
                products.map((prod) => (
                    <div key={prod.id}>
                        <div>
                            <img src={prod.image} alt="" />
                        </div>
                        <p>{prod.description.slice(0, 100)}...</p>
                        <div>
                            <div>
                                <h1> {prod.title.slice(0, 15)} </h1>
                                <h1>$: {prod.price} </h1>

                            </div>
                            <div>
                            <button  className='bg-gradient-to-l from-blue-700 px-2 rounded-md w-auto my-3'>Add To Card</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FoodCard