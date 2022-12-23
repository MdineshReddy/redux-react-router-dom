import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { ProductState } from "../type";
import { fetchData, setFilter } from "../actions";

const Products = () => {
  const products = useSelector((state: ProductState) => state.products);
  const search = useSelector((state: ProductState) => state.filter);
  const loading = useSelector((state: ProductState) => state.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchData());
  }, []);

  const filteredList = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <div>
      <h1>Search Products</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
      <main>
        {filteredList.length > 0 ? (
          filteredList.map((product) => (
            <Product key={product.id} {...product} />
          ))
        ) : (
          <p> No Products to show</p>
        )}
      </main>
    </div>
  );
};

export default Products;
