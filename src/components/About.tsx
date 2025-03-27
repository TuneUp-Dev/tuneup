import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/icons/LikedIn_Light_Icon.svg";
import Instagram from "../assets/icons/Instagram_Light_Icon.svg";
import Github from "../assets/icons/Github_Light_Icon.svg";
import Mail from "../assets/icons/Mail_Light_Icon.svg";
// import Youtube from "../assets/icons/Youtube.svg";

const About = ({ linkFeedback }) => {
  return (
    <>
      {/* Second Container */}
      <div
        id="about"
        className="absolute z-40 w-full h-auto lg:h-[750px] bg-gradient-to-t from-[#021734] via-[#294770] to-transparent -mt-[670px] sm:-mt-[528px] lg:-mt-[750px] pt-28 pb-5 lg:pb-10 lg:pt-12 flex justify-center items-end"
      >
        <div className="w-[90vw] lg:w-[94vw] xl:w-[86vw] shadow-lg shadow-[#294770] text-white flex lg:flex-row flex-col justify-start items-center lg:justify-between lg:items-start h-auto lg:h-[550px] bg-[#021734] bg-opacity-40 rounded-3xl pt-2 pb-8 lg:pb-10 px-5 lg:px-9 gap-x-5">
          <div className="w-full lg:min-w-[700px] h-auto lg:min-h-full flex flex-col justify-start items-center lg:justify-between lg:items-start text-center lg:text-left gap-y-5 lg:gap-y-0">
            <h1 className="text-[43px] lg:text-[140px] poppins-medium uppercase mx-auto">
              ABOUT US
            </h1>
            <div className="flex-col justify-end hidden lg:flex items-start">
              <p className="poppins-medium">The solution we provide:</p>
              <span className="flex justify-start flex-wrap gap-x-3 gap-y-1.5 mt-2 lg:mt-4 w-[277px] lg:w-[350px] text-[11px] lg:text-[12px]">
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Website Development
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Mobile Application Development
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Web application Development
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Desktop Application Development
                </p>
              </span>
            </div>
          </div>
          <div className="relative w-full h-full flex flex-col justify-end items-center sm:items-start lg:items-end top-5 lg:top-0">
            <p className="lg:absolute min-w-full lg:-left-[380px] xl:-left-[330px] lg:top-56 xl:top-60 Geist-normal text-justify text-slate-300 text-[12px] lg:text-[15.5px]">
              <h1 className="bg-white border-[#021734] border-opacity-60 border-[1.5px] text-[#021734] w-[270px] sm:w-[320px] text-[12.5px] sm:text-[15px] Geist-medium rounded-full mb-2 flex justify-center items-center py-1">
                Crafting Digital Experiences That Inspire.
              </h1>
              TuneUp Technologies is a catalyst for digital transformation,
              sculpting bespoke software solutions that seamlessly integrate
              innovation and functionality. With a relentless pursuit of
              excellence, we engineer high-performance websites, mobile
              applications, and desktop solutions that empower businesses to
              thrive in an ever-evolving digital landscape. At TuneUp
              Technologies, we don’t just build software; we build success.
            </p>

            <div className="flex flex-col justify-end items-start lg:hidden mt-10 lg:mt-0">
              <p className="poppins-medium">The solution we provide:</p>
              <span className="flex lg:justify-center flex-wrap gap-x-3 gap-y-1.5 mt-2 lg:mt-4 w-full sm:w-[480px] lg:w-[350px] text-[11px] lg:text-[12px]">
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Website Development
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Mobile Applications
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IoT Projects
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Digital Marketing
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  Content Creation
                </p>
                <p className="bg-[#021734] backdrop-blur-[20px] bg-opacity-80 text-gray-300 Geist-medium px-3 lg:px-3.5 py-1.5 rounded-full">
                  IT Support
                </p>
              </span>
            </div>

            <span className="sm:w-full flex justify-end items-end text-white mt-7">
              <div className="mx-auto sm:mx-0 lg:mx-0 flex space-x-4 bg-[#021734] bg-opacity-80 backdrop-blur-[5px] rounded-3xl py-2 px-3.5">
                <Link
                  to={"https://www.linkedin.com/company/tuneup-technologies"}
                  target="_blank"
                  onClick={linkFeedback}
                >
                  <img
                    src={LinkedIn}
                    alt=""
                    className="unselect w-5 hover:opacity-90"
                  />
                </Link>
                <Link
                  to={"https://www.instagram.com/tuneup_technologies"}
                  target="_blank"
                  onClick={linkFeedback}
                >
                  <img
                    src={Instagram}
                    alt=""
                    className="unselect w-5 hover:opacity-90"
                  />
                </Link>
                <Link
                  to={"https://github.com/TuneUp-Dev"}
                  target="_blank"
                  onClick={linkFeedback}
                >
                  <img
                    src={Github}
                    alt=""
                    className="unselect w-5 hover:opacity-90"
                  />
                </Link>
                <Link
                  to={"mailto:info@tuneuptech.in"}
                  target="_blank"
                  onClick={linkFeedback}
                >
                  <img
                    src={Mail}
                    alt=""
                    className="unselect w-5 hover:opacity-90"
                  />
                </Link>
                {/* <Link to={"https://www.youtube.com/@TuneUpedu"} target="_blank" onClick={linkFeedback}>
                  <img src={Youtube} alt="" className="unselect w-5 hover:opacity-90" />
                </Link> */}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
