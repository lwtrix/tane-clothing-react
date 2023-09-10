import "./shop.styles.scss";
import React, { useContext } from "react";
import { ProductsContext } from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.comp";
import { Outlet } from "react-router-dom";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <>
    <div className="shop-container">
      {Object.keys(products).map((name) => {
        const productsArr = products[name];
        return (
          <CategoryPreview key={name} products={productsArr} name={name} />
        );
      })}
    </div>
    <Outlet />
    </>
  );
};

export default Shop;
