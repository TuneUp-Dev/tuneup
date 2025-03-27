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
            <div className="mt-10 lg:mt-14 w-full h-auto lg:h-auto xl:h-[240px] flex flex-col lg:flex-row justify-between lg:items-start items-center gap-y-5 gap-x-7">
              <div className="w-full h-full rounded-2xl flex justify-start items-start p-5 lg:p-8 gap-x-4 lg:gap-x-5 border-1 border-[#c5cfdb] transition-all duration-200 ease-linear">
                <div className="">
                  <div className="flex justify-start items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
                    <img
                      className="unselect w-7 lg:w-14"
                      src={Verified}
                      alt=""
                    />
                    <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                      Vision:
                    </h1>
                  </div>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[13px] lg:text-[14px] leading-[22px]">
                    To transcend boundaries and redefine digital accessibility,
                    ensuring that world- class technology solutions are within
                    reach for businesses of all scales.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-2xl flex justify-start items-start p-5 lg:p-8 gap-x-4 lg:gap-x-5 border-1 border-[#c5cfdb] transition-all duration-200 ease-linear">
                <div className="">
                  <div className="flex justify-start items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
                    <img
                      className="unselect w-7 lg:w-14"
                      src={Verified}
                      alt=""
                    />
                    <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                      Mission:
                    </h1>
                  </div>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[13px] lg:text-[14px] leading-[22px]">
                    To orchestrate impeccable digital experiences by crafting
                    sophisticated, high- performance websites and applications
                    that epitomize accessibility, fluidity, and an enduring
                    legacy of excellence.
                  </p>
                </div>
              </div>
              <div className="w-full h-full rounded-2xl flex justify-start items-start p-5 lg:p-8 gap-x-4 lg:gap-x-5 border-1 border-[#c5cfdb] transition-all duration-200 ease-linear">
                <div className="">
                  <div className="flex justify-start items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
                    <img
                      className="unselect w-7 lg:w-14"
                      src={Verified}
                      alt=""
                    />
                    <h1 className="font-semibold text-[16.5px] lg:text-[20px]">
                      Purpose:
                    </h1>
                  </div>
                  <p className="mt-2 lg:mt-3 text-slate-700 text-[13px] lg:text-[14px] leading-[22px]">
                    To bridge the gap between ideas and execution by delivering
                    innovative, scalable, and future-ready digital solutions
                    that empower businesses to grow effortlessly.
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
