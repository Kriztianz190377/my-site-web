import React from "react";
import B2X from "../../assets/b2xCentarl-r.png";
import TECH from "../../assets/techalliague-r.png";
import CardWork from "./CardWork";

const Work = () => {
  return (
    <div name="work" className="w-full  pt-40 pb-20 bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px]  mx-auto  flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-4">// Check out some of my recent work</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 ">
          <div>
            <CardWork
              href={"https://www.tech-alliage.com/"}
              img={TECH}
              titleH5="3-Shape Designer  "
              paragraphP="With CAD/CAM (Computer-Aided Design /
               Computer-Aided Manufacturing):And CAO/CFAO  
              (conception et fabrication assistée par ordinateur)."
              buttonBtn="More"
            />
          </div>
          <div>
            <CardWork
              href={"https://b2xcentral.com"}
              img={B2X}
              titleH5="Frontend developer"
              paragraphP="Connect, share and participate in
               group meetings with the G-Suit tool (Google Workspace)
               in order to define the specific tasks for each one."
              buttonBtn="More"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
