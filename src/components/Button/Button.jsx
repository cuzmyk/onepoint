import "./style.css";

const Button = ({ text, symbol, onClick }) => {
  return (
    <button className="btn" data-symbol={symbol} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
