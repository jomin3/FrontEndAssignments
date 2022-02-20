import React from "react";
import Card from "./card";
import "./products.css";
const Products = (props) => {
  const allcards = () => {
    return props.allProducts.map((item) => {
      return <Card product={item} add={props.add} />;
    });
  };
  return <div className="products">{allcards()}</div>;
};

export default Products;
