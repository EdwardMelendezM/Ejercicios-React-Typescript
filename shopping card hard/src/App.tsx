import useProducts, { Product } from "./components/useProducts";

import "./App.css";
const products = [
  {
    id: "1",
    name: "tv",
    price: 400,
    count: 1,
  },
  {
    id: "2",
    name: "notice",
    price: 200,
    count: 1,
  },
  {
    id: "3",
    name: "monitor",
    price: 600,
    count: 1,
  },
  {
    id: "4",
    name: "pc",
    price: 1100,
    count: 1,
  },
];
export default function App() {
  const [productState, dispatch] = useProducts();
  const handleClickAdd = (product: Product) => {
    dispatch({
      type: "add_product",
      payload: {
        newData: product,
      },
    });
  };
  const handleClickRemoveOne = (id: string) => {
    dispatch({
      type: "remove_product",
      payload: {
        id_product: id,
      },
    });
  };

  return (
    <div className="container">
      <h3>Producs</h3>
      <div className="containerProducts">
        {products.map((product) => (
          <div key={product.id} className="containerProducts_product">
            {product.name}
            <button onClick={() => handleClickAdd(product)}>+</button>
          </div>
        ))}
      </div>
      <div className="containerProducts_carrito">
        {productState.products.map((elem) => (
          <div key={elem.id} className="containerProducts_carrito_product">
            <div className="containerProducts_carrito_product_name">
              {elem.name}
            </div>
            <div className="containerProducts_carrito_product_coste">
              ${elem.price}
            </div>
            <div className="containerProducts_carrito_product_coste">
              {elem?.count}
            </div>
            <button onClick={() => handleClickRemoveOne(elem.id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
