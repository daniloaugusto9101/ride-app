// src/components/Menu.js
import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="border-b-2 border-gray-00">
      <div className="flex items-center justify-between max-w-7xl  mx-auto px-2 py-4">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Ride</Link>
          </li>
          <li>
            <Link to="/trips">My trips</Link>
          </li>
        </ul>
        <p>lorem</p>
      </div>
    </nav>
  );
};

export default Menu;
