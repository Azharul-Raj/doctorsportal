import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {/* <Link to="/">About</Link> */}
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        {/* <Link to="/">Reviews</Link> */}
      </li>
      <li>
        {/* <Link to="/">Contact Us</Link> */}
      </li>
      {user?.uid ?
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
        <Link to='/login'><button onClick={logOut} className="btn bg-gray-700">Log Out</button></Link>
      </li>
        </>
      : <li>
        <Link to='/login'><button className="btn bg-gray-700">Log In</button></Link>
      </li>}
    </>
  );
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
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
            className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link className="btn btn-ghost text-black normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-center hidden text-black lg:flex">
        <ul className="menu menu-horizontal p-0">{nav}</ul>
      </div>
      {/* dashboard sidebar toggle */}
      <div className="dropdown">
          <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
    </div>
  );
};

export default Header;
