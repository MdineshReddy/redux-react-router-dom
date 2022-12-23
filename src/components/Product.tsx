import React from "react";
import { IProduct } from "../type";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions";
import { Link } from "react-router-dom";

const StyledProduct = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 200px;
    height: 100px;
  }

  p {
    padding: 0.5rem 1rem;
    color: white;
    border: 2px solid rebeccapurple;
    background: rebeccapurple;

    &: hover {
      background: transparent;
      color: rebeccapurple;
    }
  }
`;

const Product: React.FC<IProduct> = ({
  category,
  id,
  image,
  name,
  price,
  shipping,
}) => {
  const dispatch = useDispatch();
  return (
    <StyledProduct onDoubleClick={() => dispatch(deleteProduct(id))}>
      <img src={image} alt={name} />
      Li
      <h2>{name}</h2>
      <p>{category}</p>
      <Link to={`/products/${id}`}>Visit</Link>
    </StyledProduct>
  );
};

export default Product;
