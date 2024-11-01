import { Product } from "./Product";

const productList = [
  {
    id: 1,
    title: "Product 1",
    description: "Description 1",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description 2",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description 3",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Description 4",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Description 5",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 6,
    title: "Product 6",
    description: "Description 6",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 7,
    title: "Product 7",
    description: "Description 7",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 8,
    title: "Product 8",
    description: "Description 8",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 9,
    title: "Product 9",
    description: "Description 9",
    image: "https://dummyjson.com/image/150",
  },
  {
    id: 10,
    title: "Product 10",
    description: "Description 10",
    image: "https://dummyjson.com/image/150",
  },
];

export function Content() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        overflowY: "scroll",
        margin: 5,
      }}
    >
      {productList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}
