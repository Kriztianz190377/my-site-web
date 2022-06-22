import React from 'react'
import CVpdf from "../../assets/ChristianC-CV.pdf";

const CardWork = ({ href, img, titleH5, paragraphP, buttonBtn }) => {
  return (
    <div
      className="max-w-sm mx-auto p-3
    mt-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 
    dark:border-gray-700 hover:bg-gray-500 duration-500 hover:text-white group "
    >
      <a href={href} target="_blank">
        <img className="w-4/5 rounded-t-lg img" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h3
            className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white 
            group-hover:text-white duration-500"
          >
            {titleH5}
          </h3>
        </a>
        <p
          className="h-28 mb-3 font-normal text-gray-700 dark:text-gray-400
        group-hover:text-white duration-500"
        >
          {paragraphP}
        </p>
        <a
          href={CVpdf}
          download
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {buttonBtn}
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardWork