import React from "react";
import roboHand from "../assets/imgs/robo-farm2.svg";
import hamburgerIcon from "../assets/imgs/hamburger-icon.svg"

const Hero = () => {
  return (
    <section className="flex justify-center items-center h-[100vh] md:h-[80vh]">
      <div className="title-wrapper flex flex-col justify-center items-center gap-10">
        <h1 className="hero-title text-4xl lg:text-7xl text-yellow-300 overflow-hidden whitespace-nowrap">
          FORGET-ME-NOT
        </h1>
        <button className="bg-green-500 hover:bg-green-600 rounded-full  h-20 text-yellow-50 p-6 text-lg md:text-2xl flex justify-center items-center">
          <img
            src={roboHand}
            alt="robot hand icon"
            className="h-16 md:h-24 w-auto"
          />
          Upload Your Flower
        </button>
      </div>
      <img src={hamburgerIcon} className="md:hidden absolute h-20 w-auto top-8 left-3" alt="robot hamburger menu"/>   
    </section>
  );
};

export default Hero;
