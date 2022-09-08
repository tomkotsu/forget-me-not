import React from "react";
import plantIcon from "../assets/imgs/robo-green.svg";

const Navbar = () => {
  return (
    <section className="bg-blue-900 text-yellow-100 text-lg hidden lg:block p-2 shadow-md">
      <div className="nav-wrapper flex justify-evenly mx-auto items-center">
          <div>
          <a href="/" className="flex justify-center items-center">
            <img
              src={plantIcon}
              alt="icon of digital plant"
              className="h-16 w-auto"
            />

            <div className="text-yellow-400">
              <h1>Forget-</h1>
              <h1>ME-NOT</h1>
            </div>
            </a>
          </div>

        <ul className="flex gap-6">
          <a href="/upload">
            <li className="hover:underline hover:text-yellow-400">Upload</li>
          </a>
          <a href="/garden">
            <li className="hover:underline hover:text-yellow-400">
              Your Garden
            </li>
          </a>
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
