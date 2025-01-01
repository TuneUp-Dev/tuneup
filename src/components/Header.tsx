import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code_DarkBlue.svg";
import React from "react";

const Header = ({ hapticFeedback }) => {
  return (
    <>
      <div
        id="main-about"
        className="relative h-[1020px] bg-red sm:h-[860px] lg:h-[1150px] overflow-hidden text-center pt-32 lg:pt-44"
      >
        {/* Bg Gradient */}
        <div className="Responsive-Navbar z-20 gradient-background blur-[100px] opacity-40 mt-[-200px] absolute mx-[16%] w-[68%] flex justify-center px-auto">
          <div className="Blue-Gradient animate-spin-clockwise"></div>
          <div className="Red-Gradient animate-spin-counterclockwise"></div>
          <div className="Yellow-Gradient animate-spin-clockwise"></div>
        </div>

        {/* BG Image */}
        <div className="absolute w-full h-[300px] z-10 bg-opacity-15 top-0 bg-gradient-to-b from-white to-transparent">
          <div className="background-image-container">
            <img
              src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66436f06a1016be8fae136f3_Hero-Module.svg"
              loading="eager"
              alt=""
              className="unselect mx-auto opacity-40"
            />
          </div>
        </div>

        {/* Dot Grid Background */}
        <div className="absolute hidden w-full h-[1120px] lg:h-[1300px] inset-0 z-10 bg-dots"></div>

        {/* Foreground Content */}
        <div className="relative z-50">
          <p className="bg-slate-50 shadow-[0_3px_10px_-12px_rgba(0,0,0,0.3)] Geist-bold text-[8px] sm:text-[9px] lg:text-[13px] w-[160px] sm:w-[180px] lg:w-[260px] uppercase text-blue-950 mx-auto p-1 pb-0.5 sm:pb-1 lg:pb-1 lg:p-1.5 rounded-full">
            Tune Up Yourself with TuneUp
          </p>
          <h1 className="poppins-bold text-[#021734] text-[22px] sm:text-[30px] lg:text-[60px] mx-auto w-[320px] sm:w-[400px] lg:w-[850px] lg:leading-[83px] mt-2.5 sm:mt-3 lg:mt-5">
            We make{" "}
            <span className="bg-[#021734] px-4 lg:px-6 py-[1.5px] lg:py-0 text-blue-50 rounded-full">
              Impossible
            </span>
            <br />
            <span className="ml-5 py-[1.5px] lg:py-0 bg-[#021734] text-white px-4 lg:px-6 rounded-full">
              to I'm Possible.
            </span>
          </h1>
          <p className="nunito-medium mt-5 w-[90vw] sm:w-[80vw] lg:w-[680px] mx-auto text-[#021734] text-[12px] lg:text-[16px] lg:leading-[26px]">
            TuneUp Technologies is a dynamic SaaS product development company
            providing innovative digital solutions designed to empower startups
            and enterprises.
          </p>
          {/* Updated button with anchor link for smooth scroll */}

          <Button
            color="primary"
            onClick={() => {
              hapticFeedback();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="lg:hidden rounded-full w-[150px] lg:w-[210px] h-[40px] lg:h-[56px] mt-10 text-blue-950 text-[14px] lg:text-[20px] bg-blue-50 bg-opacity-10 border-[1.5px] border-blue-500 border-opacity-20 backdrop-blur-[10px] nunito-medium cursor-pointer"
          >
            Let's Tune
            <img
              className="unselect w-5 lg:w-9 -ml-2.5 lg:-ml-3 animate-left-right"
              src={Code}
              alt=""
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
