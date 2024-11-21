import { useRef, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/TuneUp_Icon.svg";
import Screenshot1 from "../assets/screenshot1.png";

const Services = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const logoRef = useRef<SVGCircleElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const pathBoundingBox = pathRef.current.getBoundingClientRect();
      const middleOfScreen = window.innerHeight / 2;

      const relativeMiddle = middleOfScreen - pathBoundingBox.top;

      if (relativeMiddle >= 0 && relativeMiddle <= pathBoundingBox.height) {
        const progressRatio = Math.min(
          Math.max(relativeMiddle / pathBoundingBox.height, 0),
          1
        );
        setProgress(progressRatio);

        const point = pathRef.current.getPointAtLength(
          progressRatio * pathLength
        );
        setIconPosition({ x: point.x, y: point.y });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-[320px] bg-[#021734] text-white flex flex-col justify-center items-center">
        <h1 className="inter-medium text-[48px]">Monitoring as Code</h1>
        <p className="w-[500px] text-center text-white mt-4 text-opacity-70">
          Transform your development workflow with a code-based monitoring
          process that's programmable, fast, and dependable.
        </p>
      </div>
      <div className="timeline-container -mt-10 relative bg-[#021734] px-28 flex gap-x-10 justify-between items-start">
        <div className="w-full h-full">
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-40 backdrop-blur-md group w-[30px] hover:w-[66px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-[11px] flex items-center justify-between space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[40px] mt-3">
              <span className="bg-clip-text mr-3 text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                Test
              </span>
              and verify your checks
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Test your resources from your local machine or during deployment
              in CI, all running on Checkly’s global infrastructure.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-40 backdrop-blur-md group w-[30px] hover:w-[66px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-[11px] flex items-center justify-between space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[40px] mt-3">
              <span className="bg-clip-text mr-3 text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                Test
              </span>
              and verify your checks
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Test your resources from your local machine or during deployment
              in CI, all running on Checkly’s global infrastructure.
            </p>
          </div>
          <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-[200px]">
            <span className="bg-slate-50 bg-opacity-40 backdrop-blur-md group w-[30px] hover:w-[66px] cursor-pointer transition-all duration-300 ease-in-out text-[15px] border-[0.5px] border-blue-100 border-opacity-20 px-2 py-1 rounded-[11px] flex items-center justify-between space-x-1.5 overflow-hidden">
              {/* "i" symbol */}
              <span
                className="flex items-center justify-center min-w-3.5 h-3.5 rounded-full border-[1.1px] border-white text-white text-[10px]"
                title="Information"
              >
                i
              </span>
              {/* "view" text */}
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                view
              </span>
            </span>

            <h1 className="text-[40px] inter-medium text-white leading-[40px] mt-3">
              <span className="bg-clip-text mr-3 text-transparent bg-gradient-to-r from-sky-600 to-blue-600">
                Test
              </span>
              and verify your checks
            </h1>
            <p className="text-gray-300 text-opacity-85 mt-4">
              Test your resources from your local machine or during deployment
              in CI, all running on Checkly’s global infrastructure.
            </p>
          </div>
        </div>
        <div className="overflow-hidden select-none min-w-[260px] max-w-[260px] flex justify-center">
          <svg
            className="timeline-svg"
            viewBox="0 0 200 2000"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="gradient-tail"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="40%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#3091f5" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Main Timeline Path */}
            <path
              ref={pathRef}
              d="M125 200 Q 125 260, 100 360 T 100 560 T 100 760 T 100 960 Q 125 1060, 125 1100"
              style={{
                fill: "none",
                stroke: "#60a5fa",
                strokeWidth: 1.7,
                opacity: 0.2,
              }}
            />

            {/* Tail Effect */}
            {pathRef.current && (
              <path
                d="M125 200 Q 125 260, 100 360 T 100 560 T 100 760 T 100 960 Q 125 1060, 125 1100"
                style={{
                  fill: "none",
                  stroke: "url(#gradient-tail)",
                  strokeWidth: 1.7,
                  strokeDasharray: `${
                    progress * pathRef.current.getTotalLength()
                  }, ${pathRef.current.getTotalLength()}`,
                }}
              />
            )}

            {/* Moving Logo */}
            <g
              ref={logoRef}
              className="timeline-logo"
              style={{
                transform: `translate(${iconPosition.x - 21}px, ${
                  iconPosition.y - 21
                }px)`,
                transformOrigin: "center center",
                zIndex: 9999,
                position: "absolute",
              }}
            >
              <Logo width={42} height={42} />
            </g>
          </svg>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Screenshot1} alt="" className="" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[200px]">
            <img src={Screenshot1} alt="" className="" />
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[200px]">
            <img src={Screenshot1} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
