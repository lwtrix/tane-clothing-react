import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CustomButton from "../custom-button/custom-button.comp";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} />
      <div className="card-body">
        <span className="name">{product.name}</span>
        <span className="price">£{product.price}</span>
      </div>
      <CustomButton onClick={addItemToCartHandler} buttonType="inverted">
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default ProductCard;
