import React from "react";

const Footer = () => {
  return (
    <div name="footer" className="w-full   bg-[#000] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px]  w-full mx-auto p-4 
        flex md:flex-row flex-wrap justify-center items-center  
      "
      >

        <p className="flex flex-row font-bold tracking-wider md:text-xl text-xs">
          Created by: &nbsp;
          <span className="text-pink-600 ">
            <a href="https://castanedadeveloper.com/">Castanedadeveloper.com</a>
          </span>
        </p>
        <p>&nbsp;| &#9400; 2022 June all rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;
