import { useReducer } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  count?: number;
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
    }
  | {
      type: "remove_product";
      payload: {
        id_product: string;
      };
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
    case "remove_product":
      const temp = state.products.filter(
        (i) => i.id !== action.payload.id_product
      );
      return { ...state, products: [...temp] };
    case "clear":
      return { ...state, products: [] };
    default:
      return state;
  }
}

export default function useProducts() {
  return useReducer(productsReducer, INITIAL_STATE);
}
