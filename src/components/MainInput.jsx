import "../styles/maininput.css";

const MainInput = ({ type, placeholder }) => {
  return <input className="main-input" type={type} placeholder={placeholder} />;
};

export default MainInput;
