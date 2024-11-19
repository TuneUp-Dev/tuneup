import React, { useState } from "react";
import Mute from "../assets/icons/Mute.svg";
import UnMute from "../assets/icons/UnMute.svg";
import LinkedInLogo from "../assets/logos/LinkedIn.png";

const About: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleMuteToggle = () => {
    setIsMuted((prevState) => !prevState);
  };

  // Array of image data for the slider
  const sliderImages = [
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
    { id: 1, src: LinkedInLogo },
  ];

  return (
    <>
      <div className="relative -mt-[723px] z-50 w-full h-screen flex items-center justify-center">
        <div className="relative">
          <video
            className="rounded-t-3xl shadow-[0_-5px_10px_-12px_rgba(0,0,0,0.3)] cursor-pointer group xl:w-[1220px]"
            muted
            loop
            autoPlay
            onClick={handleMuteToggle}
          >
            <source
              src="https://webcdn.synthesia.io/HomeHeroVideos/02.08.24/Alex_NEW_WBHERO_comp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={handleMuteToggle}
            className="absolute top-8 left-8 flex items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white p-[5px] rounded-full hover:bg-opacity-100 transition-all duration-1000 ease-in-out group"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white border border-gray-200 rounded-full transition-all duration-1000 ease-in-out">
              {isMuted ? (
                <img src={UnMute} alt="Mute Icon" />
              ) : (
                <img src={Mute} alt="Unmute Icon" />
              )}
            </div>
            <div
              className="relative overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-in-out"
              style={{ width: "fit-content" }}
            >
              <span className="text-md font-semibold pl-3 pr-4 whitespace-nowrap">
                {isMuted ? "Listen" : "Mute"}
              </span>
            </div>
          </button>
        </div>
        <div className="absolute bottom-[48px] w-full h-[350px] bg-gradient-to-t from-blue-50 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="bg-blue-50 w-full h-[166px] mt-[-50px] pt-5 flex justify-between px-[114px]">
        <h1 className="max-w-[230px] poppins-normal text-blue-950 text-[15px]">
          Trusted by over 50,000 companies of all sizes
        </h1>
        <div className="relative w-full h-20 slider overflow-hidden">
          {/* Moving Image Container */}
          <div className="slider">
            <div className="slide-track">
              {sliderImages.map((image) => (
                <div key={image.id} className={`slide`}>
                  <img
                    src={image.src}
                    className="w-full h-auto brightness-0"
                    alt=""
                  />
                </div>
              ))}
              {sliderImages.map((image) => (
                <div key={image.id + 10} className={`slide`}>
                  <img
                    src={image.src}
                    className="w-full h-auto brightness-0"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Shadow Fading on Left and Right Sides */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};

export default About;
