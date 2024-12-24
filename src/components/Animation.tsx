import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/icons/TuneUp_Icon.svg";
import Icon1 from "../assets/icons/32.svg";
import Icon2 from "../assets/icons/33.svg";
import Icon3 from "../assets/icons/34.svg";
import Icon4 from "../assets/icons/35.svg";
import Icon5 from "../assets/icons/36.svg";
import Icon6 from "../assets/icons/37.svg";
import Icon7 from "../assets/icons/38.svg";
import Icon8 from "../assets/icons/39.svg";
import Icon9 from "../assets/icons/40.svg";
import Icon10 from "../assets/icons/41.svg";

// Additional icons for the transition
import Icon11 from "../assets/icons/42.svg";
import Icon12 from "../assets/icons/43.svg";
import Icon13 from "../assets/icons/44.svg";
import Icon14 from "../assets/icons/45.svg";
import Icon15 from "../assets/icons/46.svg";
import Icon16 from "../assets/icons/47.svg";
import Icon17 from "../assets/icons/48.svg";
import Icon18 from "../assets/icons/49.svg";
import Icon19 from "../assets/icons/50.svg";
import Icon20 from "../assets/icons/51.svg";

const pathData1 = [
  "M0,0 C200,252 600,422 795,432",
  "M0,100 C200,310 600,426 795,436",
  "M0,200 C200,360 600,430 795,440",
  "M0,300 C200,410 600,434 795,444",
  "M0,400 C200,460 600,438 795,448",
  "M0,500 C200,510 600,442 795,452",
  "M0,600 C200,560 600,446 795,456",
  "M0,700 C200,610 600,450 795,460",
  "M0,800 C200,660 600,454 795,464",
  "M0,900 C200,710 600,458 795,468",
];

const pathData2 = [
  "M795,432 C990,420 1400,252 1590,0",
  "M795,436 C990,426 1400,310 1590,100",
  "M795,440 C990,430 1400,360 1590,200",
  "M795,444 C990,434 1400,410 1590,300",
  "M795,448 C990,438 1400,460 1590,400",
  "M795,452 C990,442 1400,510 1590,500",
  "M795,456 C990,446 1400,560 1590,600",
  "M795,460 C990,450 1400,610 1590,700",
  "M795,464 C990,454 1400,660 1590,800",
  "M795,468 C990,458 1400,710 1590,900",
];

const iconUrls1 = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
];
const iconUrls2 = [
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
];

const iconOrder = [0, 2, 4, 1, 3, 8, 6, 5, 7, 9];

const AnimatedPath: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLengths1, setPathLengths1] = useState<number[]>([]);
  const [pathLengths2, setPathLengths2] = useState<number[]>([]);

  useEffect(() => {
    if (svgRef.current) {
      const lengths1 = pathData1.map((_, index) => {
        const path1 = svgRef.current?.querySelector(
          `#path1-${index}`
        ) as SVGPathElement;
        return path1?.getTotalLength() || 0;
      });
      setPathLengths1(lengths1);
    }
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      const lengths2 = pathData2.map((_, index) => {
        const path2 = svgRef.current?.querySelector(
          `#path2-${index}`
        ) as SVGPathElement;
        return path2?.getTotalLength() || 0;
      });
      setPathLengths2(lengths2);
    }
  }, []);

  return (
    <div className="animation-container bg-[#021734] h-auto lg:min-h-[1000px] relative">
      <p className="text-[26px] lg:text-[58px] text-white w-[90vw] lg:w-[700px] mx-auto text-center leading-8 lg:leading-[60px] pt-14 sm:pt-20 lg:pt-28 xl:pt-36 inter-medium">
        Transforming Technology into Possibilities
      </p>
      <p className="w-[90vw] sm:w-[600px] md:w-[700px] lg:w-[800px] text-center mt-4 lg:mt-10 text-white text-[11px] lg:text-[16px] mx-auto text-opacity-70">
        At TuneUp Technologies, what goes in as technology comes out as
        opportunity, success, and growth. Together, let’s redefine what’s
        possible in the digital world. Innovation starts here.
      </p>

      <div className="absolute z-40 right-0 top-20 w-32 h-full bg-gradient-to-l from-[#021734] to-transparent"></div>
      <svg
        ref={svgRef}
        width="100%"
        height="1000px"
        viewBox="0 0 1590 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.95] -mt-80 sm:-mt-68 md:-mt-[280px] lg:-mt-44"
      >
        {/* Define gradients */}
        <defs>
          {pathData1.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#021734" />
              <stop offset="20%" stopColor="#2267b2" />
              <stop offset="50%" stopColor="#0e57a5" />
              <stop offset="80%" stopColor="#2267b2" />
              <stop offset="100%" stopColor="#021734" />
            </linearGradient>
          ))}
        </defs>

        {/* Draw the paths first */}
        {pathData1.map((path1, index) => (
          <path
            key={`path1-${index}`}
            id={`path1-${index}`}
            d={path1}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2.5"
          />
        ))}

        {/* Draw the paths Second */}
        {pathData2.map((path2, index) => (
          <path
            key={`path2-${index}`}
            id={`path2-${index}`}
            d={path2}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2.5"
          />
        ))}

        {/* Render icons with the transition */}
        {iconOrder.map((index, i) => {
          return (
            <g key={`icon1-${index}`}>
              <image
                href={iconUrls1[index % iconUrls1.length]}
                width="100"
                height="100"
              >
                {pathLengths1.length > 0 && (
                  <>
                    <animateMotion
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                      rotate="auto"
                    >
                      <mpath href={`#path1-${index}`} />
                    </animateMotion>

                    {/* Animate the width */}
                    <animate
                      attributeName="width"
                      values="40;120;10"
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />

                    {/* Animate the height */}
                    <animate
                      attributeName="height"
                      values="40;120;10"
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />

                    {/* Adjust vertical position of the images */}
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={"0 -20; 0 -60; 0 -5"}
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />
                  </>
                )}
              </image>
            </g>
          );
        })}

        {/* Render icons with the transition */}
        {iconOrder.map((index, i) => {
          return (
            <g key={`icon2-${index}`}>
              <image
                href={iconUrls2[index % iconUrls2.length]}
                width="100"
                height="100"
              >
                {pathLengths2.length > 0 && (
                  <>
                    <animateMotion
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                      rotate="auto"
                    >
                      <mpath href={`#path2-${index}`} />
                    </animateMotion>

                    {/* Animate the width */}
                    <animate
                      attributeName="width"
                      values="10;120;40"
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />

                    {/* Animate the height */}
                    <animate
                      attributeName="height"
                      values="10;120;40"
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />

                    {/* Adjust vertical position of the images */}
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values={"0 -5; 0 -60; 0 -20"}
                      keyTimes="0;0.5;1"
                      dur="30s"
                      repeatCount="indefinite"
                      begin={`${i * 3.5 - 45}s`}
                    />
                  </>
                )}
              </image>
            </g>
          );
        })}

        {/* Add logo at the center */}
        <image
          href={Logo}
          width="140"
          height="140"
          x="725"
          y="375"
          className="z-[99999] opacity-100"
          style={{ pointerEvents: "none" }}
        />
      </svg>
      <div className="absolute z-40 left-0 top-20 w-32 h-full bg-gradient-to-r from-[#021734] to-transparent"></div>
    </div>
  );
};

export default AnimatedPath;
