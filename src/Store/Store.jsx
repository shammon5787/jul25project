import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice'
import SearchReducer from './SearchSlice'
import CardReducer from './CardSlice'

const Store = configureStore({
    reducer:{
        category : CategoryReducer ,
        search : SearchReducer ,
        cart: CardReducer ,
    }
})
export default Store