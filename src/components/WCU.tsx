import React from "react";
import Verified from "../assets/icons/Verified.svg";

const WCU = () => {
  return (
    <>
      <div className="w-full px-28 mt-28">
        <span className="bg-slate-100 rounded-lg px-3 py-2 text-[#021734] text-[13px] font-semibold uppercase">
          Why choose us
        </span>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-[#2c4464] to-[#021734] text-[52px] w-[700px] leading-[60px] mt-4 inter-bold">
          Why can you choose us to TuneUp yourself
        </p>
        <p className="mt-5 w-[900px] text-[17px]">
          At TuneUp Technologies, we are more than just a software development
          company—we are your trusted partner in achieving digital excellence.
          Here’s why businesses and institutions choose us.
        </p>
        <div className="mt-14 w-full h-[200px] flex justify-between items-center gap-7">
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]">
                Expertise and Innovation{" "}
              </h1>
              <p className="mt-2 text-slate-700">
                Our team of skilled professionals stays ahead of industry
                trends, delivering cutting-edge solutions tailored to your
                unique needs.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]">Customized Approach</h1>
              <p className="mt-2 text-slate-700">
                We understand that every business is different. Our solutions
                are personalized to align with your goals and drive measurable
                success.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]"> End-to-End Support</h1>
              <p className="mt-2 text-slate-700">
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
