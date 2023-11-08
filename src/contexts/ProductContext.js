import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilter(data);
    };
    fetchProducts();
  }, []);
  // console.log(products);
  // console.log(filter);
  return (
    <ProductContext.Provider
      value={{ products, loading, setProducts, filter, setFilter }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
