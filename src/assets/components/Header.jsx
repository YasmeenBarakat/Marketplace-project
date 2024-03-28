import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header className="bg-slate-200 shadow-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="text-pink-500 font-bold text-sm sm:text-xl">
              YM Site
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search......"
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hidden sm:inline text-pink-500 hover:underline cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/About">
              <li className="hidden sm:inline text-pink-500 hover:underline cursor-pointer">
                About
              </li>
            </Link>
            <Link to="/SignIN">
              <li className="text-pink-500 hover:underline cursor-pointer">
                Sign in
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
