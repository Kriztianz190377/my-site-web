import Skill from "./Skill";
import React, { useState } from "react";

import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/javascript.png";
import JQ from "../../assets/Jquery.png";
import REACT from "../../assets/react.png";
import RES from "../../assets/responsive.png";
import BS from "../../assets/bootstrap5.png";
import SASS from "../../assets/sass.webp";
import GULP from "../../assets/gulp.webp";
import GH from "../../assets/github.png";
import TAILWIND from "../../assets/tailwind.png";
import {Navigate} from "react-router-dom";


const Skills = () => {
  const [portfolio, setPortfolio] = useState(false);
  const handlePortfolio = () => {
    setPortfolio(true);
  };
  console.log(portfolio);

  return (
    //TODO Ameliorer le code avec un component
    <div
      name="skills"
      className="w-full pt-40 pb-20 bg-[#0a192f] text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Skills
          </p>
          <p className="py-4">// These are the technologie I've worked with </p>
        </div>

        <button
          onClick={handlePortfolio}
          href=""
          className="w-full grid grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8"
        >
          {!portfolio ? (
           <>
              <Skill src={HTML} name={"HTML"} />
              <Skill src={CSS} name={"CSS3"} />
              <Skill src={JS} name={"JavaScript"} />
              <Skill src={JQ} name={"jQuery"} />
              <Skill src={REACT} name={"React.Js"} />
              <Skill src={RES} name={"Responsive Design"} />
              <Skill src={BS} name={"Bootstrap-5 "} />
              <Skill src={SASS} name={"SASS"} />
              <Skill src={GULP} name={"Gulp.js"} />
              <Skill src={GH} name={"GitHub"} />
              <Skill src={TAILWIND} name={"Tailwind"} />
           </>
           
          ) : (
            <Navigate to ="/portfolio" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Skills;
