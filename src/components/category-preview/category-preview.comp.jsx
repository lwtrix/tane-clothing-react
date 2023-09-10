import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.comp";
import "./category-preview.styles.scss";

const CategoryPreview = ({ name, products }) => {
  const navigate = useNavigate();

  return (
    <div className="category-preview-container">
      <h2 className="name-container">
        <span
          className="name"
          onClick={() => {
            navigate(`/shop/${name.toLowerCase()}`);
          }}
        >
          {name.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
