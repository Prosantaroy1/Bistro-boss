import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../Castom Hook/useCart";


const NavBar = () => {
  ///user and logout
  const { user, logOut } = useContext(AuthContext);
  ///
  const handleLogout = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //cart ar jonno
  const [carts] = useCart();
  

  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/soup">Order</Link>
      </li>
      <li>
        <Link to="/secreate">Secreate</Link>
      </li>
      <li>
        <Link to='/dashboard/mycart'>
          <button className="btn gap-3">
             <AiOutlineShoppingCart/> 
            <div className="badge badge-secondary">+{carts?.length || 0}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {" "}
          <span className="text-xl mt-4 font-bold">{user?.displayName}</span>
          <li>
            <Link to="/">
              <button onClick={handleLogout}>LogOut</button>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-20 max-w-screen-xl mx-auto bg-black bg-opacity-30 text-white bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-bold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-[#2067ff] font-bold pr-3">BISTRO </span>
            Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
