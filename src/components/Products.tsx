import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code.svg";
import PlayIcon from "../assets/icons/Play.svg";
import { useState, useRef } from "react";

const Products = () => {
  // Video and Thumbnail Data
  const videoData = [
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/6noTBEspk4cwnkvTw6tvs2kJUI-fayPq-LV1U1Pk2Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvWW91dHViZS1U/aHVtYm5haWwtVGVt/cGxhdGUtZm9yLUJ1/c2luZXNzLmpwZw",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3191420/3191420-sd_640_360_25fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/S6K6wTm_tURIp-4E3YDEGShGoQkKI8EF45RUrXHi0tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YXR0cmFjdGl2ZS1u/ZXcteW91dHViZS10/aHVtYm5haWwtZGVz/aWduLXRlbXBsYXRl/Xzk0MTgwMi0zNTUx/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/4043936/4043936-sd_640_360_24fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
    },
  ];

  // States to track play/pause for each video
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoData.length).fill(false)
  );

  // Refs for each video
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlayPauseToggle = (index: number) => {
    const updatedPlaying = [...isPlaying];

    if (updatedPlaying[index]) {
      videoRefs.current[index]?.pause();
    } else {
      // Pause other videos
      videoRefs.current.forEach((video, idx) => {
        if (idx !== index) video?.pause();
      });

      updatedPlaying.forEach((_, idx) => {
        if (idx !== index) updatedPlaying[idx] = false;
      });

      videoRefs.current[index]?.play();
    }

    updatedPlaying[index] = !updatedPlaying[index];
    setIsPlaying(updatedPlaying);
  };

  return (
    <div className="relative w-full h-auto">
      {/* Container */}
      <div className="w-[1320px] my-28 overflow-hidden h-[700px] mx-auto rounded-[30px] relative">
        <img
          src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66017f425a91654f12e4b20c_template-section-bg.webp"
          alt=""
          className="background-cover-image"
          style={{ filter: "hue-rotate(-5deg) saturate(1.3)" }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start p-14 bg-black bg-opacity-50">
          <span className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-lg px-3 py-1.5 mt-8 text-white text-[13px] font-semibold uppercase">
            Templates
          </span>
          <p className="text-white text-[55px] w-[750px] font-medium text-center mx-auto mt-5 leading-[60px]">
            Get started in minutes with 200+ free video templates
          </p>
          <Button
            color="primary"
            className="rounded-[9px] w-[200px] min-h-[50px] mt-10 border-[2px] border-slate-200 text-blue-950 text-[16px] bg-white"
          >
            View all Products
            <img
              className="w-7 -ml-3 brightness-0 animate-left-right"
              src={Code}
              alt=""
            />
          </Button>

          {/* Video List */}
          <div className="w-full h-full mt-16 flex justify-between items-center gap-x-8">
            {videoData.map((data, index) => (
              <div className="w-full h-full" key={index}>
                <div className="relative group">
                  {/* Thumbnail */}
                  {!isPlaying[index] && (
                    <img
                      src={data.thumbnail}
                      alt="Video Thumbnail"
                      className="top-0 left-0 w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-1000 ease-in-out"
                      onClick={() => handlePlayPauseToggle(index)}
                    />
                  )}

                  {/* Video */}
                  <video
                    ref={(el) => (videoRefs.current[index] = el!)}
                    className="rounded-xl w-full cursor-pointer transition-all duration-1000 ease-in-out"
                    onClick={() => handlePlayPauseToggle(index)}
                    loop
                    muted
                    style={{ display: isPlaying[index] ? "block" : "none" }}
                  >
                    <source src={data.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button */}
                  {!isPlaying[index] && (
                    <button
                      onClick={() => handlePlayPauseToggle(index)}
                      className="absolute top-[64px] left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white p-[3px] rounded-full hover:bg-opacity-100 transition-all duration-1000 ease-in-out group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 pl-1 border border-gray-200 rounded-full transition-all duration-1000 ease-in-out">
                        <img src={PlayIcon} alt="Play" className="w-5 h-5" />
                      </div>
                      <div
                        className="relative overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-in-out"
                        style={{ width: "fit-content" }}
                      >
                        <span className="text-md font-semibold pl-3 pr-4 whitespace-nowrap">
                          Click to play
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
