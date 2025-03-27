import React, { useEffect, useState } from "react";
import Close from "../assets/icons/close.svg";
import { Button, Radio, RadioGroup, Alert } from "@nextui-org/react";
import axios from "axios";

// Application Form Component
const ApplicationForm = ({ onClose, selectedRole, onAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    institution: "",
    degree: "",
    year: "",
    graduationYear: "",
    applyingFor: selectedRole === "flutter" ? "Flutter" : "MERN Stack",
    otherYear: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Special handler for RadioGroup since it uses different event structure
  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      year: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onAlert("default", "Application is submitting...");
    try {
      const response = await axios.post(
        "http://localhost:5003/api/apply",
        formData
      );
      onAlert("success", "Application submitted successfully!");
      console.log("Server Response:", response.data);
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      onAlert("danger", "Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg relative w-[90vw] max-w-2xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          className="absolute top-4 right-4 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
          onClick={onClose}
        >
          <img src={Close} className="unselect w-3" alt="Close" />
        </button>

        <h2 className="text-2xl font-bold text-[#021734] mb-6 text-center">
          Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all appearance-none cursor-pointer"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name of the Institution or Organization
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Enter institution name"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Enter your degree"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <div className="space-y-2">
                <RadioGroup
                  value={formData.year}
                  onValueChange={handleRadioChange}
                  className="space-y-2"
                >
                  <Radio value="Pre-Final Year">Pre-Final Year</Radio>
                  <Radio value="Final Year">Final Year</Radio>
                  <Radio value="Other">Other</Radio>
                </RadioGroup>
                {formData.year === "Other" && (
                  <input
                    type="text"
                    name="otherYear"
                    value={formData.otherYear}
                    onChange={handleChange}
                    placeholder="Please specify"
                    className="w-full mt-2 px-3 py-2 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                    required
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Year of Graduation
              </label>
              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="Enter graduation year"
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Applying for
              </label>
              <input
                type="text"
                name="applyingFor"
                value={formData.applyingFor}
                readOnly
                className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              type="submit"
              className="bg-[#021734] text-white px-6 py-3 rounded-lg w-full"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Requirements Popup Component
const RequirementsPopup = ({ role, onClose, onApply }) => {
  const flutterRequirements = {
    title: "FLUTTER DEVELOPER",
    role: "Remote Flutter Developer",
    eligibility: [
      "Final year and Pre final year Students with relevant skills can apply",
      "Any Degree with relevant skills can apply",
    ],
    responsibilities: [
      "Develop and maintain high-performance, scalable, and robust Flutter applications.",
      "Collaborate with UI/UX designers to implement modern and responsive app designs.",
      "Integrate third-party APIs, Firebase, and backend services for real-time data management.",
      "Optimize applications for maximum speed, performance, and usability.",
      "Debug and resolve issues efficiently to ensure a seamless user experience.",
      "Stay updated with the latest trends and advancements in Flutter and mobile app development.",
      "Basic Knowledge of State Management is an add on.",
    ],
    requirements: [
      "Strong knowledge of Flutter framework and Dart programming language.",
      "Hands-on experience with Firebase (Authentication, Firestore, Cloud Functions, etc.).",
      "Understanding of RESTful APIs and backend integration.",
      "Knowledge of mobile application lifecycle, state management, and responsive UI design.",
      "Familiarity with Git for version control.",
      "Basic knowledge of deploying apps on Play Store and App Store (preferred but not mandatory).",
    ],
    selectionProcess: [
      "Application Review – Shortlisting based on skills and projects (no marks or percentage criteria).",
      "Task Completion remote - Candidate must complete and submit a tiny task given by the team.",
      "Technical Interview – Assessment of problem-solving skills and technical knowledge.",
      "Final Interview – Discussion on expectations and work culture.",
    ],
  };

  const mernRequirements = {
    title: "MERN STACK DEVELOPMENT",
    role: "Remote MERN Stack Developer",
    eligibility: [
      "Final year and Pre final year Students with relevant skills can apply",
      "Any Degree with relevant skills can apply",
    ],
    responsibilities: [
      "Develop and maintain high-performance, scalable, and robust websites with database.",
      "Collaborate with UI/UX designers to implement modern and responsive web designs",
      "Integrate third-party APIs, MongoDB, and backend services for real-time data management.",
      "Optimize websites for maximum speed, performance, and usability.",
      "Debug and resolve issues efficiently to ensure a seamless user experience.",
      "Stay updated with the latest trends and advancements in MERN Stack and Website Development",
      "Must be proficient with ReactJS and MongoDB",
    ],
    requirements: [
      "Strong knowledge of MongoDB, ExpressJS, ReactJS, NodeJS",
      "Hands on experience with CRUD operations in MongoDB",
      "Understanding of RESTful APIs and backend integration.",
      "Knowledge of websites responsive UI design.",
      "Familiarity with Git for version control.",
      "Basic knowledge of deploying websites on third party applications like Vercel, GoDaddy and Hostinger (preferred but not mandatory).",
    ],
    selectionProcess: [
      "Application Review – Shortlisting based on skills and projects (no marks or percentage criteria).",
      "Task Completion remote - Candidate have to complete and submit a tiny task given by the team.",
      "Technical Interview – Assessment of problem-solving skills and technical knowledge.",
      "Final Interview – Discussion on expectations and work culture.",
    ],
  };

  const requirements =
    role === "flutter" ? flutterRequirements : mernRequirements;
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg relative w-[90vw] max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <button
          className="absolute top-4 right-4 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
          onClick={onClose}
        >
          <img src={Close} className="unselect w-3" alt="Close" />
        </button>

        <h2 className="text-2xl font-bold text-[#021734] mb-4">
          {requirements.title}
        </h2>
        <h3 className="text-lg font-semibold mb-2">
          Role: {requirements.role}
        </h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-2">Eligibility Criteria:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-2">Selection Process:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {requirements.selectionProcess.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 w-full flex justify-center">
          <Button
            className="bg-[#021734] w-full text-white px-6 py-2 rounded-lg"
            onPress={() => {
              onClose();
              onApply(role);
            }}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

// Role Selection Popup Component
const RoleSelectionPopup = ({ onClose, onSelectRole }) => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg relative w-[90vw] max-w-md">
        <button
          className="absolute top-4 right-4 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
          onClick={onClose}
        >
          <img src={Close} className="unselect w-3" alt="Close" />
        </button>

        <h2 className="text-2xl font-bold text-[#021734] mb-6 text-center">
          Select a Role
        </h2>

        <div className="space-y-4">
          <Button
            fullWidth
            className="bg-gradient-to-r from-blue-500 to-[#021734] text-white py-3"
            onPress={() => onSelectRole("flutter")}
          >
            Flutter Developer
          </Button>
          <Button
            fullWidth
            className="bg-gradient-to-r from-blue-500 to-[#021734] text-white py-3"
            onPress={() => onSelectRole("mern")}
          >
            MERN Stack Developer
          </Button>
        </div>
      </div>
    </div>
  );
};

// Internship Component
const Internship = ({ hapticFeedback }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isRoleSelectionOpen, setIsRoleSelectionOpen] = useState(false);
  const [isRequirementsOpen, setIsRequirementsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleApply = (role) => {
    setSelectedRole(role);
    setIsFormOpen(true);
  };

  const handleJoinTeamClick = () => {
    setIsRoleSelectionOpen(true);
  };

  const handleCloseRoleSelection = () => {
    setIsRoleSelectionOpen(false);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsRoleSelectionOpen(false);
    setIsRequirementsOpen(true);
  };

  const handleCloseRequirements = () => {
    setIsRequirementsOpen(false);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed z-[999999] top-5 right-5">
          <Alert color={alertType} className="mb-4">
            {alertMessage}
          </Alert>
        </div>
      )}

      <div id="internship" className="pt-24 pb-2 -my-1 bg-white">
        <div className="px-5 sm:px-6 md:px-10 lg:px-16 pt-12 pb-16 lg:py-16 w-full bg-[#021734] hover:shadow-[0px_0px_0px_5px_#2c4464] hover:scale-[0.9935] rounded-[40px] lg:rounded-[70px] transform transition-all ease-linear duration-300">
          <div className="text-center mb-8">
            <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-sm font-semibold uppercase">
              CAREERS
            </span>
            <h2 className="bg-clip-text w-[250px] lg:w-[600px] lg:h-16 mx-auto text-transparent bg-gradient-to-r from-white via-blue-100 to-white text-xl md:text-3xl lg:text-5xl font-bold mt-7">
              Unlock your potential
            </h2>
            <p className="text-white text-opacity-70 mt-2 lg:mt-0 text-sm md:text-md max-w-2xl mx-auto">
              At TuneUp Technologies, we believe in empowering the next
              generation of tech enthusiasts with hands-on experience and
              industry-ready skills.
            </p>
          </div>

          <div className="w-full flex justify-center items-center">
            <Button
              className="mx-auto bg-slate-100 px-10"
              onPress={handleJoinTeamClick}
            >
              Click here to become a part of our TuneUp Team
            </Button>
          </div>
        </div>
      </div>

      {/* Role Selection Popup */}
      {isRoleSelectionOpen && (
        <RoleSelectionPopup
          onClose={handleCloseRoleSelection}
          onSelectRole={handleRoleSelect}
        />
      )}

      {/* Requirements Popup */}
      {isRequirementsOpen && (
        <RequirementsPopup
          role={selectedRole}
          onClose={handleCloseRequirements}
          onApply={handleApply}
        />
      )}

      {/* Application Form Popup */}
      {isFormOpen && (
        <ApplicationForm
          onClose={() => setIsFormOpen(false)}
          selectedRole={selectedRole}
          onAlert={handleAlert}
        />
      )}
    </>
  );
};

export default Internship;
