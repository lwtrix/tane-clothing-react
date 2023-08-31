import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CustomButton from "../custom-button/custom-button.comp";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { items, setItems } = useContext(CartContext);

  const addToCartHandler = () => {
    const itemExists = items.find((item) => item.id === product.id);
    if (!itemExists) {
      setItems([...items, { ...product, count: 1 }]);
      return;
    }

    const filteredItems = items.filter(item => item.id !== product.id)
    setItems([{ ...product, count: itemExists.count + 1 }, ...filteredItems])
};

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} />
      <div className="card-body">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <CustomButton onClick={addToCartHandler} buttonType="inverted">
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default ProductCard;
