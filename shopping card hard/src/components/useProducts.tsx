import { useReducer } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  count: number;
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
      const item = state.products.find(
        (product) => product.id === action.payload.newData.id
      );
      if (item) {
        item.count += 1;
        return { ...state };
      } else {
        return {
          ...state,
          products: [...state.products, action.payload.newData],
        };
      }

    case "remove_product":
      const itemRemove = state.products.find(
        (i) => i.id === action.payload.id_product
      );
      if (itemRemove && itemRemove.count > 1) {
        itemRemove.count -= 1;
        return { ...state };
      } else {
        const temp = state.products.filter(
          (i) => i.id !== action.payload.id_product
        );
        return { ...state, products: [...temp] };
      }
    case "clear":
      return { ...state, products: [] };
    default:
      return state;
  }
}

export default function useProducts() {
  return useReducer(productsReducer, INITIAL_STATE);
}
