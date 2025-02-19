import React, { useState } from "react";
import Code from "../assets/icons/Code_Blue.svg";
import Close from "../assets/icons/close.svg";
import { Button } from "@nextui-org/react";

// Popup Form Component
const InternshipForm = ({ onClose, defaultCourse }) => (
  <div className="fixed inset-0 z-[99999] flex flex-col sm:flex-row items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-lg relative w-[90vw] lg:w-[800px] max-h-[88%] lg:max-h-[72vh] h-auto lg:min-h-auto lg:h-auto">
      {/* Close Button */}
      <button
        className="absolute top-2.5 right-2.5 lg:top-4 lg:right-5 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
        onClick={onClose}
      >
        <img src={Close} className="unselect w-3" alt="Close" />
      </button>

      {/* Content Container */}
      <div className="w-full h-full rounded-t-2xl rounded-b-lg flex flex-col sm:flex-row justify-between items-start overflow-y-auto scroll-smooth transition-all duration-500 ease-linear pt-2 gap-y-10 gap-x-6">
        {/* Right Side: Registration Form */}
        <form className="w-full flex flex-col gap-y-3 p-2">
          <span className="flex flex-col md:flex-row justify-center items-center gap-x-7 space-y-2 md:space-y-0">
            <div className="w-full flex flex-col gap-y-1">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
              />
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
              />
            </div>
          </span>
          <span className="flex flex-col md:flex-row justify-center items-center gap-x-7 space-y-2 md:space-y-0">
            <div className="w-full flex flex-col gap-y-1">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
              />
            </div>
            <div className="w-full flex flex-col gap-y-1">
              <label
                htmlFor="course"
                className="text-sm font-semibold text-gray-700"
              >
                Course
              </label>
              <input
                id="course"
                type="text"
                placeholder="Course"
                value={defaultCourse}
                readOnly
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
              />
            </div>
          </span>
          <div className="flex flex-col gap-y-1">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write message here"
              className="px-3 lg:px-4 py-2 lg:py-3 h-[100px] lg:h-[130px] text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-3 py-3 bg-gradient-to-r text-[17px] sm:text-[15px] lg:text-[17px] from-blue-500 via-[#021734] to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-500 ease-linear"
          >
            Submit
            <img
              className="unselect w-7 -ml-3 animate-left-right brightness-200 saturate-0 contrast-[200%]"
              src={Code}
              alt="Code Icon"
            />
          </Button>
        </form>
      </div>
    </div>
  </div>
);

// Internship Component
const Internship = ({ hapticFeedback }) => {
  const videoData = [
    {
      thumbnail:
        "https://res.cloudinary.com/dwqiivnhx/image/upload/v1739959981/dyk6tehq0wdiqlmbv6ow.png",
      gradientText: "Flutter ",
      afterGradient: "Development",
      description:
        "Build stunning mobile apps that work seamlessly on every device. Start your Flutter journey with us today!",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dwqiivnhx/image/upload/v1739959982/ve5nkeghokq34suxosqj.png",
      gradientText: "MERN Stack ",
      afterGradient: "Development",
      description:
        "Master full-stack development and create dynamic web applications from scratch. Your coding adventure begins here!",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dwqiivnhx/image/upload/v1739959982/qqjaib5kcuqhmh822wad.png",
      gradientText: "UI/UX ",
      afterGradient: "Designing",
      description:
        "Design experiences, not just interfaces. Join us to craft intuitive and engaging designs!",
    },
    {
      thumbnail:
        "https://res.cloudinary.com/dwqiivnhx/image/upload/v1739959982/hy6mm4viwtcc2u3y3kbm.png",
      gradientText: "Digital ",
      afterGradient: "Marketing",
      description:
        "Unlock the power of digital growth. Learn strategies to make brands shine online!",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleRegisterClick = (course) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div id="internship" className="pt-24 pb-2">
        <div className="px-5 sm:px-6 md:px-10 lg:px-16 pt-12 pb-16 lg:py-16 w-full bg-[#021734] hover:shadow-[0px_0px_0px_5px_#2c4464] hover:scale-[0.9935] rounded-[40px] lg:rounded-[70px] transform transition-all ease-linear duration-300">
          <div className="text-center mb-8">
            <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-sm font-semibold uppercase">
              Internship
            </span>
            <h2 className="bg-clip-text w-[250px] lg:w-[600px] lg:h-28 mx-auto text-transparent bg-gradient-to-r from-white via-blue-100 to-white text-xl md:text-3xl lg:text-5xl font-bold mt-7">
              Unlock your potential with V-Intern Program
            </h2>
            <p className="text-white text-opacity-70 mt-2 lg:mt-0 text-sm md:text-md max-w-2xl mx-auto">
              At TuneUp Technologies, we believe in empowering the next
              generation of tech enthusiasts with hands-on experience and
              industry-ready skills.
            </p>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-6">
            {videoData.map((data, index) => (
              <div
                key={index}
                className="bg-white border rounded-2xl hover:shadow-[5px_5px_0px_3px_#2c4464] p-4 flex flex-col group transition-all transform ease-linear duration-200"
              >
                <img
                  src={data.thumbnail}
                  alt="Video Thumbnail"
                  className="w-full h-auto object-cover rounded-lg unselect"
                />
                <h3 className="text-lg font-semibold mt-4">
                  {data.gradientText}
                  {data.afterGradient}
                </h3>
                <p className="text-sm text-gray-600 mb-4 text-justify">
                  {data.description}
                </p>
                <button
                  onClick={() => {
                    handleRegisterClick(
                      `${data.gradientText.trim()} ${data.afterGradient.trim()}`
                    );
                    hapticFeedback();
                  }}
                  className="mt-auto inline-flex items-center font-medium text-[15px] text-blue-500 hover:opacity-90 cursor-pointer group"
                >
                  Register Now
                  <img
                    src={Code}
                    alt="Code Icon"
                    className="w-5 group-hover:ml-1.5 hover:opacity-90 transform transition-all ease-linear duration-200"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isFormOpen && (
        <InternshipForm
          onClose={handleCloseForm}
          defaultCourse={selectedCourse}
        />
      )}
    </>
  );
};

export default Internship;
