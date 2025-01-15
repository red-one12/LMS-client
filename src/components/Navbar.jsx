import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOutUser()
    .then(() => {
      console.log('success log out');
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
            isActive ? "text-[#4CAF50]" : "hover:text-[#4CAF50]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allBooks"
          className={({ isActive }) =>
            isActive ? "text-[#4CAF50]" : "hover:text-[#4CAF50]"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addBooks"
          className={({ isActive }) =>
            isActive ? "text-[#4CAF50]" : "hover:text-[#4CAF50]"
          }
        >
          Add Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/borrowedBooks"
          className={({ isActive }) =>
            isActive ? "text-[#4CAF50]" : "hover:text-[#4CAF50]"
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
        <a className="btn btn-ghost text-2xl font-bold">LMS</a>
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
