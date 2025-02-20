import React from "react";
import Verified from "../assets/icons/Verified.svg";

const WCU = () => {
  return (
    <>
      <div className="bg-[#021734]">
        <div className="bg-white shadow-[0px_-25px_50px_-30px_#020810] rounded-t-[40px] md:rounded-t-[70px]">
          <div className="w-[90vw] max-w-[1440px] mx-auto lg:w-full lg:px-16 xl:px-28 pt-14 md:pt-20">
            <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-[11.5px] lg:text-[13px] font-semibold uppercase">
              Why choose us
            </span>
            <p className="bg-clip-text flex justify-start items-center text-nowrap text-transparent bg-gradient-to-r from-[#021734] to-[#4288e3] text-[40px] lg:text-[52px] lg:w-[800px] leading-[41px] lg:leading-[60px] mt-4 inter-bold">
              Choose TuneUp,{" "}
              <span className="hidden lg:block ml-3"> Choose Growth!</span>
            </p>
            <span className="lg:hidden text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#021734] to-[#4288e3] inter-bold">
              Choose Growth!
            </span>
            <p className="mt-4 lg:mt-5 lg:w-[900px] text-[14px] lg:text-[16px]">
              At TuneUp Technologies, we are more than just a software
              development company—we are your trusted partner in achieving
              digital excellence. Here’s why businesses and institutions choose
              us.
            </p>
            <div className="mt-10 lg:mt-14 w-full h-auto lg:h-auto xl:h-[180px] flex flex-col lg:flex-row justify-between lg:items-start items-center gap-y-5 gap-x-7">
              <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5 border-0 hover:border-x-5 border-b-1 border-b-[#c5cfdb] border-l-[#021734] border-r-[#021734] transition-all duration-200 ease-linear">
                <img className="unselect w-7 lg:w-9" src={Verified} alt="" />
                <div className="">
                  <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                    Expertise and Innovation{" "}
                  </h1>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px] leading-[22px]">
                    Our team of skilled professionals stays ahead of industry
                    trends, delivering cutting-edge solutions tailored to your
                    unique needs.
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5 border-0 hover:border-x-5 border-b-1 border-b-[#c5cfdb] border-l-[#021734] border-r-[#021734] transition-all duration-200 ease-linear">
                <img className="unselect w-7 lg:w-9" src={Verified} alt="" />
                <div className="">
                  <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                    Customized Approach
                  </h1>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px] leading-[22px]">
                    We understand that every business is different. Our
                    solutions are personalized to align with your goals and
                    drive measurable success.
                  </p>
                </div>
              </div>
              <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-start items-start p-4 lg:p-5 gap-x-4 lg:gap-x-5 border-0 hover:border-x-5 border-b-1 border-b-[#c5cfdb] border-l-[#021734] border-r-[#021734] transition-all duration-200 ease-linear">
                <img className="unselect w-7 lg:w-9" src={Verified} alt="" />
                <div className="">
                  <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                    End-to-End Support
                  </h1>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[14px] lg:text-[15px] leading-[22px]">
                    From ideation to deployment and beyond, we provide
                    comprehensive support at every step of your digital journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WCU;
