import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductState } from "../type";

const SingleProduct = () => {
  const params = useParams();
  const Product = useSelector((state: ProductState) => state.products).find(
    (product) => product.id === params.id
  );
  return (
    <div>
      <img src={Product?.image} alt={Product?.name} />
      <p> {Product?.name}</p>
      <p> {Product?.price}</p>
      <p> {Product?.shipping}</p>
      <p> {Product?.category}</p>
    </div>
  );
};

export default SingleProduct;
