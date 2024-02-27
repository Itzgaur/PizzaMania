import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart:[{
"id": 1,
"name": "Margherita",
"unitPrice": 12,
"imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
"ingredients": [
"tomato",
"mozzarella",
    "basil"

],
        "soldOut": false,
"quantity":1
}]
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart(state, action) {
            const pizza = state.cart.find((item) => item.id === action.payload.id)
            if (pizza) pizza.quantity++;
            else state.cart.push(action.payload);
        },
        removeFromCart(state,action) {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
        
    }
})

export const { addtoCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer