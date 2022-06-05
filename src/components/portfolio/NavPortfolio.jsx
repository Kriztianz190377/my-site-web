import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

import LG from "../../assets/LogoCl.png";



const NavPortfolio = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="w-full h-[100px] bg-[#0a192f] mt-[-100px] fixed flex justify-between items-center 
    px-4  text-gray-300"
    >
      {/* className="w-full h-[100px] bg-[#0a192f] mt-[-100px] fixed flex flex-row
      px-10 justify-between items-center text-gray-300 first-letter" */}
      <a
        className=" text-8xl font-extrabold  text-pink-600"
        href="https://castanedadeveloper.com/"
      >
        <img src={LG} alt="Logo Ccl" style={{ width: "80px" }} />
      </a>
      <ul className="hidden md:flex  w-[10%]">
        <li className="hover:text-pink-600 duration-500 ">
          <Link to="/">Home</Link>
        </li>
      </ul>
      {/* Icon-Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobil Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link to="/">Home</Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0  ">
        <ul>
          <li
            className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-blue-600"
          >
            <a
              href="https://www.linkedin.com/in/christian-castaneda-cclweb/"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-[#333333]"
          >
            <a
              href="/"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-[#6fc2b0]"
          >
            <a
              href="/"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-{#565f69}"
          >
            <a
              href="/"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              Resume <BsPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPortfolio;

;
