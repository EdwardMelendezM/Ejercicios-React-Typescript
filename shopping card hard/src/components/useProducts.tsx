import { useReducer } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
}

type ProductsAction =
  | {
      type: "add_product";
      payload: {
        newData: Product;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE: ProductsState = {
  products: [],
};

function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case "add_product":
      return {
        ...state,
        products: [...state.products, action.payload.newData],
      };
    case "clear":
      return { ...state, products: [] };
    default:
      return state;
  }
}

export default function useProducts() {
  return useReducer(productsReducer, INITIAL_STATE);
}
