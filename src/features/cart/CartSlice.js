import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart:[]
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
        },
        increaseQty(state, action) {
            const pizza = state.cart.find((item) => item.id === action.payload)
            pizza.quantity++;
            pizza.totalPrice = pizza.quantity * pizza.unitPrice *10
        },
        decreaseQty(state, action) {
            const pizza = state.cart.find((item) => item.id === action.payload)
            pizza.quantity--;
            if (pizza.quantity === 0) cartSlice.caseReducers.removeFromCart(state,action);
            else pizza.totalPrice = pizza.quantity * pizza.unitPrice * 10;
        }
        
    }
})





export const getCurrentQuantity = (id) => (state) =>  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
export const getTotalCost = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const { addtoCart, removeFromCart,increaseQty ,decreaseQty} = cartSlice.actions
export default cartSlice.reducer
