import "./checkout-item.styles.scss";
import { BsTrash3 } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ item }) => {
  const { addItemToCart, decreaseItemFromCart, removeItemFromCart } =
    useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(item);
  };

  const decreaseItemFromCartHandler = () => {
    decreaseItemFromCart(item);
  };

  const removeItemFromCartHandler = () => {
    removeItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="row-cell">
        <img src={item.imageUrl} className="img" />
      </div>
      <span className="row-cell">{item.name}</span>
      <div className="row-cell">
        <span className="control">
          <IoIosArrowBack onClick={addItemToCartHandler} />
        </span>
        <span className="quantity">{item.count}</span>
        <span className={`control ${item.count === 1 ? 'disabled' : ''}`}>
          <IoIosArrowForward onClick={() => (
               item.count === 1 ? null : decreaseItemFromCartHandler()
          )} />
        </span>
      </div>
      <span className="row-cell">£{item.price * item.count}</span>
      <span className="row-cell">
        <BsTrash3 className="trash-icon" onClick={removeItemFromCartHandler} />
      </span>
    </div>
  );
};

export default CheckoutItem;
