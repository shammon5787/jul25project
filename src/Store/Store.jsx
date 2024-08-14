import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice'
import SearchReducer from './SearchSlice'

const Store = configureStore({
    reducer:{
        category: CategoryReducer ,
        search: SearchReducer ,
    }
})
export default Store