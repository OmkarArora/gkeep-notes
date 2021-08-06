import { Link } from "react-router-dom";
import LogoImage from "../../post-it.png";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header-title">
          <img src={LogoImage} alt="logo" />G Keep
        </div>
      </Link>
    </header>
  );
};
