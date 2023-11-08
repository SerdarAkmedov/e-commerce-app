import React, { useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductFilter({ title }) {
  const { products } = useContext(ProductContext);

  return (
    <>
      <li className="border-2 border-gray-300 py-2 px-4 cursor-pointer w-[200px]">
        {title}
      </li>
    </>
  );
}
