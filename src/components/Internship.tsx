import React, { useRef, useState } from "react";
import Code from "../assets/icons/Code_Blue.svg";
import { Link } from "react-router-dom";

const Internship = ({ hapticFeedback }) => {
  // Video data
  const videoData = [
    {
      thumbnail:
        "https://imgs.search.brave.com/6noTBEspk4cwnkvTw6tvs2kJUI-fayPq-LV1U1Pk2Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvWW91dHViZS1U/aHVtYm5haWwtVGVt/cGxhdGUtZm9yLUJ1/c2luZXNzLmpwZw",
      gradientText: "Flutter",
      afterGradient: "Development",
      description:
        "Build stunning mobile apps that work seamlessly on every device. Start your Flutter journey with us today!",
      link: "#",
    },

    {
      thumbnail:
        "https://imgs.search.brave.com/S6K6wTm_tURIp-4E3YDEGShGoQkKI8EF45RUrXHi0tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YXR0cmFjdGl2ZS1u/ZXcteW91dHViZS10/aHVtYm5haWwtZGVz/aWduLXRlbXBsYXRl/Xzk0MTgwMi0zNTUx/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
      gradientText: "MERN Stack",
      afterGradient: "Development",
      description:
        "Master full-stack development and create dynamic web applications from scratch. Your coding adventure begins here!",
      link: "#",
      linkText: "Lea",
    },
    {
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
      gradientText: "UI/UX",
      afterGradient: "Designing",
      description:
        "Design experiences, not just interfaces. Join us to craft intuitive and engaging designs!",
      link: "#",
      linkText: "Lea",
    },
    {
      thumbnail:
        "https://imgs.search.brave.com/BgCQBKiXf9HRy_UdSx-UwllEKoeXlkBKmPch_pAsb9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9oNmdvbzln/dzFoaDYvNjdrZVVo/UFhvY0p5dXd5QnJ3/bm1Qcy9lZmRlYzll/NTMzNzkyZjEyMzY0/NzAxM2FkZWJmMDU1/ZC9Zb3VUdWJlLVRo/dW1ibmFpbC1TaXpl/LTAzLmpwZz93PTE2/MDAmaD05MDAmZmw9/cHJvZ3Jlc3NpdmUm/cT03MCZmbT1qcGc",
      gradientText: "Digital",
      afterGradient: "Marketing",
      description:
        "Unlock the power of digital growth. Learn strategies to make brands shine online!",
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

  return (
    <>
      <div
        id="internship"
        className="px-[16px] pt-24 sm:px-[24px] md:px-[40px] lg:px-[50px] xl:px-[66px]"
      >
        <div className="bg-[#021734] rounded-3xl py-8 sm:py-10 md:py-12 lg:py-14">
          <div className="mx-auto w-full px-4 md:px-8 lg:px-10 xl:px-12">
            <div className="w-auto mx-auto flex flex-col lg:flex-row justify-between gap-y-6">
              <div className="pt-2 text-center md:text-start">
                <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-[13px] font-semibold uppercase">
                  Internship
                </span>
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white text-[15px] sm:text-[20px] lg:text-[52px] sm:w-[90vw] lg:w-[700px] lg:leading-[60px] mt-4 -mb-1 inter-bold">
                  Unlock your potential with
                  <span className="hidden lg:block"> V-Intern Program</span>
                </p>
                <span className="lg:hidden text-[32px] sm:text-[50px] md:text-[35px] bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 inter-bold">
                  V-Intern Program
                </span>

                <p className="text-white text-justify text-opacity-60 mt-5 md:mt-3 lg:mt-5 w-full lg:w-[68vw] text-[12px] sm:text-[14px] lg:text-[16px]">
                  At TuneUp Technologies, we believe in empowering the next
                  generation of tech enthusiasts with hands-on experience and
                  industry-ready skills. Our Internship Program is designed
                  exclusively for college students eager to dive deep into the
                  world of technology and innovation.
                </p>
              </div>
              {/* <div className="hidden md:flex w-full lg:w-[100px] min-h-full justify-end gap-x-3 items-end">
                <button
                  onClick={prev}
                  className="w-10 lg:min-w-12 h-10 lg:min-h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
                >
                  ◀
                </button>
                <button
                  onClick={next}
                  className="w-10 lg:min-w-12 h-10 lg:min-h-12 bg-blue-50 border-[1px] border-slate-200 text-black text-center rounded-full shadow-md"
                >
                  ▶
                </button>
              </div> */}
            </div>

            {/* Infinite Card Scroller */}
            <div className="relative mt-8 sm:mt-10 md:mt-10">
              {/* Scroll Container */}
              <div className="flex gap-x-7 overflow-x-scroll overflow-hidden custom-scrollbar snap-mandatory snap-x pb-5 rounded-lg">
                {/* Card Items */}
                {[...Array(1)].map((_, index) => (
                  <>
                    {videoData.map((data, index) => (
                      <div
                        key={index}
                        className="min-w-full max-w-full md:min-w-[380px] min-h-[430px] max-h-[430px] sm:min-h-[540px] sm:max-h-[540px] md:min-h-[450px] md:max-h-[450px] lg:min-h-[440px] lg:max-h-[440px] xl:min-h-[460px] xl:max-h-[460px] group bg-blue-50 border-[1px] border-slate-200 border-opacity-90 rounded-lg p-[23px] sm:p-6 xl:p-7 flex flex-col items-center justify-start snap-center"
                      >
                        <div className="relative group">
                          {/* Thumbnail */}
                          <img
                            src={data.thumbnail}
                            alt="Video Thumbnail"
                            className="unselect top-0 left-0 w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-1000 ease-in-out"
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
                            onClick={hapticFeedback}
                            to={data.link}
                            className="text-blue-500 text-[15px] group-hover:underline group-hover:text-[#021734] flex gap-x-3 items-center poppins-medium transition-all duration-500 ease-in-out"
                          >
                            Register Now
                            <img
                              className="unselect w-7 -ml-3 group-hover:brightness-0 group-hover:animate-left-right transition-all duration-500 ease-in-out"
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
