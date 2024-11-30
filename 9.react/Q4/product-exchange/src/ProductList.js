import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 25 },
    { id: 4, name: "Product 4", price: 25 },
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
