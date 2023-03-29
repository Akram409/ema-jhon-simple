import React from "react"
import logo from '../../images/Logo.svg'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black px-8">
        <div className="flex-1 ">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white hover:text-blue-400">
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/">Order Review</a>
            </li>
            <li>
              <a href="/">Manage Inventory</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
