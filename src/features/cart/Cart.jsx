import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getTotalCost } from "./CartSlice";
// import { getTotalCost } from "./CartSlice";

export default function Cart() {
    
    
    const pizzas = useSelector(store => store.cart.cart)
    const cost = useSelector(getTotalCost);
    if (!pizzas.length) return <h1 className="text-3xl text-center font-semibold">Your cart is Empty!</h1>
    
    // console.log(totalCost)

    return <div className="flex items-center justify-center flex-col gap-3">    
        

        {pizzas.map((item) => <CartItem item={item} key={item.id} />)} 
        <h1 className="font-semibold text-2xl">Total cost: <span>{ cost} ₹</span></h1>
    </div>
}