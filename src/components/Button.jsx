import "../styles/button.css";

const Button = ({ type, label }) => {
  return (
    <button className="main-btn" type={type}>
      {label}
    </button>
  );
};

export default Button;
