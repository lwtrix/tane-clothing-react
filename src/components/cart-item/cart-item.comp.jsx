import "./cart-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const CartItem = ({ item }) => {
  const { decreaseItemFromCart } = useContext(CartContext);

  const decreaseItemFromCartHandler = () => {
    decreaseItemFromCart(item)
  }

  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cart-item-body">
        <p className="item-name">{item.name}</p>
        <span className="item-count">{item.count}x </span>
        <span className="item-price">£{item.price * item.count}</span>
        <span className="decrease-count-control" onClick={decreaseItemFromCartHandler}>
          <IoIosRemoveCircleOutline className="icon"/>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
