import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useTypewriter} from 'react-simple-typewriter';
  

const Home = () => {
  const { text } = useTypewriter({
    words: ["Frontend", "Developer", "Frontend Developer"],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f]  pt-[100px]">

      {/* Container */}
      <div
        className="max-w-[1000px] text-white md:mx-auto  flex flex-col justify-center h-full"
      >
        <p className="text-pink-600 pb-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold pb-4 text-[#ccd6f6]">
          Christian Castaneda
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a <span className="text-pink-600">{text}.</span>
        </h2>
        <p className="text-[#ccd6f6] py-6 max-w-[700px] font-bold ">
          Holder of an internet-oriented programmer-analyst training, With
          knowledge in building responsive applications and website
        </p>

        <div className="py-3">
          <button
            className="text-white group border-2 px-6 py-3 flex items-center 
          hover:bg-pink-600 hover:border-pink-600 duration-300"
          >
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>

            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
