export function Product({ product }) {
  return (
    <article
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.5rem",
        }}
      >
        Add to cart
      </button>
    </article>
  );
}
