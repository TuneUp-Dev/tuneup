import React, { useState, useEffect } from "react";

const Loading = ({ videoRef }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMuteToggle = () => {
    setIsMuted((prevState) => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="fixed w-full h-full bg-black flex justify-center items-center overflow-hidden">
          <video
            ref={videoRef}
            className="block md:hidden w-auto h-full max-h-full object-cover cursor-pointer"
            autoPlay
            muted={isMuted}
            onClick={handleMuteToggle}
          >
            <source
              src="https://res.cloudinary.com/dwqiivnhx/video/upload/v1735751268/okpeoivyndeyldxkgxha.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="fixed w-full h-full bg-black flex justify-center items-center">
          <video
            ref={videoRef}
            className="hidden md:block w-full h-auto max-h-full object-cover cursor-pointer"
            autoPlay
            muted={isMuted}
            onClick={handleMuteToggle}
          >
            <source
              src="https://res.cloudinary.com/dwqiivnhx/video/upload/v1735649009/keovvbakhnlhuwyfqolv.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </>
    );
  }
};

export default Loading;
