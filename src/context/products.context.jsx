import { createContext, useEffect, useState } from "react";

import {
  getCategoriesAndDocs,
  insertCollectionAndDocs,
} from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products };

  useEffect(() => {
    const fetchCategoriesAndDocs = async () => {
      const categoriesData = await getCategoriesAndDocs();
      setProducts(categoriesData)
    };
    fetchCategoriesAndDocs();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}{" "}
    </ProductsContext.Provider>
  );
};
