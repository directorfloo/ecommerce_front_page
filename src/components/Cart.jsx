import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty,decreaseQty} from "../store/cartSlice";
import style from "./cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  h2

  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>${item.price}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}  className={style.minus}>-</button>
          <span> {item.quantity} </span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
