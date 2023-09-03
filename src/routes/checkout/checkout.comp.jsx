import { useContext, useEffect, useState } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.comp";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const [checkoutTotal, setTotalCheckout] = useState(0);

  useEffect(() => {
    setTotalCheckout(
      items.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.count,
        0
      )
    );
  }, [items]);


  return (
    <div className="checkout-container">
      { items.length ? <div className="checkout-grid">
        <div className="checkout-header">
          <span className="column-name">Product</span>
          <span className="column-name">Description</span>
          <span className="column-name">Quantity</span>
          <span className="column-name">Price</span>
          <span className="column-name">Remove</span>
        </div>
        {items.map((item) => (
          <CheckoutItem item={item} key={item.id} />
        ))}
        <div className="checkout-total">
          <span className="text">Total:</span>
          <span className="total">£{checkoutTotal}</span>
        </div>
      </div> : <span>Your cart is currently empty</span>}
    </div>
  );
};

export default Checkout;
