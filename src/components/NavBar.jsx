import React, { useState } from 'react';
import logo from "../assets/logo.png";
import darkLogo from "../assets/dark_logo.png"
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {NavLinks} from "../data/NavBarData"

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SignUpHandler = () => {
    navigate('/signUp')
  }

  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  return (
    <>
      <div className=  {`flex justify-between font-poppins py-2 px-2 items-center ${!isHomePage ? 'bg-my-dark-blue text-white' : 'bg-white text-black'}`}>
        {/* Logo */}
        <div>
          <Link to={"/"}>
            <img src={isHomePage ? logo : darkLogo} className={`${!isHomePage ? 'max-h-8' : 'max-h-10' }`} alt="Logo" />
          </Link>
        </div>

        {/* Search and Browse (hidden on mobile) */}
        <div className="hidden md:flex w-[30%]">
          <div className= {`font-semibold mr-8 py-2 flex ${isHomePage ? 'hover:text-my-blue' : 'hover:text-my-green'}`}>
            Browse 
            <span className="pt-1 px-2"><IoIosArrowDown /></span>
          </div>
          <div className="relative w-full flex">
          <CiSearch className= "relative text-3xl top-2 left-8 text-black"/>
            <input 
              type="text" 
              placeholder="Search for skills or courses" 
              className="outline-none font-poppins text-black border-[1.2px] border-gray-300 py-2 px-3 pl-10 font-semibold w-full placeholder:text-black" 
            />
          </div>
        </div>

        
        <div className="hidden md:flex">
          <div className="flex font-poppins font-semibold gap-5 py-2 px-4">
            {
              NavLinks.map((ele, index) => {
                return <div key={index} className = {`font-poppins font-semibold ${isHomePage ? 'hover:text-my-blue' : 'hover:text-my-green'}`}>
                  <Link to={ele.link}>{ele.name}</Link>
                </div>
              })
            }
          </div>
          <button className="font-semibold px-4 bg-my-green py-2 text-xl rounded-md mr-3 text-my-dark-blue font-poppins" onClick={SignUpHandler}>Sign up</button>
        </div>
        

        {/* Hamburger Icon (visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <IoMenuSharp className="text-3xl" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className= {`md:hidden flex flex-col shadow-lg font-semibold p-4 ${!isHomePage ? 'bg-my-dark-blue text-white' : 'bg-white text-black'}`} >
        {
          NavLinks.map((ele, index) => {
            return <div key={index} className = {`py-2 ${isHomePage ? 'hover:text-my-blue' : 'hover:text-my-green'}`}>
              <Link to={ele.link}>{ele.name}</Link>
            </div>
          })
        }
          <button className="px-4 bg-my-green py-2 text-xl rounded-md mt-3 text-my-dark-blue" onClick={SignUpHandler}>Sign up</button>
        </div>
      )}
    </>
  );
}

export default NavBar;
