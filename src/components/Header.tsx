import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code.svg";

const Header = () => {
  return (
    <div className="relative h-[1295px] overflow-hidden text-center pt-36">
      {/* Dot Grid Background */}
      <div className="absolute w-full h-[300px] z-10 bg-opacity-15 top-0 bg-gradient-to-b from-white to-transparent">
        <div className="background-image-container">
          <img
            src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66436f06a1016be8fae136f3_Hero-Module.svg"
            loading="eager"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>
      <div className="absolute w-full h-[1300px] inset-0 z-10 bg-dots"></div>
      
      {/* Foreground Content */}
      <div className="relative z-20">
        <p className="bg-white shadow-[0_3px_10px_-12px_rgba(0,0,0,0.3)] Geist-bold text-[13px] uppercase text-blue-500 mx-auto w-[260px] p-1.5 rounded-[7px]">
        Tune Up Yourself with TuneUp 
        </p>
        <h1 className="poppins-bold text-[70px] mx-auto w-[850px] leading-[100px] mt-4">
        We make Impossible  <br />
          <span className="ml-5 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
          to I'm Possible
          </span>
        </h1>
        <p className="nunito-medium mt-5 w-[600px] mx-auto text-[20px] leading-[26px]">
        TuneUp Technologies is a dynamic SaaS product development 
        company providing innovative digital solutions designed to empower 
        startups and enterprises. 
        </p>
        <Button
          color="primary"
          className="rounded-[9px] w-[210px] h-[54px] mt-10 text-white text-[20px] bg-blue-600 nunito-medium"
        >
          Let's Start
          <img className="w-9 -ml-3 animate-left-right" src={Code} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
