import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className = "font-poppins text-my-dark-blue flex flex-col">
          <div className = "flex gap-20 w-10/12 mx-auto">
                <div>
                  {/* company */}
                  <p className = "font-semibold text-xl py-6">Company</p>
                
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">About</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Careers</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Blog</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Partnership</p>

                </div>

                <div>
                  {/* community */}
                  <p className = "font-semibold text-xl py-6">Community</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Team plans</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Git membership Cards</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Scholarships</p>
                </div>

                <div>
                  <p className = "font-semibold text-xl py-6">Teachers</p>
                  {/* teachers */}
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Become a Teacher</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Teacher Help Centre</p>
                  <p className = "hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Teacher Rules and Requiremehts</p>
                </div>
            </div>


            <div className = "w-10/12 mx-auto py-10">
              {/* terms section */}
              <div className = "bg-my-green h-[2.5px]"></div>
              <div className = "flex py-3">
                <div className = "flex relative">
                  <FaRegCopyright className = "absolute top-1" />
                  <div className = "px-5">SkillsHub Inc, 2024</div>
                </div>
              <div className = "relative" ><GoDotFill className = "absolute top-1 text-xs" /></div>
              <p className = "px-4">Terms</p>
              <div className = "relative"><GoDotFill className = "absolute top-1 text-xs"/></div>
              <p className = "px-4">Policies</p>
              <div className = "relative"><GoDotFill className = "absolute top-1 text-xs"/></div>
              <p className = "px-4">Help</p>
              <div className = "relative"><GoDotFill className = "absolute top-1 text-xs"/></div>
              <p className = "px-4">Privacy</p>
              </div>
            </div>
      </div>
    </>
  )
}

export default Footer