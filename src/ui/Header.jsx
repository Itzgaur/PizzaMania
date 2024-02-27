import { Link } from "react-router-dom";
import CartModal from "../features/cart/CartMoal";
import { useRef } from "react";
import Navbar from "./NavBar";

export default function Header() {

  const ref = useRef();

  function handleClick() {
    ref.current.showModal()
  }

  return (
    <>
    <CartModal msg="hi there" ref={ref}/>
    <header className="mb-8 flex items-center justify-between bg-red-400  px-10 py-7 font-semibold text-stone-200">
      <Link to="/" className="text-3xl ">
        🍕 PizzaMania
        </Link>
        
        <Navbar/>
     
        <button className="text-xl mr-40" onClick={handleClick} >🛒 </button>
    
    </header>
    </>
  );
}
