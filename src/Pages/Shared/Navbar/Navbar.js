import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/gym-logo-removebg-preview.png';

const Navbar = () => {
  const [showOffer, setShowOffer] = useState(true);

    const menu = (
      <>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
      </>
    );
    return (
      <>
        {showOffer && (
          <div className="relative">
            <section className="flex justify-around marque-effect bg-slate-900 text-slate-200">
              <p className="">
                <span className="text-2xl font-semibold text-red-600">20%</span>{" "}
                free on every product!
              </p>
              <p className="">
                <span className="text-2xl font-semibold text-red-600">20%</span>{" "}
                free on every product!
              </p>
              <p className="">
                <span className="text-2xl font-semibold text-red-600">20%</span>{" "}
                free on every product!
              </p>
            </section>
            <button
              onClick={() => setShowOffer(false)}
              className="absolute bg-red-500 px-2 rounded-full text-gray-200 top-1 right-1"
            >
              X
            </button>
          </div>
        )}
        <div className="navbar bg-slate-800 text-slate-200">
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl font-semibold ml-5">
              <img src={logo} className="inline w-8 mr-2" alt="" />
              ResalePort.com{" "}
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menu}</ul>
          </div>
          <div className="navbar-end">
            <Link to="login" className="btn btn-primary btn-outline">
              Sign In
            </Link>
          </div>
        </div>
      </>
    );
};

export default Navbar;