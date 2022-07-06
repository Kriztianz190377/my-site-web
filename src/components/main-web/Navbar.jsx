import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import CVpdf from '../../assets/ChristianC-CV.pdf'
import LG from "../../assets/LogoCl.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="w-full h-[100px] bg-[#0a192f]  z-50
      fixed flex  flex-row px-10 justify-between items-center
      text-gray-300 uppercase"
    >
      <a
        className=" text-8xl font-extrabold  text-pink-600"
        href="https://castanedadeveloper.com/"
      >
        <img src={LG} alt="Logo Ccl" style={{ width: "80px" }} />
      </a>

      <ul className="hidden w-[40%] md:flex flex-row cursor-pointer justify-between items-center">
        <li className="hover:text-pink-600 duration-500 ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-500">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-500">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-pink-600 duration-500">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Icon-Menu */}
      <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobil Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] -z-[10] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-500">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0  ">
        <ul>
          <li
            className="w-[160px] pr-1 h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-blue-600"          >
            <a
              href="https://www.linkedin.com/in/christian-castaneda-cclweb/"
              target="_blank"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="w-[160px] pr-1 h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-[#333333]"
          >
            <a
              href="https://github.com/Kriztianz190377"
              target="_blank"
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="w-[160px] pr-1 h-[60px] flex justify-between cursor-pointer ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-[#6fc2b0]"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className=" flex justify-between font-bold items-center w-full to-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li
            className="w-[160px] pr-1 h-[60px] flex justify-between ml-[-100px] hover:ml-[0px]
                        duration-300  items-center bg-{#565f69}"
          >
            <a
              href={CVpdf}
              download
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

