import React from "react";
import { Link } from "react-router-dom";

function NavMenu(props) {
  return (
    <div>
      <div className="font-bold">The menu</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-blue-500 border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/character/1"
            className="text-blue-500 border-b block"
            onClick={props.closeMenu}
          >
            Star wars
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
