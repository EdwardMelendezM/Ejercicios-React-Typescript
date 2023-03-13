import { useReducer } from "react";
import { ProductClothes } from "../type";

interface ProductsState {
  products: ProductClothes[];
}

type ProductsAction =
  | {
      type: "add_product";
      payload: {
        data: ProductClothes;
      };
    }
  | {
      type: "clear";
    }
  | {
      type: "remove_product";
      payload: {
        id: string;
      };
    }
  | {
      type: "remove_all";
    };

const INITIAL_STATE: ProductsState = {
  products: [],
};

function productsReducer(state: ProductsState, action: ProductsAction) {
  switch (action.type) {
    case "add_product":
      const item = state.products.find(
        (product) => product.id === action.payload.data.id
      );
      if (item) {
        if (item.buy) {
          item.buy += 1;
        }
        return { ...state };
      } else {
        const temps = { ...action.payload.data };
        temps.buy = 1;
        return {
          ...state,
          products: [...state.products, temps],
        };
      }
    case "remove_product":
      const itemRemove = state.products.find((i) => i.id === action.payload.id);
      if (itemRemove && itemRemove.buy && itemRemove.buy > 1) {
        console.log("Entro -1");

        if (itemRemove.buy) itemRemove.buy -= 1;
        return { ...state };
      } else {
        console.log("Entro 0");

        const temp = state.products.filter((i) => i.id !== action.payload.id);
        return { ...state, products: [...temp] };
      }

    case "remove_all":
      return { ...state, products: [] };
    default:
      return state;
  }
}

export default function useProducts() {
  return useReducer(productsReducer, INITIAL_STATE);
}
