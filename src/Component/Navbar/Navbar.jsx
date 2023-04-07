import React from "react"
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";

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
              <Link to="/">Shop</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
            <li>
              <Link to="/orderReview">Order Review</Link>
            </li>
            <li>
              <Link to="/ManageInventory">Manage Inventory</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
