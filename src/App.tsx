import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import { Spinner } from "@nextui-org/react";
import Loading from "./Loading";

function App() {
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setIsVideoPlayed(true);
      sessionStorage.setItem("hasLoaded", "true");
    };

    const alreadyLoaded = sessionStorage.getItem("hasLoaded");

    if (alreadyLoaded) {
      setIsVideoPlayed(true);
      setIsLoading(true);
      const spinnerTimeout = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(spinnerTimeout);
    } else if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <>
      {!isVideoPlayed ? (
        <Loading videoRef={videoRef} />
      ) : isLoading ? (
        <div className="fixed z-[999999999] w-full h-screen flex justify-center items-center bg-[#d7e1ef]">
          <Spinner size="md" color="primary" className="brightness-[40%]" />
        </div>
      ) : (
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
