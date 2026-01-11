import { createBrowserRouter } from "react-router";
import Login from "../auth/login/Login.jsx";
import Register from "../auth/register/Register.jsx";
import Product from "../components/Product.jsx";
import Cart from "../components/Cart.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/cart",
    element: <Cart />,

},

]);

export default router;
