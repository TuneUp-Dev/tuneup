import React, { useRef, useEffect, useState } from "react";
import Code from "../assets/icons/Code_Blue.svg";
import { Link } from "react-router-dom";

const Internship = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Video data
  const videoData = [
    {
      thumbnail:
        "https://imgs.search.brave.com/6noTBEspk4cwnkvTw6tvs2kJUI-fayPq-LV1U1Pk2Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvWW91dHViZS1U/aHVtYm5haWwtVGVt/cGxhdGUtZm9yLUJ1/c2luZXNzLmpwZw",
      gradientText: "Flutter",
      afterGradient: "Development",
      description: "Build cross-platform mobile applications with Flutter.",
      link: "#",
    },

    {
      thumbnail:
        "https://imgs.search.brave.com/S6K6wTm_tURIp-4E3YDEGShGoQkKI8EF45RUrXHi0tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YXR0cmFjdGl2ZS1u/ZXcteW91dHViZS10/aHVtYm5haWwtZGVz/aWduLXRlbXBsYXRl/Xzk0MTgwMi0zNTUx/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
      gradientText: "MERN Stack",
      afterGradient: "Development",
      description:
        "Master full-stack development using MongoDB, Express.js, React.js, and Node.js.",
      link: "#",
      linkText: "Lea",
    },
    {
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
      gradientText: "Digital",
      afterGradient: "Marketing",
      description:
        "Learn strategies to grow businesses online, including SEO, social media, and content marketing.",
      link: "#",
      linkText: "Lea",
    },
    {
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
      gradientText: "UI/UX",
      afterGradient: "Designing",
      description:
        "Design user-friendly interfaces and create seamless user experiences.",
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
    <>
      <div
        id="internship"
        className="px-[16px] pt-24 sm:px-[24px] md:px-[40px] lg:px-[50px] xl:px-[66px]"
      >
        <div className="bg-[#021734] rounded-3xl py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12">
            <div className="w-auto mx-auto flex flex-col lg:flex-row justify-between gap-y-6">
              <div className="pt-2">
                <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-[13px] font-semibold uppercase">
                  Internship
                </span>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white text-[20px] lg:text-[52px] w-[90vw] lg:w-[700px] lg:leading-[60px] mt-4 -mb-1 inter-bold">
                  Unlock your potential with
                  <span className="hidden lg:block"> V-Intern Program</span>
                </p>
                <span className="lg:hidden text-[35px] bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 inter-bold">
                  V-Intern Program
                </span>

                <p className="text-white text-justify text-opacity-70 mt-1 lg:mt-5 w-full lg:w-[68vw] text-[14px] lg:text-[16px]">
                  At TuneUp Technologies, we believe in empowering the next
                  generation of tech enthusiasts with hands-on experience and
                  industry-ready skills. Our Internship Program is designed
                  exclusively for college students eager to dive deep into the
                  world of technology and innovation.
                </p>
              </div>
              <div className="w-full lg:w-[100px] min-h-full flex justify-end gap-x-3 items-end">
                <button
                  onClick={scrollLeft}
                  className="w-10 lg:min-w-12 h-10 lg:min-h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
                >
                  ◀
                </button>
                <button
                  onClick={scrollRight}
                  className="w-10 lg:min-w-12 h-10 lg:min-h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
                >
                  ▶
                </button>
              </div>
            </div>

            {/* Infinite Card Scroller */}
            <div className="relative mt-5 md:mt-7">
              {/* Scroll Container */}
              <div
                ref={scrollerRef}
                className="flex gap-x-8 overflow-x-scroll no-scrollbar cursor-grab snap-mandatory snap-x rounded-lg"
              >
                {/* Card Items */}
                {[...Array(10)].map((_, index) => (
                  <>
                    {videoData.map((data, index) => (
                      <div
                        key={index}
                        className="min-w-full max-w-full md:min-w-[380px] min-h-[430px] max-h-[430px] sm:min-h-[540px] sm:max-h-[540px] md:min-h-[470px] md:max-h-[470px] group bg-blue-50 border-[1px] border-slate-200 border-opacity-90 rounded-lg p-[23px] sm:p-6 xl:p-7 flex flex-col items-center justify-start snap-center"
                      >
                        <div className="relative group">
                          {/* Thumbnail */}
                          <img
                            src={data.thumbnail}
                            alt="Video Thumbnail"
                            className="top-0 left-0 w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-1000 ease-in-out"
                            onClick={() => handlePlayPauseToggle(index)}
                          />
                        </div>
                        <div className="w-full h-full flex flex-col justify-between items-start mt-6">
                          <div className="">
                            <p className="poppins-medium text-[28px] w-full leading-9 flex flex-col justify-start items-start">
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-600 to-sky-600">
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
                            className="text-blue-500 text-[15px] group-hover:underline group-hover:text-[#021734] flex gap-x-3 items-center poppins-medium"
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
        </div>
      </div>
    </>
  );
};

export default Internship;
