import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './src/features/cart/CartSlice'

const store = configureStore({
    reducer: {
        cart:cartReducer
    }
})

export default store;