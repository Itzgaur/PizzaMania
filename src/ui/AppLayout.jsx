import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
// import Cart from '../features/cart/Cart'

export default function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
