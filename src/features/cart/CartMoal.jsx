import { forwardRef } from "react";
import CartItem from "./CartItem";

const CartModal = forwardRef( function Modal ({msg},ref) {
    
    return <dialog ref={ref}  className="w-[600px] bg-red-400 shadow-md rounded-md" >
        {msg}
        <h1>This is you cart and it looks awsome</h1>

        {/* <CartItem/> */}
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
}
)
export default CartModal;