import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { getCurrentQuantity, removeFromCart } from "./CartSlice"
import UpdateQuantity from "./UpdateQuantity"

// const item ={
// "id": 1,
// "name": "Margherita",
// "unitPrice": 12,
// "imageUrl": "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/pizzas/pizza-1.jpg",
// "ingredients": [
// "tomato",
// "mozzarella",
// "basil"
// ],
// "soldOut": false
// }

export default function CartItem({item}) {


    const dispatch = useDispatch()

    const { unitPrice, imageUrl, quantity, name,id,totalPrice } = item
    // console.log(item)

    const currentQuantity = useSelector(getCurrentQuantity(id))


    function handleRemove() {
        dispatch(removeFromCart(id))
    }

    if(!item) return <h1>Your cart is Empty.</h1>

    return <div className="flex rounded-md items-center justify-between gap-x-8 shadow-md w-[30%] bg-red-200" >
        <img src={imageUrl} alt={name} className="w-28 h-[100%] rounded-md" />
        
        <div className="mr-6">
            <p className="">{name} <span>({unitPrice}0 ₹)</span> <span>x {quantity}</span></p>
            <p>Total Price: <span>{totalPrice} ₹</span></p>
        <UpdateQuantity currentQuantity={currentQuantity} id={id}/>
        </div>
         <Button className="mr-4" onclick={handleRemove}>Remove</Button>
    </div>
}