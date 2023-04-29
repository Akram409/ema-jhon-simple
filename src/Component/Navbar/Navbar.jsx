import React, { useContext } from "react"
import logo from '../../images/Logo.svg'
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(result =>{})
    .catch(error =>{
      console.log(error)
    })
  }
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
              <Link>Order Review</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
            {
              user && <span>Welcome {user.email} <button className="text-orange-400" onClick={handleLogOut}>LogOut</button></span> 
            }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
