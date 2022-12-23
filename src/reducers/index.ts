import { IProduct, ProductAction, ProductState } from "../type";

const initialState: ProductState = {
  filter: "",
  loading: false,
  products: [],
};

function reducer(state = initialState, action: ProductAction) {
  switch (action.type) {
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "STOP_LOADING": {
      return {
        ...state,
        loading: false,
      };
    }
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "DELETE_PRODUCT": {
      const newProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: newProducts,
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
  }
  return state;
}

export default reducer;
