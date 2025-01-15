import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div className="flex gap-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to='/allBooks'>All Books</NavLink>
      <NavLink to='/addBooks'>Add Books</NavLink>
      <NavLink to='/borrowedBooks'>Borrowed Books</NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        <Link>
          <button className="btn">Log In</button>
        </Link>
        <Link>
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
