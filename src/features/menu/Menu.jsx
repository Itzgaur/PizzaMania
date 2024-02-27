import {
  useLoaderData,
} from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiResturant";

export default function Menu() {
  const pizzas = useLoaderData();

  return (
    <div className=" flex  items-center justify-center ">
      <div className="grid grid-cols-2 gap-x-5">
        {/* <h1>This is the Menu Page</h1> */}

        {pizzas.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}
