// src/components/Menu.js
import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="border-b-2 border-gray-00">
      <div className="flex items-center justify-between px-10 py-4">
        <ul className="flex gap-3">
          <li>
            <Link to="/">Ride</Link>
          </li>
          <li>
            <Link to="/trips">My trips</Link>
          </li>
        </ul>
        <FaUser />
      </div>
    </nav>
  );
};

export default Menu;
