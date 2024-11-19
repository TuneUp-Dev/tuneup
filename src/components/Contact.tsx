import { useState } from "react";
import { Button } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import animationData from "../animations/Animation3.json";
import Code from "../assets/icons/Code.svg";
import LinkedIn from "../assets/icons/LikedIn_Icon.svg";
import Instagram from "../assets/icons/Instagram_Icon.svg";
import Github from "../assets/icons/Github_Icon.svg";
import Mail from "../assets/icons/Mail_Icon.svg";
import Whatsapp from "../assets/icons/Whatsapp_Icon.svg";
import Slack from "../assets/icons/Slack_Icon.svg";
import Call from "../assets/icons/Call_Icon.svg";
import Logo from "../assets/logos/TuneUp_Logo.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="w-full my-28 px-28">
        <span className="bg-slate-100 rounded-xl px-3 py-2 text-blue-500 text-[13px] font-semibold uppercase">
          Contact us
        </span>
        <div className="flex justify-between items-start gap-12">
          <div className="w-full flex flex-col justify-between mt-4 items-start">
            <div>
              <p className="text-[52px] w-full leading-[60px] inter-bold">
                <span className="bg-clip-text mr-3 text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Let’s
                </span>
                work together
              </p>
            </div>
            <p className="text-[18px] open-sans-normal text-slate-600 mt-2 w-full">
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
            <Button
              className="bg-white border-[1.5px] border-slate-200 rounded-lg text-[15px] w-[160px] h-12 mt-6"
              onClick={() => setShowForm(true)}
            >
              Get in touch
              <img
                className="w-7 -ml-3 brightness-0 animate-left-right"
                src={Code}
                alt=""
              />
            </Button>
          </div>
          <div className="relative w-full h-[300px] flex justify-end items-start">
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 500, marginTop: "-100px" }}
            />
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-3xl shadow-lg relative w-[900px] max-h-[72vh] min-h-[570px] h-[570px]">
            <button
              className="absolute top-4 right-5 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <div className="w-full h-full flex justify-between items-center gap-x-6">
              <div className="min-w-[280px] h-full rounded-2xl p-3 bg-slate-100">
                <div className="w-full h-[40px] overflow-hidden flex items-center justify-start">
                  <img className="w-[120px]" src={Logo} alt="" />
                </div>
                <div className="w-full mt-5">
                  <h1 className="Geist-bold">Chat with us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Speak to our friendly team via whatsapp chat.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[12px]">
                    <p className="flex gap-x-2">
                      <img src={Whatsapp} alt="" className="w-[15px]" /> Start a
                      live chat
                    </p>
                    <p className="flex gap-x-2">
                      <img src={Slack} alt="" className="w-[15px]" /> Message us
                      on linkedIn
                    </p>
                  </div>
                </div>
                <div className="w-full mt-7">
                  <h1 className="Geist-bold">Call us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Call our team Mon-Fri from 10am to 6pm.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[12px]">
                    <p className="flex gap-x-2">
                      <img src={Call} alt="" className="w-[15px]" /> +91
                      9944500207
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h1 className="Geist-bold">Connect with us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Connect with our team on social platforms.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[11px]">
                    <Link
                      to={""}
                      className="flex justify-start gap-x-2 w-[140px]"
                    >
                      <img src={LinkedIn} alt="" className="w-[15px]" /> TuneUp
                      Technologies
                    </Link>
                    <Link
                      to={""}
                      className="flex justify-start gap-x-2 w-[120px]"
                    >
                      <img src={Instagram} alt="" className="w-[15px]" /> TuneUp
                      Education
                    </Link>
                    <Link
                      to={""}
                      className="flex justify-start gap-x-2 w-[90px]"
                    >
                      <img src={Github} alt="" className="w-[15px]" />{" "}
                      TuneUp-Dev
                    </Link>
                    <Link
                      to={""}
                      className="flex justify-start gap-x-2 w-[130px]"
                    >
                      <img src={Mail} alt="" className="w-[15px]" />{" "}
                      info@tuneuptech.in
                    </Link>
                  </div>
                </div>
              </div>
              <form className="p-4 w-full flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="px-4 py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="px-4 py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write message here"
                    className="px-4 py-3 h-[130px] text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full mt-3 py-3 bg-gradient-to-r from-blue-400 text-[17px] to-blue-600 text-white rounded-lg shadow-md hover:opacity-90 transition-all"
                >
                  Submit
                  <img
                    className="w-7 -ml-3 animate-left-right"
                    src={Code}
                    alt=""
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
