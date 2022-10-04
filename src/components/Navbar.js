import React from "react";
import plantIcon from "../assets/imgs/robo-green.svg";

const Navbar = () => {
  return (
    <section className="bg-blue-900 text-yellow-100 text-lg hidden lg:block p-2 shadow-md">
      <div className="nav-wrapper flex justify-evenly mx-auto items-center">
        <div>
          <Link to="/" className="flex justify-center items-center">
            <img
              src={plantIcon}
              alt="icon of digital plant"
              className="h-16 w-auto"
            />

            <div className="text-yellow-400">
              <h1>Forget-</h1>
              <h1>ME-NOT</h1>
            </div>
          </Link>
        </div>

        <ul className="flex gap-6">
          <Link href="/upload">
            <li className="hover:underline hover:text-yellow-400">Upload</li>
          </Link>
          <Link to="/garden">
            <li className="hover:underline hover:text-yellow-400">
              Your Garden
            </li>
          </Link>
          <a href="#how-to">
            <li className="hover:underline hover:text-yellow-400">
              How To Use
            </li>
          </a>
          <a href="#contact">
            <li className="hover:underline hover:text-yellow-400">Contact</li>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
