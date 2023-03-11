import useProducts from "./components/useProducts";

const products = [
  {
    id: "1",
    name: "tv",
    price: 400,
  },
  {
    id: "2",
    name: "notice",
    price: 200,
  },
  {
    id: "3",
    name: "monitor",
    price: 600,
  },
  {
    id: "4",
    name: "pc",
    price: 1100,
  },
];
export default function App() {
  const [productState, dispatch] = useProducts();
  console.log(productState.products);

  return (
    <div className="container">
      <h3>Producs</h3>
      <div>
        {products.map((product) => (
          <div>{product.name}</div>
        ))}
      </div>
    </div>
  );
}
