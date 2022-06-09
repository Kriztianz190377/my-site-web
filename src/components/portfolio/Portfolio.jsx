import React from "react";

import NavPortfolio from "./NavPortfolio";
import Skillsportfolio from "./Skillsportfolio";
import Footer from "../main-web/Footer";

const Portfolio = () => {
  return (
    <div className="w-full h-auto ">
      <NavPortfolio />
      <Skillsportfolio />
      <Footer />
    </div>
  );
};

export default Portfolio;
