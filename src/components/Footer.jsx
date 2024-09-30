import React from 'react';
import { FaRegCopyright } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

function Footer() {
  return (
    <div className="font-poppins text-my-dark-blue flex flex-col">
      {/* Sections */}
      <div className="flex flex-col sm:flex-row sm:gap-8 md:gap-10 lg:gap-20 w-11/12 mx-auto">
        {/* Company Section */}
        <div className="mb-6 sm:mb-0">
          <p className="font-semibold text-xl py-6">Company</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">About</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Careers</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Blog</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Partnership</p>
        </div>

        {/* Community Section */}
        <div className="mb-6 sm:mb-0">
          <p className="font-semibold text-xl py-6">Community</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Team plans</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Git membership Cards</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Scholarships</p>
        </div>

        {/* Teachers Section */}
        <div>
          <p className="font-semibold text-xl py-6">Teachers</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Become a Teacher</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Teacher Help Centre</p>
          <p className="hover:text-my-blue hover:underline py-1 hover:cursor-pointer">Teacher Rules and Requirements</p>
        </div>
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
