function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;