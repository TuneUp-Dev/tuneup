import { ReactComponent as Logo } from "../assets/icons/TuneUp_Favicon.svg";
import React from "react";
// import Lottie from "react-lottie-player";
// import softwareani from "../animations/software.json";
// import webani from "../animations/website.json";
// import mobileani from "../animations/mobile.json";
// import markani from "../animations/marketing.json";
// import mediaani from "../animations/media.json";

interface ServicesChildProps {
  pathRef: React.RefObject<SVGPathElement>;
  iconPosition: { x: number; y: number };
  tailOffset: number;
  tailLength: number;
}

const Services: React.FC<ServicesChildProps> = ({
  pathRef,
  iconPosition,
  tailOffset,
  tailLength,
}) => {
  return (
    <>
      <div
        id="services"
        className="mt-[50px] lg:mt-64 xl:mt-0 pt-28 lg:pb-28 bg-[#021734]"
      >
        <div className="w-full h-[140px] lg:h-[190px] text-white flex flex-col justify-start items-center">
          <h1 className="inter-medium text-[32px] lg:text-[48px]">
            OUR SERVICES
          </h1>
          <p className="w-[94vw] lg:w-[500px] text-center text-white mt-2 lg:mt-3 text-opacity-70 text-[12px] lg:text-[16px]">
            At TuneUp Technologies, we offer a comprehensive range of services
            to help businesses thrive in the digital landscape
          </p>
        </div>
        <div
          id="timeline-services"
          className="timeline-container -mt-5 md:-mt-10 relative mx-auto w-full lg:w-full min-h-[900px] max-h-[900px] sm:min-h-[780px] sm:max-h-[780px] md:max-h-[1000px] lg:min-h-[1800px] xl:min-h-[2400px] lg:max-h-[1800px] xl:max-h-[2400px] px-5 lg:px-14 xl:px-20 sm:gap-x-5lex gap-x-2 lg:gap-x-10 justify-center lg:justify-between items-center lg:items-start"
        >
          {/* Contents */}
          <div className="w-full h-full">
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] pt-0.5 mt-5 md:mt-10 lg:mt-[40px] xl:mt-[150px] p-4 border-[#2c4464] rounded-3xl border-1 lg:border-0 hover:shadow-[2px_2px_0px_2px_#2c4464] lg:hover:shadow-none">
              <div className="">
                <h1 className="text-[25px] md:text-[28px] lg:text-[38px] xl:text-[40px] inter-medium text-white leading-8 md:leading-9 lg:leading-[44px] flex-nowrap mt-3">
                  MERN Web Application
                  <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 brightness-90">
                    Development
                  </span>
                </h1>
                {/* <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Tailored software solutions designed to meet your unique
                  business requirements.
                </p> */}
              </div>

              {/* <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
                <Lottie
                  loop
                  animationData={softwareani}
                  play
                  style={{ marginTop: "-50px" }}
                />
              </div> */}
            </div>

            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] pt-0.5 mt-5 md:mt-10 lg:mt-[40px] xl:mt-[150px] p-4 border-[#2c4464] rounded-3xl border-1 lg:border-0 hover:shadow-[2px_2px_0px_2px_#2c4464] lg:hover:shadow-none">
              <div className="">
                <h1 className="text-[25px] md:text-[28px] lg:text-[38px] xl:text-[40px] inter-medium text-white leading-8 md:leading-9 lg:leading-[44px] flex-nowrap mt-3">
                  Flutter Mobile Application
                  <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 brightness-90">
                    Development
                  </span>
                </h1>
                {/* <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Responsive and feature-rich web applications that enhance your
                  online presence.
                </p> */}
              </div>

              {/* <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
                <Lottie
                  loop
                  animationData={webani}
                  play
                  style={{ marginTop: "-50px" }}
                />
              </div> */}
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] pt-0.5 mt-5 md:mt-10 lg:mt-[40px] xl:mt-[150px] p-4 border-[#2c4464] rounded-3xl border-1 lg:border-0 hover:shadow-[2px_2px_0px_2px_#2c4464] lg:hover:shadow-none">
              <div className="">
                <h1 className="text-[25px] md:text-[28px] lg:text-[38px] xl:text-[40px] inter-medium text-white leading-8 md:leading-9 lg:leading-[44px] flex-nowrap mt-3">
                  Flutter Desktop Application
                  <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 brightness-90">
                    Development
                  </span>
                </h1>
                {/* <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Intuitive and dynamic mobile apps for Android and iOS
                  platforms.
                </p> */}
              </div>

              {/* <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
                <Lottie
                  loop
                  animationData={mobileani}
                  play
                  style={{ marginTop: "-50px" }}
                />
              </div> */}
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] pt-0.5 mt-5 md:mt-10 lg:mt-[40px] xl:mt-[150px] p-4 border-[#2c4464] rounded-3xl border-1 lg:border-0 hover:shadow-[2px_2px_0px_2px_#2c4464] lg:hover:shadow-none">
              <div className="">
                <h1 className="text-[25px] md:text-[28px] lg:text-[38px] xl:text-[40px] inter-medium text-white leading-8 md:leading-9 lg:leading-[44px] flex-nowrap mt-3">
                  Digital Marketing <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 brightness-90">
                    Services
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Comprehensive strategies for social media management, SEO and
                  online branding.
                </p>
              </div>

              {/* <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
                <Lottie
                  loop
                  animationData={markani}
                  play
                  style={{ marginTop: "-50px" }}
                />
              </div> */}
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] pt-0.5 mt-5 md:mt-10 lg:mt-[40px] xl:mt-[150px] p-4 border-[#2c4464] rounded-3xl border-1 lg:border-0 hover:shadow-[2px_2px_0px_2px_#2c4464] lg:hover:shadow-none">
              <div className="">
                <h1 className="text-[25px] md:text-[28px] lg:text-[38px] xl:text-[40px] inter-medium text-white leading-8 md:leading-9 lg:leading-[44px] flex-nowrap mt-3">
                  Digital <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 brightness-90">
                    Support
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  From strategy to execution, we guide you on every step of your
                  content creation journey.
                </p>
              </div>

              {/* <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
                <Lottie
                  loop
                  animationData={mediaani}
                  play
                  style={{ marginTop: "-50px" }}
                />
              </div> */}
            </div>
          </div>
          {/* SVG Animation */}
          <div className="hidden xl:flex overflow-hidden select-none h-[2700px] min-w-[260px] max-w-[260px] -mt-[260px] justify-center">
            <svg
              className="timeline-svg"
              viewBox="0 0 200 2000"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="tailGradient" x1="1" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#2d68af" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <mask id="fadeMask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <rect x="0" y="0" width="100%" height="150" fill="black" />
                </mask>
              </defs>

              <path
                ref={pathRef}
                d="M106.5 210 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
                style={{
                  fill: "none",
                  stroke: "#2d68af",
                  strokeWidth: 1.7,
                  opacity: 0.2,
                }}
              />

              <path
                d="M105 200 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
                stroke="url(#tailGradient)"
                strokeWidth={1.7}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${tailLength} ${
                  pathRef.current?.getTotalLength() || 0
                }`}
                strokeDashoffset={-tailOffset}
                mask="url(#fadeMask)"
              />

              <g
                className="unselect"
                style={{
                  transform: `translate(${iconPosition.x - 21}px, ${
                    iconPosition.y - 21
                  }px)`,
                  transformOrigin: "center center",
                }}
              >
                <Logo width={42} height={42} />
              </g>
            </svg>
          </div>
          {/* Images */}
          <div className="w-full min-h-[2500px] overflow-hidden hidden lg:block">
            <h1 className="lg:text-[90px] xl:text-[120px] text-white text-opacity-20 poppins-medium rotate-90 text-nowrap flex lg:mt-[200px] xl:mt-[230px] lg:ml-28 xl:ml-10 justify-start items-center">
              We Make Impossible to I'm Possible...
            </h1>
            {/* <div className="w-full h-auto rounded-xl overflow-hidden ">
              <Lottie
                loop
                animationData={softwareani}
                play
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden ">
              <Lottie
                loop
                animationData={webani}
                play
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden ">
              <Lottie
                loop
                animationData={mobileani}
                play
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden -mt-20">
              <Lottie
                loop
                animationData={markani}
                play
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden">
              <Lottie
                loop
                animationData={mediaani}
                play
                style={{ height: "300px", width: "300px" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
