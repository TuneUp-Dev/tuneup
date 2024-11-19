import React, { useRef, useEffect, useState } from "react";
import PlayIcon from "../assets/icons/Play.svg";
import Code from "../assets/icons/Code_Blue.svg";
import { Link } from "react-router-dom";

const Courses = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Video data
  const videoData = [
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/6noTBEspk4cwnkvTw6tvs2kJUI-fayPq-LV1U1Pk2Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvWW91dHViZS1U/aHVtYm5haWwtVGVt/cGxhdGUtZm9yLUJ1/c2luZXNzLmpwZw",
      beforeGradient: "",
      gradientText: "Learning & Development",
      afterGradient: "videos that engage.",
      description:
        "lorem uiuiunidfn dbdubduybdid  d dni dnbivdbduys dchvduyvdfubydfy dvysfayvtafcatys",
      link: "#",
    },

    {
      videoSrc:
        "https://videos.pexels.com/video-files/3191420/3191420-sd_640_360_25fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/S6K6wTm_tURIp-4E3YDEGShGoQkKI8EF45RUrXHi0tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YXR0cmFjdGl2ZS1u/ZXcteW91dHViZS10/aHVtYm5haWwtZGVz/aWduLXRlbXBsYXRl/Xzk0MTgwMi0zNTUx/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
      beforeGradient: "",
      gradientText: "Learning & Development",
      afterGradient: "videos that engage.",
      description:
        "lorem uiuiunidfn dbdubduybdid  d dni dnbivdbduys dchvduyvdfubydfy dvysfayvtafcatys",
      link: "#",
      linkText: "Lea",
    },

    {
      videoSrc:
        "https://videos.pexels.com/video-files/4043936/4043936-sd_640_360_24fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
      beforeGradient: "",
      gradientText: "Learning & Development",
      afterGradient: "videos that engage.",
      description:
        "lorem uiuiunidfn dbdubduybdid  d dni dnbivdbduys dchvduyvdfubydfy dvysfayvtafcatys",
      link: "#",
      linkText: "Lea",
    },
  ];

  // States to track play/pause for each video
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoData.length).fill(false)
  );

  // Refs for each video
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  // Handle play/pause toggle for each video
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

  // Manual scroll handlers
  const scrollLeft = () => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const cardWidth = scroller.children[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(scroller).gap || "0"); // Get the gap between cards
      const scrollAmount = cardWidth + gap;

      // Calculate the new scroll position to align with the previous card
      const newScrollPosition =
        Math.floor(scroller.scrollLeft / scrollAmount) * scrollAmount -
        scrollAmount;

      scroller.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;
      const cardWidth = scroller.children[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(scroller).gap || "0"); // Get the gap between cards
      const scrollAmount = cardWidth + gap;

      // Calculate the new scroll position to align with the next card
      const newScrollPosition =
        Math.ceil(scroller.scrollLeft / scrollAmount) * scrollAmount +
        scrollAmount;

      scroller.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Drag-to-scroll functionality
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
      scroller.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroller.offsetLeft;
      const walk = x - startX; // Distance dragged
      scroller.scrollLeft = scrollLeft - walk;
    };

    const onMouseUp = () => {
      isDragging = false;
      scroller.style.cursor = "grab";
    };

    scroller.addEventListener("mousedown", onMouseDown);
    scroller.addEventListener("mousemove", onMouseMove);
    scroller.addEventListener("mouseup", onMouseUp);
    scroller.addEventListener("mouseleave", onMouseUp);

    return () => {
      scroller.removeEventListener("mousedown", onMouseDown);
      scroller.removeEventListener("mousemove", onMouseMove);
      scroller.removeEventListener("mouseup", onMouseUp);
      scroller.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  return (
    <div className="w-full h-auto mt-24">
      <div className="w-[1200px] mx-auto flex justify-between">
        <div className="pt-2">
          <span className="bg-slate-100 rounded-lg px-3 py-2 text-blue-500 text-[13px] font-semibold uppercase">
            Courses
          </span>
          <p className="text-[52px] leading-[60px] mt-4 inter-bold">
            Used by 50,000+ teams who create videos at scale
          </p>
        </div>
        <div className="w-[400px] min-h-full flex justify-end gap-x-3 items-end">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
          >
            ◀
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Infinite Card Scroller */}
      <div className="relative mt-7">
        {/* Scroll Container */}
        <div
          ref={scrollerRef}
          className="flex gap-x-8 overflow-x-scroll no-scrollbar px-4 py-6 cursor-grab"
        >
          {/* Card Items */}
          {[...Array(10)].map((_, index) => (
            <>
              {videoData.map((data, index) => (
                <div
                  key={index}
                  className="min-w-[430px] min-h-[470px] group bg-blue-50 border-[1px] border-slate-200 border-opacity-90 rounded-lg p-7 flex flex-col items-center justify-start"
                >
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
                        className="absolute top-[54px] left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white p-[3px] rounded-full hover:bg-opacity-100 transition-all duration-1000 ease-in-out group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-white pl-1 border border-gray-200 rounded-full transition-all duration-1000 ease-in-out">
                          <img
                            src={PlayIcon}
                            alt="Play"
                            className="w-5 h-5 brightness-0"
                          />
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
                  <div className="w-full h-full flex flex-col justify-between items-start mt-6">
                    <div className="">
                      <p className="poppins-medium text-[28px] w-full leading-9 flex flex-col justify-start items-start">
                        {data.beforeGradient}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
                          {data.gradientText}
                        </span>
                        {data.afterGradient}
                      </p>
                      <p className="inter-normal text-slate-800 text-[15px] mt-2 text-justify">
                        {data.description}
                      </p>
                    </div>
                    <Link
                      to={data.link}
                      className="text-blue-500 text-[15px] group-hover:underline group-hover:text-black flex gap-x-3 items-center poppins-medium"
                    >
                      Learn more
                      <img
                        className="w-7 -ml-3 group-hover:brightness-0 group-hover:animate-left-right"
                        src={Code}
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
