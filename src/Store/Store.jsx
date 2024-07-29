import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './Category.jsx'
import SearchReducer from './SearchSlice.jsx'
import CardReducer from './CardSlice.jsx'

const Store = configureStore({
    reducer:{
        category : CategoryReducer ,
        search: SearchReducer ,
        cart: CardReducer ,
    }
})

export default Store