import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../assets/icons/LikedIn_Light_Icon.svg";
import Instagram from "../assets/icons/Instagram_Light_Icon.svg";
import Github from "../assets/icons/Github_Light_Icon.svg";
import Mail from "../assets/icons/Mail_Light_Icon.svg";
import Slack from "../assets/icons/Slack_Light_Icon.svg";
import Logo from "../assets/icons/TuneUp_Icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#021734] lg:pt-10 -mt-3">
        <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-8 lg:gap-y-0 lg:flex justify-between py-8 md:py-12 lg:py-16 xl:py-20">
          {/* Product Section */}
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Product
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Monitoring as Code
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Synthetic Monitoring
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  API Monitoring
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Alerting
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Private Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Company
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Connect
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Slack Community
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Twitter @TuneUp
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Learn
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Checkly Guides
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Playwright Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Alternatives Section */}
          <div>
            <h4 className="font-medium text-white lg:mb-1.5 xl:mb-2 text-[15px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
              Alternatives
            </h4>
            <ul className="space-y-1.5 mt-1.5 text-[13px] lg:text-[15px]">
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Alternative to Datadog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Alternative to New Relic
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-slate-400 font-light hover:text-white"
                >
                  Alternative to Dynatrace
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="w-full mt-6 lg:mt-0 pb-10 lg:pb-14">
          <div className="max-w-[86vw] md:max-w-[88vw] xl:max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start">
            {/* Logo and Caption */}
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <div className="md:block flex flex-col items-center justify-center text-center md:text-left w-full md:w-[410px]">
                <img className="w-12 cursor-pointer" src={Logo} alt="" />
                <p className="text-slate-200 text-[11px] lg:text-[12px] xl:text-[13px] font-light mt-3">
                  &copy; {new Date().getFullYear()}{" "}
                  <b className="font-medium text-white">TuneUp Technologies</b>,
                  Inc. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mx-auto md:mx-0 flex space-x-4 bg-[#294770] backdrop-blur-[20px] bg-opacity-20 px-3.5 md:px-4 py-2 rounded-full">
              <Link
                to="https://www.linkedin.com/company/tuneup-technologies"
                target="_blank"
              >
                <img src={LinkedIn} alt="" className="w-5 hover:opacity-90" />
              </Link>
              <Link
                to="https://www.instagram.com/tuneup_technologies"
                target="_blank"
              >
                <img src={Instagram} alt="" className="w-5 hover:opacity-90" />
              </Link>
              <Link to="https://github.com/TuneUp-Dev" target="_blank">
                <img src={Github} alt="" className="w-5 hover:opacity-90" />
              </Link>
              <Link to="#" target="_blank">
                <img src={Slack} alt="" className="w-5 hover:opacity-90" />
              </Link>
              <Link to="#" target="_blank">
                <img src={Mail} alt="" className="w-5 hover:opacity-90" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
