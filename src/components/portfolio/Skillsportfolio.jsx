import React from "react";
import Skillportafolio from "./Skillportafolio";
import { BsGithub } from "react-icons/bs";
import FV from "../../assets/Festival-r.png";
import AW from "../../assets/weatherApi-r.png";
import SS from "../../assets/songSearch-r.png";
import VT from "../../assets/vterinary-r.png";
import CM from "../../assets/cryptocurrencies-r.png";
import GA from "../../assets/gifApp-r.png";

import TA from "../../assets/topActress-r.png";
import BS from "../../assets/bootstrap-r.png";
import CA from "../../assets/calculator-r.png";

const Skillsportfolio = () => {


  return (
    <div
      name="skills"
      className="w-full border-red-900  bg-[#0a192f] mt-[100px] text-gray-300 "
    >
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto p-4 flex flex-col  w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
            Portfolio
          </p>
          <p className="py-4">// These are the technologie I've worked with </p>
        </div>

        <div className=" flex flex-row flex-wrap justify-center items-center  text-center py-8">
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"React.Js"}
              subtitle={"@Vite/Tailwind Css"}
              src={VT}
              alt={"Veterinary"}
              websitename={"https://veterinary.castanedadeveloper.com/"}
              href={"https://github.com/Kriztianz190377/Veterinary"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"React.Js"}
              subtitle={"@Vite/Styled-Components"}
              src={CM}
              alt={"Veterinary"}
              websitename={"https://crypto.castanedadeveloper.com/"}
              href={"https://github.com/Kriztianz190377/Crypto"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"React.Js"}
              subtitle={"TailwindCss"}
              src={CM}
              alt={"Veterinary"}
              websitename={"https://crypto.castanedadeveloper.com/"}
              href={"https://github.com/Kriztianz190377/Crypto-TailwindCss"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"React.Js"}
              subtitle={"Css3"}
              src={GA}
              alt={"Veterinary"}
              websitename={"https://kriztianz190377.github.io/Gif-react/"}
              href={"https://github.com/Kriztianz190377/Gif-react"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"React.Js"}
              subtitle={"Sass/GulpJs"}
              src={FV}
              alt={"Festival/Sass"}
              websitename={"https://festival.castanedadeveloper.com"}
              href={"https://github.com/Kriztianz190377/FestivalReact"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"JavaScript"}
              subtitle={"Sass/Html"}
              src={AW}
              alt={"Weather App"}
              websitename={"https://weather-report.castanedadeveloper.com"}
              href={"https://github.com/Kriztianz190377/SassWeatherApi"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"JavaScript"}
              subtitle={"Sass/Html"}
              src={SS}
              alt={"Song Search"}
              websitename={"https://lyrics.castanedadeveloper.com"}
              href={"https://github.com/Kriztianz190377/lyrics"}
              icon={<BsGithub />}
            />
          </div>

          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"jQuery"}
              subtitle={"Css3"}
              src={TA}
              alt={"Top Actress"}
              websitename={"http://top5actrice.castanedadeveloper.com/"}
              href={"https://github.com/Kriztianz190377/jQuery"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"Bootstrap 5"}
              subtitle={"Html"}
              src={BS}
              alt={"Bootstrao 5"}
              websitename={"https://bootstrap.castanedadeveloper.com/"}
              href={"https://github.com/Kriztianz190377/Bootstrap"}
              icon={<BsGithub />}
            />
          </div>
          <div className="lg:w-[30%] md:w-[40%] rounded-xl hover:bg-[#0d1f3a] duration-500 m-3 ">
            <Skillportafolio
              title={"JavaScript"}
              subtitle={"Html/Css3"}
              src={CA}
              alt={"JavaScript"}
              websitename={
                "https://javascriptcalculator.castanedadeveloper.com/"
              }
              href={"https://javascriptcalculator.castanedadeveloper.com/"}
              icon={<BsGithub />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillsportfolio;
