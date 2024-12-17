import React from "react";
import Verified from "../assets/icons/Verified.svg";

const WCU = () => {
  return (
    <>
      <div className="w-[90vw] mx-auto lg:w-full lg:px-16 xl:px-28 pt-20">
        <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-[11.5px] lg:text-[13px] font-semibold uppercase">
          Why choose us
        </span>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-[#2c4464] to-[#021734] text-[40px] lg:text-[52px] lg:w-[700px] leading-[41px] lg:leading-[60px] mt-4 inter-bold">
        Choose TuneUp,{" "}
          <span className="hidden lg:block"> Choose Growth!</span>
        </p>
        <span className="lg:hidden text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#2c4464] to-[#021734] inter-bold">
          to TuneUp yourself
        </span>
        <p className="mt-4 lg:mt-5 lg:w-[900px] text-[14px] lg:text-[16px]">
          At TuneUp Technologies, we are more than just a software development
          company—we are your trusted partner in achieving digital excellence.
          Here’s why businesses and institutions choose us.
        </p>
        <div className="mt-10 lg:mt-14 w-full h-auto lg:h-auto xl:h-[180px] flex flex-col lg:flex-row justify-between lg:items-start items-center gap-y-5 gap-x-7">
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5">
            <img className="w-7 lg:w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                Expertise and Innovation{" "}
              </h1>
              <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px]">
                Our team of skilled professionals stays ahead of industry
                trends, delivering cutting-edge solutions tailored to your
                unique needs.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5">
            <img className="w-7 lg:w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                Customized Approach
              </h1>
              <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px]">
                We understand that every business is different. Our solutions
                are personalized to align with your goals and drive measurable
                success.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5">
            <img className="w-7 lg:w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                End-to-End Support
              </h1>
              <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px]">
                From ideation to deployment and beyond, we provide comprehensive
                support at every step of your digital journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WCU;
