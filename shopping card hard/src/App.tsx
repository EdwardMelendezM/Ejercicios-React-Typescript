import useProducts from "./components/useProducts";
import "./App.css";
import { ProductClothes, ProductResponseFromApi } from "./type";
import { useEffect, useState } from "react";
import axios from "axios";
interface AppState {
  data: Array<ProductClothes>;
}

export default function App() {
  const [data, setData] = useState<AppState["data"]>([]);
  const [productState, dispatch] = useProducts();
  const handleClickAdd = (product: ProductClothes) => {
    dispatch({
      type: "add_product",
      payload: {
        data: product,
      },
    });
  };
  const handleClickRemoveOne = (id: string) => {
    dispatch({
      type: "remove_product",
      payload: {
        id,
      },
    });
  };
  const handleClickRemoveAll = () => {
    dispatch({
      type: "remove_all",
    });
  };
  useEffect(() => {
    const fecthData = (): Promise<ProductResponseFromApi> => {
      return axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data);
    };
    const mapFromApiToProducts = (
      apiResponse: Array<ProductResponseFromApi>
    ): Array<ProductClothes> => {
      return apiResponse.map((productApi) => {
        const { id, title, image, price, rating, description, category } =
          productApi;
        const { count, rate } = rating;
        return {
          id,
          title,
          image,
          price,
          rate,
          count,
          description,
          category,
        };
      });
    };
    fecthData().then((newData) => {
      const dataFetch = mapFromApiToProducts(newData);
      setData(dataFetch);
    });
  }, []);
  return (
    <div className="container">
      <h3>Producs</h3>
      <div className="containerProducts">
        {data?.map((product) => (
          <div key={product.id} className="containerProducts_product">
            <span>
              {product.title.length > 35
                ? product.title.substring(0, 35) + "..."
                : product.title}
            </span>
            <img
              src={product.image}
              alt="product"
              className="containerProducts_product_img"
            />
            <button onClick={() => handleClickAdd(product)}>+</button>
          </div>
        ))}
      </div>
      <div className="containerProducts_carrito">
        {productState.products.map((elem) => (
          <div key={elem.id} className="containerProducts_carrito_product">
            <div className="containerProducts_carrito_product_name">
              {elem.title.substring(0, 10)}
            </div>
            <div className="containerProducts_carrito_product_coste">
              Price:${elem.price}
            </div>
            <div className="containerProducts_carrito_product_coste">
              Count:{elem?.buy}
            </div>
            <button onClick={() => handleClickRemoveOne(elem.id)}>-</button>
          </div>
        ))}
        <button onClick={() => handleClickRemoveAll()}>Clear</button>
      </div>
    </div>
  );
}
