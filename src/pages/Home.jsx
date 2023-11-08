import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import ProductFilter from "../components/ProductFilter";

const Home = () => {
  const { products, filter, setFilter, loading } = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const filterProduct = (cat) => {
    const updatedList = products.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <div className="py-10 mb-[50px]">
            <ul className="flex justify-center lg:gap-x-10 flex-col items-center lg:flex-row gap-y-5">
              <li
                className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]"
                onClick={() => setFilter(products)}
              >
                All
              </li>
              <li
                className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </li>
              <li
                className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's clothing
              </li>
              <li
                className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]"
                onClick={() => filterProduct("women's clothing")}
              >
                Woman's clothing
              </li>
              <li
                className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </li>
            </ul>
          </div>
          {products.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filter.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
