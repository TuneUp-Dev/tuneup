import React, { useRef, useEffect, useState } from "react";
import AnimatedPath from "../components/Animation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WCU from "../components/WCU";
import Internship from "../components/Internship";
import Services from "../components/Services";
import About from "../components/About";

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

      if (relativeMiddle < 0) {
        progressRatio = 0;
      }

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

  // Store scroll position in sessionStorage
  const storeScrollPosition = () => {
    sessionStorage.setItem("scrollPosition", String(window.scrollY));
  };

  // Restore scroll position with smooth scrolling
  const restoreScrollPosition = () => {
    const storedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo({
        top: Number(storedScrollPosition),
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    initializeIconPosition();
    restoreScrollPosition();
    window.addEventListener("scroll", optimizedHandleScroll);
    window.addEventListener("scroll", storeScrollPosition);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
      window.removeEventListener("scroll", storeScrollPosition);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Haptic Feedback
  const playAudioWithVibration = (audioUrl: string, volume: number = 1) => {
    const audio = new Audio(audioUrl);
    audio.load();
    audio.volume = volume;
    audio.play();

    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  const hapticFeedback = () => {
    const storedAudio = localStorage.getItem("hapticFeedbackAudio");
    const audioUrl =
      storedAudio ||
      "https://res.cloudinary.com/dwqiivnhx/video/upload/v1735754240/iknggfs6ed1jir5cv5bq.mp3";
    playAudioWithVibration(audioUrl);
  };

  const logoFeedback = () => {
    const storedAudio = localStorage.getItem("logoFeedbackAudio");
    const audioUrl =
      storedAudio ||
      "https://res.cloudinary.com/dwqiivnhx/video/upload/v1735754823/lmuj0al8mbadtaaacgoo.wav";
    playAudioWithVibration(audioUrl, 0.5);
  };

  const linkFeedback = () => {
    const storedAudio = localStorage.getItem("linkFeedbackAudio");
    const audioUrl =
      storedAudio ||
      "https://res.cloudinary.com/dwqiivnhx/video/upload/v1735754239/q0buu5k7pssyejpomxhd.mp3";
    playAudioWithVibration(audioUrl, 0.5);
  };

  return (
    <>
      <div
        id="top"
        className="max-w-full h-auto scroll-smooth transition-all duration-500 ease-in-out"
      >
        <Navbar hapticFeedback={hapticFeedback} logoFeedback={logoFeedback} />
        <Header hapticFeedback={hapticFeedback} />
        <About linkFeedback={linkFeedback} />
        <Services
          pathRef={pathRef}
          iconPosition={iconPosition}
          tailOffset={tailOffset}
          tailLength={tailLength}
        />
        <WCU />
        <Internship hapticFeedback={hapticFeedback} />
        <Contact hapticFeedback={hapticFeedback} linkFeedback={linkFeedback} />
        <AnimatedPath />
        <Footer />
      </div>
    </>
  );
};

export default Home;
