import { AiOutlineBulb } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./sidenav.css";

export const Sidenav = () => {
  return (
    <div className="sidenav">
      <nav class="navbar">
        <ul className="navbar-nav">
          <li class="nav-item">
            <a href="https://www.google.com/" class="nav-link">
              <AiOutlineBulb className="icon icon-bulb" />
			  <span className="link-text">Notes</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.google.com/" class="nav-link">
              <RiDeleteBin6Line className="icon icon-bin" />
			  <span className="link-text">Trash</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
