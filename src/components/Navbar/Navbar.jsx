import {
  RiHome5Fill,
  RiHome5Line,
  RiDeleteBin7Fill,
  RiDeleteBin7Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useNav } from "../../contexts";
import "./navbar.css";

export const Navbar = () => {
  const { activeNavLink } = useNav();

  return (
    <div className="navbar-mobile">
      <Link to="/">
        <div
          className={
            activeNavLink === "home" ? "btn-nav active-tab" : "btn-nav"
          }
        >
          <div className="icon icon-home">
            {activeNavLink === "home" ? <RiHome5Fill /> : <RiHome5Line />}
          </div>
          <div className="heading">Home</div>
        </div>
      </Link>

      <Link to="/trash">
        <div
          className={
            activeNavLink === "trash" ? "btn-nav active-tab" : "btn-nav"
          }
        >
          <div className="icon icon-home">
            {activeNavLink === "trash" ? (
              <RiDeleteBin7Fill />
            ) : (
              <RiDeleteBin7Line />
            )}
          </div>
          <div className="heading">Trash</div>
        </div>
      </Link>
    </div>
  );
};
