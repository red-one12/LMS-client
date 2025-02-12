import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  // console.log(user);
  const navigateToHome = useNavigate();

  const handleLogout = () => {
    logOutUser()
    .then(() => {
      // console.log('success log out');
      navigateToHome('/');
      Swal.fire({
                                      title: "Logout Done!",
                                      icon: "success",
                                      draggable: true
                                    });
    })
    .catch(error => {
      console.log('error',error.message);
    })
  }
  

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? "/allBooks" : "/register"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "transition duration-300"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? "/addBooks" : "/register"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "transition duration-300"
          }
        >
          Add Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? "/borrowedBooks" : "/register"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "transition duration-300"
          }
        >
          Borrowed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={user ? "/helpDesk" : "/register"}
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold border-b-2 border-white pb-1"
              : "transition duration-300"
          }
        >
          Help Desk
        </NavLink>
      </li>
    </>
  );
  

  return (
    <div className="navbar bg-gray-800 text-white sticky top-0 z-50 shadow-md">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-2xl font-bold">LMS</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-2">
        {user ? (
          <>
            <img src={user.photoURL} className="w-8 h-8 rounded-full" 
            data-tooltip-id="user-tooltip"
            data-tooltip-content={user.displayName || "User"}
            alt="" />
            <Tooltip id="user-tooltip" place="left" />
            <button onClick={handleLogout} className="btn bg-red-500 border-none hover:bg-red-600">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn bg-[#007BFF] border-none">Log In</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
