import React, { useState, useRef } from "react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [expression, setExpression] = useState("");
  const item = useRef(null);
  const navigate = useNavigate();
  const handleToggle = () => {
    const hidden =
      "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1";
    const visible =
      "justify-between items-center w-full lg:flex lg:w-auto lg:order-1";
    if (toggle) {
      //every thing is visible
      item.current.className = hidden;
      return setToggle(!toggle);
    }
    item.current.className = visible;
    return setToggle(!toggle);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setExpression(value);
  };

  const handleSearch = () => {
    navigate(`/search/${expression}`);
  };

  return (
    <nav className="bg-white py-3 px-3 border border-gray-300 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* logo and company name */}
        <Link to="/" className="flex items-center">
          {/* <img src={Logo} alt="logo" className="mr-3 w-20 md:w-24 lg:w-32 " /> */}
          <span className="font-mono font-semibold text-xl">
            Lanceme Up Store
          </span>
        </Link>
        <div className="flex order-2 ">
          {/* open menu */}
          {toggle ? (
            <GiTireIronCross
              className="text-2xl cursor-pointer my-3 ml-2 font-thin lg:hidden"
              onClick={handleToggle}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer lg:hidden"
              onClick={handleToggle}
            />
          )}
          {/* search box */}
          <div className="hidden lg:flex lg:gap-3">
            <div className="hidden relative lg:block">
              <BsSearch className="absolute cursor-pointer inset-y-0 left-0 my-auto pl-3 w-9 h-5 text-gray-500  pointer-events-none" />
              <input
                type="search"
                placeholder="Search Product...."
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border md:text-lg border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-2 w-20 rounded-md h-10"
            >
              Search
            </button>
          </div>
        </div>
        <div
          ref={item}
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-search"
        >
          <div className="flex items-center justify-center gap-3 lg:hidden">
            <div className="block relative lg:hidden my-3">
              <BsSearch className="absolute inset-y-0 left-0 my-auto pl-3 w-9 h-5 text-gray-500  pointer-events-none" />
              <input
                type="search"
                placeholder="Search Product..."
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border md:text-lg border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-3 py-2 w-20 rounded-md h-10"
            >
              Search
            </button>
          </div>
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white lg:dark:bg-gray-900 ">
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/admin">Admin</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600 rounded md:text-lg md:bg-transparent cursor-pointer  md:p-0 dark:text-white">
              <Link to="/login">Login</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600 rounded md:text-lg md:bg-transparent cursor-pointer  md:p-0 dark:text-white">
              <Link to="/register">Register</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600  rounded md:text-lg md:bg-transparent cursor-pointer md:p-0 dark:text-white">
              <Link to="/logout">Logout</Link>
            </li>
            <li className="block py-2 pr-4 pl-3 text-black hover:text-blue-600 rounded md:text-lg md:bg-transparent cursor-pointer  md:p-0 dark:text-white">
              <Link to="/cart" className="flex items-center gap-2">
                <AiOutlineShoppingCart fontSize="20px" /> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
