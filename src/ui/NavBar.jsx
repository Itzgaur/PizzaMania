import { Link } from "react-router-dom";

export default function Navbar()
{
    return <nav className="flex items-center justify-center gap-x-8">
        <Link to="/menu">Menu</Link>
        <Link to="/cart">Cart</Link>
    </nav>
}