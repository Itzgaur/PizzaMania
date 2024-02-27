import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQty, increaseQty } from "./CartSlice";

export default function UpdateQuantity({currentQuantity,id}) {
    

        const dispatch = useDispatch()
        
    
    function handleIncreaseQty() {
        dispatch(increaseQty(id));
        
    }

    function handleDecreaseQty() {
        dispatch(decreaseQty(id))
    }
    
    return <div className="flex gap-3">
              <Button type="small" onclick={handleDecreaseQty}>-</Button>
              <span>{currentQuantity}</span>
              <Button type="small" onclick={handleIncreaseQty}>+</Button>
    </div>
}
