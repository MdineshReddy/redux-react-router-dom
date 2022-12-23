import axios from "axios";
import { DispatchType } from "../type";

export const fetchData = () => async (dispatch: DispatchType) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await axios("https://course-api.com/react-store-products");
    dispatch({ type: "SET_PRODUCTS", payload: data });
    dispatch({ type: "STOP_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter: string) => {
  return { type: "SET_FILTER", payload: filter };
};

export const deleteProduct = (id: string) => {
  return { type: "DELETE_PRODUCT", payload: id };
};
 