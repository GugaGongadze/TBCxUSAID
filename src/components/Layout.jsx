export function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
