import "./shop-category.styles.scss";

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.comp";
import { ProductsContext } from "../../context/products.context";

const ShopCategory = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);

  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const categoryName = category.toLowerCase();
    if (products[categoryName]) {
      setCategoryProducts(products[categoryName]);
    }
  }, [products]);

  return (
    <div className="shop-category-container">
      {categoryProducts && (
        <>
          <h2 className="category-name">{category}</h2>
          <div className="category-products-container">
            {categoryProducts
              ? categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : null}
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCategory;
