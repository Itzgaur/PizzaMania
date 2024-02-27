import { Link } from "react-router-dom";
import Button from "./Button";

export default function Home() {
  return (
    <div className="my-10 mt-32 text-center">
      <h1 className="mb-8 text-4xl font-semibold">
        Welcome to PizzaMania 🍕
        <br />
        <span className="text-red-500">
          Straight out of the oven, straight to you
        </span>
      </h1>
      <Link to="/menu" className="text-xl">
        <Button>Go to Menu</Button>
      </Link>
    </div>
  );
}
