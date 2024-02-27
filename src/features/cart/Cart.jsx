import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
    
     const pizzas = useSelector(store => store.cart.cart)
    console.log(pizzas)

    if(!pizzas.length) return <h1 className="text-3xl text-center font-semibold">Your cart is Empty!</h1>

    return <div className="flex items-center justify-center flex-col gap-3">    
        

        {pizzas.map((item) => <CartItem item={item} key={item.id}/>)}    
    </div>
}