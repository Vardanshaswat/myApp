export function Input({
  type = "text",
  placeholder = "",
  style = {},
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "100%",
        ...style,
      }}
      {...props}
    />
  );
}
