import './shop.styles.scss'
import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.comp";
import { ProductsContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext)

  return (
    <div className="shop-container">
      {products.map(product => 
        <ProductCard key={product.id} product={product}/>
      )}
    </div>
  );
};

export default Shop;
