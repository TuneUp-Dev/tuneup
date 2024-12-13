import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code_DarkBlue.svg";
import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/icons/LikedIn_Light_Icon.svg";
import Instagram from "../assets/icons/Instagram_Light_Icon.svg";
import Github from "../assets/icons/Github_Light_Icon.svg";
import Mail from "../assets/icons/Mail_Light_Icon.svg";
import Slack from "../assets/icons/Slack_Light_Icon.svg";

const Header = () => {
  return (
    <>
      <div className="relative h-[1400px] overflow-hidden text-center pt-44">
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
              className="mx-auto opacity-40"
            />
          </div>
        </div>

        {/* Dot Grid Background */}
        <div className="absolute hidden w-full h-[1300px] inset-0 z-10 bg-dots"></div>

        {/* Foreground Content */}
        <div className="relative z-50">
          <p className="bg-slate-50 shadow-[0_3px_10px_-12px_rgba(0,0,0,0.3)] Geist-bold text-[13px] uppercase text-blue-950 mx-auto w-[260px] p-1.5 rounded-full">
            Tune Up Yourself with TuneUp
          </p>
          <h1 className="poppins-bold text-[#021734] text-[70px] mx-auto w-[850px] leading-[98px] mt-5">
            We make{" "}
            <span className="bg-[#021734] px-6 text-blue-50 rounded-full">
              Impossible
            </span>
            <br />
            <span className="ml-5 bg-[#021734] text-white px-6 rounded-full">
              to I'm Possible.
            </span>
          </h1>
          <p className="nunito-medium mt-5 w-[680px] mx-auto text-[#021734] text-[16px] leading-[26px]">
            TuneUp Technologies is a dynamic SaaS product development company
            providing innovative digital solutions designed to empower startups
            and enterprises.
          </p>
          {/* Updated button with anchor link for smooth scroll */}
          <a href="#about" className="block">
            <Button
              color="primary"
              className="rounded-full w-[210px] h-[56px] mt-10 text-blue-950 text-[20px] bg-blue-50 bg-opacity-10 border-[1.5px] border-blue-500 border-opacity-20 backdrop-blur-[10px] nunito-medium cursor-pointer"
            >
              Let's Start
              <img className="w-9 -ml-3 animate-left-right" src={Code} alt="" />
            </Button>
          </a>
        </div>
      </div>

      {/* Second Container */}
      <div
        id="about"
        className="absolute z-40 w-full h-[800px] bg-gradient-to-t from-[#021734] via-[#294770] to-transparent -mt-[800px] pt-60 pb-52 flex justify-center items-center"
      >
        <div className="w-[1200px] shadow-md shadow-[#294770] text-white flex justify-between items-start h-[600px] bg-[#021734] bg-opacity-40 rounded-3xl pt-2 pb-10 px-9 gap-x-5">
          <div className="min-w-[700px] h-full flex flex-col justify-between items-start">
            <h1 className="text-[140px] poppins-medium uppercase">ABOUT US</h1>
            <div className="flex flex-col justify-end items-start">
              <p className="poppins-medium">The solution we provide:</p>
              <span className="flex flex-wrap gap-x-3 gap-y-1.5 mt-4 w-[350px] text-[12px]">
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  Web Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  Mobile Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  IoT Projects
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  Digital Marketing
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  Content Creation
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] text-gray-300 Geist-medium px-3.5 py-1.5 rounded-full">
                  IT Support
                </p>
              </span>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-end items-end">
            <p className="absolute min-w-full -left-[330px] top-60 Geist-normal text-slate-300 text-[15.5px]">
              <h1 className="bg-white border-[#021734] border-opacity-60 border-[1.5px] text-[#021734] w-[216px] text-[15px] Geist-medium rounded-full mb-2 flex justify-center items-center py-1">
                Impossible to I'm Possible
              </h1>
              At TuneUp Technologies, we are a leading software development
              company dedicated to delivering innovative, scalable, and
              user-focused solutions that empower businesses to thrive in the
              digital era. Specializing in custom software development, SaaS
              products, and web and mobile applications, we blend creativity and
              technical expertise to craft software that meets the unique needs
              of startups and enterprises alike. With a commitment to quality,
              security, and continuous innovation, our team partners with
              clients to transform ideas into impactful, future-ready digital
              solutions. At TuneUp Technologies, we don’t just build software;
              we build success.
            </p>
            <span className="flex justify-end items-end text-white">
              <div className="mx-auto md:mx-0 flex space-x-4 bg-[#021734] bg-opacity-40 backdrop-blur-[5px] rounded-3xl py-2 px-3.5">
                <Link
                  to="https://www.linkedin.com/company/tuneup-technologies"
                  target="_blank"
                >
                  <img src={LinkedIn} alt="" className="w-5" />
                </Link>
                <Link
                  to="https://www.instagram.com/tuneup_technologies"
                  target="_blank"
                >
                  <img src={Instagram} alt="" className="w-5" />
                </Link>
                <Link to="https://github.com/TuneUp-Dev" target="_blank">
                  <img src={Github} alt="" className="w-5" />
                </Link>
                <Link to="#" target="_blank">
                  <img src={Slack} alt="" className="w-5" />
                </Link>
                <Link to="#" target="_blank">
                  <img src={Mail} alt="" className="w-5" />
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
