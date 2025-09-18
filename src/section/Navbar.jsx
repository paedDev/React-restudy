import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <nav className="lg:w-7xl mx-auto relative ">
      <div className="flex items-center justify-between p-6  rounded-xl shadow-2xl">
        {/* logo menu */}
        <div>
          <a href="#" className="font-semibold text-lg">
            Simple project
          </a>
        </div>

        {/* desktop menu */}
        <div className="lg:block hidden">
          <div className="flex items-center justify-center space-x-10">
            <div className="relative group">
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full bg-teal-200 transition-all duration-300 ease-in-out "></span>
              <a href="#" className="text-gray-700 z-10 relative">
                Home
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 z-10 relative">
                About
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full bg-teal-200 transition-all duration-300 ease-in-out "></span>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 z-10 relative">
                Contact
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full bg-teal-200 transition-all duration-300 ease-in-out "></span>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 z-10 relative">
                Shop
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full bg-teal-200 transition-all duration-300 ease-in-out "></span>
            </div>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={handleMenu} className="lg:hidden block">
          {menu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>

        {menu && (
          <div className="lg:hidden absolute h-[full] left-0 top-18 mt-2 w-full bg-white  shadow-2xl z-50 overflow-hidden ease-in-out transition duration-500 ">
            <div className="flex flex-col py-4 items-center w-full backdrop-blur-2xl ">
              <div
                className="relative group w-full text-center px-6 py-3"
                onClick={closeMenu}
              >
                <span className="absolute w-0 top-0 left-0 -translate-x-120 group-hover:translate-x-0 group-hover:w-full h-full bg-zinc-800/50 transition-all duration-300 ease-in-out z-10 "></span>
                <span className=" text-lg relative z-20  group-hover:text-white transition-colors duration-500">
                  Home
                </span>
              </div>

              <div
                className="relative group w-full text-center px-6 py-3   overflow-hidden transition duration-500"
                onClick={closeMenu}
              >
                <span className="absolute bg-red-200 top-0 left-0 w-0 group-hover:w-full -translate-x-120 group-hover:translate-x-0 transition duration-300 ease-in-out  h-full"></span>
                <a
                  href="#"
                  className="text-lg relative  group-hover:text-white transition-colors-500"
                >
                  About
                </a>
              </div>
              <div
                className="relative group w-full text-center px-6 py-3   overflow-hidden transition duration-500"
                onClick={closeMenu}
              >
                <span className="absolute bg-red-200 top-0 left-0 w-0 group-hover:w-full -translate-x-120 group-hover:translate-x-0 transition duration-300 ease-in-out  h-full"></span>
                <a
                  href="#"
                  className="text-lg relative  group-hover:text-white transition-colors-500"
                >
                  Contact
                </a>
              </div>
              <div
                className="relative group w-full text-center px-6 py-3   overflow-hidden transition duration-500"
                onClick={closeMenu}
              >
                <span className="absolute bg-red-200 top-0 left-0 w-0 group-hover:w-full -translate-x-120 group-hover:translate-x-0 transition duration-300 ease-in-out  h-full"></span>
                <a
                  href="#"
                  className="text-lg relative  group-hover:text-white transition-colors-500"
                >
                  Socials
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
