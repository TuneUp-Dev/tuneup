import { Button } from "antd";
import React, { useState } from "react";
import Code from "../assets/icons/Code_Blue.svg";

// Popup Form Component
const InternshipForm = ({ onClose, defaultCourse }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4 sm:px-6">
    <div className="bg-white rounded-lg p-6 w-full max-w-md sm:max-w-lg lg:max-w-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-center">Internship Registration</h2>
      <form>
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input type="text" className="w-full mt-1 border rounded-md p-2" />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email ID:</span>
          <input type="email" className="w-full mt-1 border rounded-md p-2" />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Mobile No:</span>
          <input type="tel" className="w-full mt-1 border rounded-md p-2" />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">College Name:</span>
          <input type="text" className="w-full mt-1 border rounded-md p-2" />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Location:</span>
          <input type="text" className="w-full mt-1 border rounded-md p-2" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Course:</span>
          <input
            type="text"
            className="w-full mt-1 border rounded-md p-2"
            value={defaultCourse}
            readOnly
          />
        </label>
        <div className="flex justify-center sm:justify-end gap-2 mt-4">
          <Button
            onClick={onClose}
            className="bg-white border-[1.5px] py-2 px-4 border-slate-200 rounded-lg text-[13.5px] w-[120px] lg:w-[160px]"
          >
            Cancel
            <img
              className="unselect w-5 -ml-2 brightness-0 animate-left-right"
              src={Code}
              alt="Code Icon"
            />
          </Button>
          <Button className="bg-blue-500 text-white border-[1.5px] py-2 px-4 border-slate-200 rounded-lg text-[13.5px] w-[120px] lg:w-[160px]">
            Submit
            <img
              className="unselect w-5 -ml-2 brightness-0 animate-left-right"
              src={Code}
              alt="Code Icon"
            />
          </Button>
        </div>
      </form>
    </div>
  </div>
);

// Internship Component
const Internship = () => {
  const videoData = [
    {
      thumbnail: "https://storage.cloud.google.com/tuneup-bucket/5467426_1720.jpg",
      gradientText: "Flutter ",
      afterGradient: "Development",
      description:
        "Build stunning mobile apps that work seamlessly on every device. Start your Flutter journey with us today!",
    },
    {
      thumbnail: "https://storage.cloud.google.com/tuneup-bucket/1687.jpg",
      gradientText: "MERN Stack ",
      afterGradient: "Development",
      description:
        "Master full-stack development and create dynamic web applications from scratch. Your coding adventure begins here!",
    },
    {
      thumbnail: "https://storage.cloud.google.com/tuneup-bucket/16678925_5726840.jpg",
      gradientText: "UI/UX ",
      afterGradient: "Designing",
      description:
        "Design experiences, not just interfaces. Join us to craft intuitive and engaging designs!",
    },
    {
      thumbnail: "https://storage.cloud.google.com/tuneup-bucket/5467432_1726.jpg",
      gradientText: "Digital ",
      afterGradient: "Marketing",
      description:
        "Unlock the power of digital growth. Learn strategies to make brands shine online!",
    },
  ];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleRegisterClick = (course: string) => {
    setSelectedCourse(course);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedCourse("");
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-[#021734] rounded-3xl">
        <div className="text-center mb-8">
          <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-sm font-semibold uppercase">
            Internship
          </span>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white text-xl md:text-3xl lg:text-5xl font-bold mt-4">
            Unlock your potential with V-Intern Program
          </h2>
          <p className="text-white text-opacity-70 mt-4 text-sm md:text-md lg:text-lg max-w-2xl mx-auto">
            At TuneUp Technologies, we believe in empowering the next generation of tech enthusiasts with hands-on experience and industry-ready skills.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoData.map((data, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={data.thumbnail}
                alt="Video Thumbnail"
                className="w-full h-[180px] object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">
                {data.gradientText}
                {data.afterGradient}
              </h3>
              <p className="text-sm text-gray-600 mb-4 text-justify">
                {data.description}
              </p>
              <button
                onClick={() => handleRegisterClick(data.gradientText.trim())}
                className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Register Now
                <img src={Code} alt="Code Icon" className="w-5 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <InternshipForm onClose={handleCloseForm} defaultCourse={selectedCourse} />
      )}
    </>
  );
};

export default Internship;
