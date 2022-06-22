import React from "react";
import ME from "../../assets/castaneda2.jpg";

const About = () => {
  return (
    <div
      name="about"
      className=" md:w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-12">
          <div className="sm:text-right flex justify-center items-end pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>

          <div className="flex justify-center">
            <div
              className="bg-[#4db5ff] rounded-3xl w-[150px] h-[200px] 
            md:w-[200px] md:h-[250px] "
            >
              <img
                className="me-img rounded-3xl cursor-pointer rotate-12 h-[200px] hover:rotate-0 duration-500 mb-4 
                md:w-[200px] md:h-[250px] "
                src={ME}
                alt=""
                sizes=""
                srcSet=""
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 mt-10 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'am Christian, nice too meet you. please take a look around
            </p>
          </div>

          <p className="sm:text-left text-2xl">
            I'am front-end developer, focused on building responsive web
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
