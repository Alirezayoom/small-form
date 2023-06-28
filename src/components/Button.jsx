const Button = ({ name, bg, padding = "5px" }) => {
  return (
    <button
      style={{
        backgroundColor: bg,
        padding: padding,
        border: "0",
        cursor: "pointer",
        color: "white",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
