import { useState } from "react";
import { Button } from "@nextui-org/react";
import Greetings from "../assets/Greeting.webp";

const Greeting = () => {
  // Check if the "isGreetingSeen" item exists in localStorage to determine visibility
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("isGreetingSeen") !== "true"; // Show greeting only if it hasn't been seen
  });

  const handleStartClick = () => {
    // Hide the greeting and store the state in localStorage
    setIsVisible(false);
    localStorage.setItem("isGreetingSeen", "true");
  };

  return (
    <>
      {isVisible && (
        <div className="fixed z-[999999999] h-screen w-full bg-black bg-opacity-60 top-0 left-0 flex justify-center items-center">
          <div className="w-[920px] h-[366px] rounded-xl bg-white p-12 flex justify-between gap-x-12">
            <div className="w-full h-full text-blue-950 flex flex-col justify-between">
              <h1 className="nunito-extrabold text-[38px] leading-[45px]">
                Welcome to Our Wonderful World!
              </h1>
              <span className="flex flex-col justify-between gap-y-6">
                <p className="nunito-medium text-[16px] leading-[22px]">
                  We are a dynamic tech company providing innovative digital
                  solutions for startups and enterprises.
                </p>
                <Button
                  color="primary"
                  className="rounded-[9px] h-[42px] text-white text-[18px] bg-blue-600 nunito-medium"
                  onClick={handleStartClick}
                >
                  Let's Start!
                </Button>
              </span>
            </div>
            <div className="min-w-[446px] h-full">
              <img src={Greetings} alt="Greetings" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Greeting;
