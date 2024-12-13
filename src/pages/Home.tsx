import React, { useRef, useEffect, useState } from "react";
import AnimatedPath from "../components/Animation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Services from "../components/Services";
import WCU from "../components/WCU";

const Home = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [tailOffset, setTailOffset] = useState(0);
  const [tailLength, setTailLength] = useState(150);

  const animationFrameRef = useRef<number | null>(null);

  // Initialize the logo position at the start of the path from sessionStorage or calculate it
  const initializeIconPosition = () => {
    const storedIconPosition = sessionStorage.getItem("iconPosition");
    if (storedIconPosition) {
      setIconPosition(JSON.parse(storedIconPosition));
    } else {
      if (pathRef.current) {
        const startPoint = pathRef.current.getPointAtLength(0);
        setIconPosition({ x: startPoint.x, y: startPoint.y });
      }
    }

    const storedTailOffset = sessionStorage.getItem("tailOffset");
    if (storedTailOffset) {
      setTailOffset(Number(storedTailOffset));
    }

    const storedTailLength = sessionStorage.getItem("tailLength");
    if (storedTailLength) {
      setTailLength(Number(storedTailLength));
    }
  };

  // Store icon position and tail data in sessionStorage
  const storePositionData = () => {
    sessionStorage.setItem("iconPosition", JSON.stringify(iconPosition));
    sessionStorage.setItem("tailOffset", String(tailOffset));
    sessionStorage.setItem("tailLength", String(tailLength));
  };

  const handleScroll = () => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const pathBoundingBox = pathRef.current.getBoundingClientRect();
      const middleOfScreen = window.innerHeight / 2;

      const relativeMiddle = middleOfScreen - pathBoundingBox.top;

      let progressRatio = relativeMiddle / pathBoundingBox.height;

      // Handle case where the scroll is beyond the start of the path (before it starts)
      if (relativeMiddle < 0) {
        progressRatio = 0;
      }

      // Handle case where the scroll is beyond the end of the path (after it ends)
      if (relativeMiddle > pathBoundingBox.height) {
        progressRatio = 1;
      }

      const currentPoint = pathRef.current.getPointAtLength(
        progressRatio * pathLength
      );

      const newIconPosition = { x: currentPoint.x, y: currentPoint.y };
      setIconPosition(newIconPosition);

      const startPoint = pathRef.current.getPointAtLength(0);
      const distance = Math.sqrt(
        Math.pow(currentPoint.x - startPoint.x, 2) +
          Math.pow(currentPoint.y - startPoint.y, 2)
      );

      const dynamicTailLength = Math.min(150, Math.max(0, distance - 10));
      setTailLength(dynamicTailLength);

      const offset = progressRatio * pathLength - dynamicTailLength;
      setTailOffset(Math.max(offset, 0));

      // Store updated position and tail data in sessionStorage
      storePositionData();
    }
  };

  const optimizedHandleScroll = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    initializeIconPosition(); // Set the initial position of the logo from sessionStorage
    window.addEventListener("scroll", optimizedHandleScroll);
    handleScroll(); // Initialize scroll on mount

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="max-w-full h-auto scroll-smooth transition-all duration-300 ease-in-out">
        <Greeting />
        <Navbar />
        <Header />
        <Services
          pathRef={pathRef}
          iconPosition={iconPosition}
          tailOffset={tailOffset}
          tailLength={tailLength}
        />
        <WCU />
        <Products />
        <Contact />
        <AnimatedPath />
        <Footer />
      </div>
    </>
  );
};

export default Home;
