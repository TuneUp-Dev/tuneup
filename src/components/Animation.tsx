import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/icons/TuneUp_Icon.png";
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

const pathData = [
  "M0,0 C400,504 1200,504 1590,0",
  "M0,100 C400,476 1200,476 1590,100",
  "M0,200 C400,448 1200,448 1590,200",
  "M0,300 C400,420 1200,420 1590,300",
  "M0,370 C400,402 1200,402 1590,370",
  "M0,430 C400,387 1200,387 1590,430",
  "M0,500 C400,369 1200,369 1590,500",
  "M0,600 C400,341 1200,341 1590,600",
  "M0,700 C400,313 1200,313 1590,700",
  "M0,800 C400,285 1200,285 1590,800",
];

const iconUrls = [
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

const AnimatedPath: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLengths, setPathLengths] = useState<number[]>([]);

  useEffect(() => {
    if (svgRef.current) {
      const lengths = pathData.map((_, index) => {
        const path = svgRef.current?.querySelector(
          `#path-${index}`
        ) as SVGPathElement;
        return path?.getTotalLength() || 0;
      });
      setPathLengths(lengths);
    }
  }, []);

  return (
    <div className="animation-container bg-[#021734] min-h-[1000px] relative">
      <p className="text-[58px] text-white w-[700px] mx-auto text-center leading-[60px] pt-36 inter-medium">
        Transforming Technology into Possibilities
      </p>
      <p className="w-[700px] text-center mt-10 text-white mx-auto text-opacity-70">
        At TuneUp Technologies, what goes in as technology comes out as
        opportunity, success, and growth. Together, let’s redefine what’s
        possible in the digital world. Innovation starts here.
      </p>
      <svg
        ref={svgRef}
        width="100%"
        height="1000px"
        viewBox="0 0 1590 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.95] -mt-44"
      >
        {/* Define gradients */}
        <defs>
          {pathData.map((_, index) => (
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

          {/* Shadow filter for the logo */}
          <filter
            id="shadow-filter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="25"
              floodColor="#000000"
              floodOpacity="1"
            />
          </filter>
        </defs>

        {/* Draw the paths first */}
        {pathData.map((path, index) => (
          <path
            key={`path-${index}`}
            id={`path-${index}`}
            d={path}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2.5"
          />
        ))}

        {/* Render icons on top of paths with a gap */}
        {pathData.map((_, index) => (
          <g key={`icon-${index}`}>
            <image
              href={iconUrls[index % iconUrls.length]}
              width="90"
              height="90"
            >
              {pathLengths.length > 0 && (
                <>
                  <animateMotion
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                    rotate="auto"
                  >
                    <mpath href={`#path-${index}`} />
                  </animateMotion>

                  {/* Animate the image width */}
                  <animate
                    attributeName="width"
                    values="90;30;90"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />

                  {/* Animate the height synchronously */}
                  <animate
                    attributeName="height"
                    values="90;30;90"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />

                  {/* Adjust vertical position of the images */}
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 -45; 0 -15; 0 -45"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />
                </>
              )}
            </image>
          </g>
        ))}

        {/* Add logo at the center */}
        <image
          href={Logo}
          width="120"
          height="120"
          x="725"
          y="336"
          className="z-[99999]"
          style={{ pointerEvents: "none" }}
          filter="url(#shadow-filter)"
        />
      </svg>
      <div className="fixed bg-red-900 w-full h-screen flex justify-center items-center">
        <img src={Logo} width="100px" height="100px" alt="" />
      </div>
    </div>
  );
};

export default AnimatedPath;
