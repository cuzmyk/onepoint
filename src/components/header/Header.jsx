import "./style.css";
import home from "../../images/home.png";

const Header = ({ setScrollTo }) => {
  return (
    <div className="header">
      <button
        onClick={() => {
          setScrollTo(0);
        }}
      >
        <img src={home} alt="home" />
      </button>
      <div className="header_separator"></div>
      <p className="header_title">PROJECT</p>
    </div>
  );
};

export default Header;
