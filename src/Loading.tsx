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
        {/* Mobile View */}
        <div
          onClick={handleMuteToggle}
          className="fixed w-full h-full bg-black flex justify-center items-center overflow-hidden"
        >
          <div className="relative block md:hidden w-full h-auto cursor-pointer">
            <video
              ref={videoRef}
              className="w-full h-auto object-cover unselect"
              autoPlay
              loop
              muted={isMuted}
            >
              <source
                src="https://res.cloudinary.com/dwqiivnhx/video/upload/v1735751268/okpeoivyndeyldxkgxha.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* Desktop View */}
        <div
          onClick={handleMuteToggle}
          className="fixed w-full h-full cursor-pointer bg-black flex justify-center items-center"
        >
          <video
            ref={videoRef}
            className="hidden md:block w-full h-auto max-h-full object-cover unselect"
            autoPlay
            muted={isMuted}
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
