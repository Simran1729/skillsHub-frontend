import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between font-poppins py-2 px-2 items-center">
        {/* Logo */}
        <div>
          <img src={logo} className="max-h-12" alt="Logo" />
        </div>

        {/* Search and Browse (hidden on mobile) */}
        <div className="hidden md:flex w-[30%]">
          <div className="font-semibold mr-8 py-2 hover:text-my-blue flex">
            Browse 
            <span className="pt-1 px-2"><IoIosArrowDown /></span>
          </div>
          <div className="relative w-full flex">
            <CiSearch className="relative text-3xl top-2 left-8" />
            <input 
              type="text" 
              placeholder="Search for skills or courses" 
              className="outline-none font-poppins text-black border-[1.2px] border-gray-300 py-2 px-3 pl-10 font-semibold w-full placeholder:text-black" 
            />
          </div>
        </div>

        {/* Nav Links (hidden on mobile) */}
        <div className="hidden md:flex">
          <div className="flex font-poppins font-semibold gap-5 py-2">
            <div className="hover:text-my-blue">About Us</div>
            <div className="hover:text-my-blue">Contact Us</div>
            <div className="hover:text-my-blue cursor-pointer mr-8">Sign in</div>
          </div>
          <button className="font-semibold px-4 bg-my-green py-2 text-xl rounded-md mr-3 text-my-dark-blue">Sign up</button>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <IoMenuSharp className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg p-4">
          <div className="font-semibold py-2 hover:text-my-blue">Browse</div>
          <div className="font-semibold py-2 hover:text-my-blue">About Us</div>
          <div className="font-semibold py-2 hover:text-my-blue">Contact Us</div>
          <div className="font-semibold py-2 hover:text-my-blue cursor-pointer">Sign in</div>
          <button className="font-semibold px-4 bg-my-green py-2 text-xl rounded-md mt-3 text-my-dark-blue">Sign up</button>
        </div>
      )}
    </>
  );
}

export default NavBar;
