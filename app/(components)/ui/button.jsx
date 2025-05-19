export function Button({
  children,
  onClick,
  type = "button",
  style = {},
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
