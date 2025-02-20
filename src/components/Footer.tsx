import React from "react";
import LinkedIn from "../assets/icons/LikedIn_Light_Icon.svg";
import Instagram from "../assets/icons/Instagram_Light_Icon.svg";
import Github from "../assets/icons/Github_Light_Icon.svg";
import Mail from "../assets/icons/Mail_Light_Icon.svg";
// import Youtube from "../assets/icons/Youtube.svg";
import Logo from "../assets/icons/TuneUp_Icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-gradient-to-b from-[#021734] to-[#010c1b] lg:pt-10 -mt-3">
        {/* Links and Pages */}
        {/* <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 lg:gap-y-0 lg:flex justify-between py-8 md:py-12 lg:py-16 xl:py-20">
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Products In
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <p className="text-slate-400 font-light hover:text-white">
                  Flutter Development
                </p>
              </li>
              <li>
                <p className="text-slate-400 font-light hover:text-white">
                  MERN Stack Web Development
                </p>
              </li>
              <li>
                <p className="text-slate-400 font-light hover:text-white">
                  Digital Marketing
                </p>
              </li>
              <li>
                <p className="text-slate-400 font-light hover:text-white">
                  UI & UX Designing
                </p>
              </li>
              <li>
                <p className="text-slate-400 font-light hover:text-white">
                  Media Support
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Company
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 font-light hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Connect
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  to={"https://github.com/TuneUp-Dev"}
                  className="text-slate-400 font-light hover:text-white"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  to={"https://www.instagram.com/tuneup_technologies/"}
                  className="text-slate-400 font-light hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "https://www.facebook.com/profile.php?id=61559713994436&sk=about"
                  }
                  className="text-slate-400 font-light hover:text-white"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "https://www.linkedin.com/company/tuneup-technologies/posts/?feedView=all"
                  }
                  className="text-slate-400 font-light hover:text-white"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Learn
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <a
                  href="#docs"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#guides"
                  className="text-slate-400 font-light hover:text-white"
                >
                  TuneUp Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Career
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <a
                  href="#team"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Join Our Team
                </a>
              </li>
              <li>
                <a
                  href="#internship"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Internship
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Text */}
        <h1 className="hidden md:block md:-mt-36 lg:-mt-52 xl:-mt-52 md:text-[140px] lg:text-[200px] xl:text-[260px] text-white text-opacity-[7%] text-center montserrat-bold">
          TuneUp
        </h1>

        {/* Copyright and Social Links */}
        <div className="w-full pb-10 pt-10 lg:pb-14">
          <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-end">
            {/* Logo and Caption */}
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <div className="md:block flex flex-col items-center justify-center text-center md:text-left w-full md:w-[410px]">
                <img
                  className="unselect w-12 cursor-pointer"
                  src={Logo}
                  alt=""
                />
                <p className="text-slate-200 text-[11px] lg:text-[12px] xl:text-[13px] font-light mt-3">
                  ©{new Date().getFullYear()}{" "}
                  <b className="font-medium text-white">TuneUp Technologies</b>,
                  Inc. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mx-auto md:mx-0 flex space-x-4 bg-[#294770] backdrop-blur-[20px] bg-opacity-20 px-3.5 md:px-4 py-2 rounded-full">
              <Link
                to={"https://www.linkedin.com/company/tuneup-technologies"}
                target="_blank"
              >
                <img
                  src={LinkedIn}
                  alt=""
                  className="unselect w-5 hover:opacity-90"
                />
              </Link>
              <Link
                to={"https://www.instagram.com/tuneup_technologies"}
                target="_blank"
              >
                <img
                  src={Instagram}
                  alt=""
                  className="unselect w-5 hover:opacity-90"
                />
              </Link>
              <Link to={"https://github.com/TuneUp-Dev"} target="_blank">
                <img
                  src={Github}
                  alt=""
                  className="unselect w-5 hover:opacity-90"
                />
              </Link>
              <Link to={"mailto:info@tuneuptech.in"} target="_blank">
                <img
                  src={Mail}
                  alt=""
                  className="unselect w-5 hover:opacity-90"
                />
              </Link>
              {/* <Link to={"https://www.youtube.com/@TuneUpedu"} target="_blank">
                <img src={Youtube} alt="" className="unselect w-5 hover:opacity-90" />
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
