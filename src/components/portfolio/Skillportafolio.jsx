import React from "react";

const Skillportafolio = ({
  title,
  subtitle,
  src,
  alt,
  websitename,
  href,
  icon,
}) => {
  return (
    <>
      <div className="text-xl font-bold mb-3 w-full hover:text-pink-600 duration-500">
        <h2 className=" my-2">{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div
        className=" flex justify-center items-center  rounded-xl   
       hover:text-black overflow-hidden hover:overflow-visible duration-500"
      >
        <div>
          <a href={websitename} target="_blank" className="">
            <img className="rounded-xl p-2 img" src={src} alt={alt} />
          </a>
        </div>
      </div>
      <div className="text-sm font-bold w-full mb-3 hover:text-pink-600 duration-500 overflow-hidden ">
        <a
          href={href}
          target="_blank"
          className="py-4 flex flex-col overflow-hidden justify-center items-center"
        >
          <p className="py-4 flex flex-wrap  ">{websitename}</p>{" "}
          <p className=" text-4xl text-center ">{icon}</p>
        </a>
      </div>
    </>
  );
};

export default Skillportafolio;
