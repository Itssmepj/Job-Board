import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { MyContext } from "../ContextApi/MyContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let token = localStorage.getItem("token");
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const data = useContext(MyContext);
  // console.log("context", data?.role);
  // console.log(data.role);

  const navItems = [
    {
      path: "/",
      title: "Start a search",
    },
    token && {
      path: "/my-job",
      title: "My Jobs",
    },
    {
      path: "/about",
      title: "About",
    },

    token && {
      path: "/post-job",
      title: "Post a job",
    },

    // {
    //   path: "/post-job",
    //   title: "Post a job",
    // },
    {
      path: "/login",
      title: "Login",
    },
    {
      path: "/sign-up",
      title: "Sign-Up",
    },
  ].filter((item) => item);

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="text-2xl text-black">
          <span>
            <img src="../../public/images/yess.png" alt="" />
          </span>
        </a>
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign up and login button */}
        {/* <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Sign Up
          </Link>
        </div> */}

        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary" />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary">
                {" "}
              </FaBarsStaggered>
            )}
          </button>
        </div>
      </nav>

      {/* navItems for mobile */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white py-1">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
