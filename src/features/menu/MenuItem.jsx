import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, getCurrentQuantity } from "../cart/CartSlice";
import UpdateQuantity from "../cart/UpdateQuantity";

export default function MenuItem({ pizza }) {
  const { id, name, imageUrl, unitPrice, ingredients } = pizza;

  const dispatch = useDispatch()
  const currentQuantity = useSelector(getCurrentQuantity(id))
  // console.log(`${name}: ${currentQuantity}`)
  
  const isIncart = currentQuantity >0

  function handleAddCart() {
  
    const newItem = {
      id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 10,
      imageUrl
    }
    dispatch(addtoCart(newItem))
  }

  return (
    <>
      <div
        className="mb-3 flex
        grow items-center gap-4 rounded-md bg-red-200 shadow-md " 
      >
        <img
          src={imageUrl}
          alt={name}
          className="h-44 w-44 overflow-hidden rounded-md"
        />

        <div className="mb-5 items-center justify-center">
          <p className="text-xl font-semibold"> {name}</p>

          {ingredients.map((i) => (
            <span key={i} className="text-sm">
              {i}
              {", "}
            </span>
          ))}
          <p className="mb-3">
            Price: <span className="text-lg font-semibold">{unitPrice}0 ₹</span>
          </p>
          <Link >
            {!isIncart ? <Button onclick={handleAddCart}>Add to Cart</Button> :
             <UpdateQuantity currentQuantity={currentQuantity} id={id} />
            }
          </Link>
        </div>
      </div>
    </>
  );
}
