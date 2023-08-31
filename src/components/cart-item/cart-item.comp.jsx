import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { items, setItems } = useContext(CartContext);
  const decreaseCountHandler = () => {
    const targetItem = items.find((i) => i.id === item.id);
    const filteredArr = items.filter((i) => i.id !== item.id);

    if (targetItem.count !== 1) {
      setItems([
        { ...targetItem, count: targetItem.count - 1 },
        ...filteredArr,
      ]);
      return;
    }

    setItems([...filteredArr]);
  };

  return (
    <div className="cart-item-container">
      <img src={item.imageUrl} alt={item.name} />
      <div className="cart-item-body">
        <p className="item-name">{item.name}</p>
        <span className="item-count">{item.count}x </span>
        <span className="item-price">£{item.price * item.count}</span>
        <span className="decrease-count-control" onClick={decreaseCountHandler}>
          <span>x</span>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
