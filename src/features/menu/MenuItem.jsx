import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cart/CartSlice";

export default function MenuItem({ pizza }) {
  const { id, name, imageUrl, unitPrice, ingredients } = pizza;

  const dispatch = useDispatch()

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
        grow items-center gap-4 rounded-md bg-slate-200 shadow-md bg-red-200" 
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
            {" "}
            <Button onclick ={handleAddCart}>Add to Cart</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
