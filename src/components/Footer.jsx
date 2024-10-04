import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useLocation } from 'react-router-dom';
import {FooterLinks} from "../data/FooterLinks"

function Footer() {

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`font-poppins text-my-dark-blue flex flex-col ${!isHomePage ? 'bg-my-dark-blue text-white' : 'bg-white text-black'}`}>
      {/* Sections */}

        <div className="mb-6 sm:mb-0 flex flex-col sm:flex-row sm:gap-8 md:gap-10 lg:gap-20 w-11/12 mx-auto">
          {
            FooterLinks.map((ele, index) => {
              return <div key={index} className = "mb-6 sm:mb-0">
                    <p className = "font-semibold text-xl py-6">{ele.cateogory}</p>
                    {
                      ele.links.map((title, index) => {
                        return <p key={index} className = {`hover:underline py-1 hover:cursor-pointer ${isHomePage ? 'hover:text-my-blue' : 'hover:text-my-green'}`}>
                            {title}
                        </p>
                      })
                    }
              </div>
            })
          }
        </div>

      {/* Divider and Terms Section */}
      <div className="w-11/12 mx-auto py-10">
        <div className="bg-my-green h-[2.5px]"></div>
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 text-sm">
          <div className="flex items-center">
            <FaRegCopyright className="mr-2" />
            <div>SkillsHub Inc, 2024</div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 py-2 sm:py-0">
            <GoDotFill className="text-xs" />
            <p>Terms</p>
            <GoDotFill className="text-xs" />
            <p>Policies</p>
            <GoDotFill className="text-xs" />
            <p>Help</p>
            <GoDotFill className="text-xs" />
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
