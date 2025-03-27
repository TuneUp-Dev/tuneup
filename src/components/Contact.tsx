import { useEffect, useRef, useState } from "react";
import { Alert, Button } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import animationData from "../animations/Animation.json";
import Code from "../assets/icons/Code.svg";
import LinkedIn from "../assets/icons/LikedIn_Icon.svg";
import Instagram from "../assets/icons/Instagram_Icon.svg";
import Github from "../assets/icons/Github_Icon.svg";
import Mail from "../assets/icons/Mail_Icon.svg";
import Whatsapp from "../assets/icons/Whatsapp_Icon.svg";
import Call from "../assets/icons/Call_Icon.svg";
import Logo from "../assets/logos/Logo.svg";
import Close from "../assets/icons/close.svg";
import { Link } from "react-router-dom";
import React from "react";

const Contact = ({ hapticFeedback, linkFeedback }) => {
  const [showForm, setShowForm] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const formRef = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    show: boolean;
    type: "default" | "success" | "error" | "warning" | "danger";
    message: string;
  }>({ show: false, type: "default", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  if (10 < 0) {
    console.log(submitStatus);
  }

  useEffect(() => {
    let timer;
    if (showForm) {
      setFadeClass("fade-in");
    } else {
      setFadeClass("fade-out");
    }

    return () => clearTimeout(timer);
  }, [showForm]);

  useEffect(() => {
    if (showForm) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showForm]);

  const showAlert = (
    type: "default" | "success" | "error" | "warning" | "danger",
    message: string
  ) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    hapticFeedback();

    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    showAlert("default", "Sending your message...");

    try {
      const response = await fetch("http://localhost:5003/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        formRef.current?.reset();
      } else {
        showAlert("error", result.message || "Failed to send message");
      }
      showAlert("success", "Message sent successfully!");
    } catch (error) {
      showAlert(
        "danger",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {alert.show && (
        <div className="fixed z-[999999] top-5 right-5">
          <Alert
            color={alert.type}
            className="mb-4"
            onClose={() => setAlert({ ...alert, show: false })}
          >
            {alert.message}
          </Alert>
        </div>
      )}

      <div id="contact" className="bg-[#021734] pb-20">
        <div className="bg-white rounded-b-[40px] md:rounded-b-[70px] shadow-[0px_25px_50px_-30px_#020810]">
          <div className="w-[90vw] mx-auto lg:w-full pt-24 md:pt-32 md:py-16 lg:py-36 lg:px-16 xl:px-24 md:-mt-10 lg:mt-0">
            <span className="bg-slate-100 rounded-xl px-3 py-2 text-[#021734] text-[11.5px] lg:text-[13px] font-semibold uppercase">
              Contact us
            </span>
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-y-28 gap-x-12">
              <div className="w-full flex flex-col md:justify-start mt-4 items-start">
                <p className="h-auto bg-clip-text text-transparent bg-gradient-to-r from-[#021734] to-[#679de5] text-[35px] md:text-[45px] lg:text-[45px] xl:text-[52px] w-auto leading-[40px] md:leading-[52px] lg:leading-[60px] inter-bold">
                  Let’s work together
                </p>
                <p className="mt-4 lg:mt-2 xl:mt-3 lg:w-[900px] text-[14px] lg:text-[13px] xl:text-[16px]">
                  Want to discuss an opportunity to create something great? I’m
                  ready when you are.
                </p>

                <Button
                  className="bg-white border-[1.5px] py-3 border-slate-200 rounded-lg text-[13.5px] lg:text-[13px] xl:text-[15px] w-[120px] lg:w-[160px] h-9 lg:h-12 mt-4 lg:mt-6"
                  onPress={() => {
                    setShowForm(true);
                    hapticFeedback();
                  }}
                >
                  Get in touch
                  <img
                    className="unselect w-5 lg:w-7 -ml-3 brightness-0 animate-left-right"
                    src={Code}
                    alt=""
                  />
                </Button>
              </div>
              <div className="relative mx-auto hover:scale-[1.02] transition-all duration-200 ease-linear transform w-full lg:-top-[50px] sm:w-[400px] md:w-[400px] lg:min-w-[380px] lg:ml-[-400px] lg:max-w-[3280px] xl:min-w-[480px] xl:ml-[-300px] xl:max-w-[480px] md:h-[100px] lg:h-[135px] xl:h-[190px] flex flex-col md:flex-row justify-center items-center md:justify-end md:items-start brightness-[90%]">
                <Lottie
                  loop
                  animationData={animationData}
                  play
                  style={{ marginTop: "-100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showForm && (
        <div
          className={`fixed inset-0 z-[99999] flex flex-col sm:flex-row items-center justify-center bg-black bg-opacity-50 ${fadeClass}`}
        >
          <div className="bg-white p-4 lg:p-5 rounded-2xl lg:rounded-3xl shadow-lg relative w-[90vw] lg:w-[900px] max-h-[88%] lg:max-h-[72vh] h-auto lg:min-h-[570px] lg:h-[570px]">
            <button
              className="absolute top-2.5 right-2.5 lg:top-4 lg:right-4 text-slate-500 w-6 h-6 rounded-full flex items-center font-semibold justify-center text-[12px] shadow-sm border-[1px] border-slate-200 bg-slate-100 hover:text-slate-800"
              onClick={() => {
                setShowForm(false);
                hapticFeedback();
              }}
            >
              <img src={Close} className="unselect w-3" alt="" />
            </button>

            <div className="w-full h-full rounded-t-2xl rounded-b-lg flex flex-col sm:flex-row justify-between items-center overflow-y-auto scroll-smooth transition-all duration-500 ease-linear gap-y-10 gap-x-6">
              <div className="w-full lg:min-w-[280px] h-full rounded-2xl p-3 pb-5 bg-slate-100">
                <div className="w-full h-[40px] overflow-hidden flex items-center justify-start">
                  <img
                    className="unselect w-[120px] brightness-[90%]"
                    src={Logo}
                    alt=""
                  />
                </div>
                <div className="w-full mt-4 lg:mt-5">
                  <h1 className="Geist-bold">Chat with us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Speak to our friendly team via whatsapp chat.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[12px]">
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to="https://chat.whatsapp.com/KHGwEpyP5CZ1zKCBkrBmdX"
                    >
                      <p className="flex gap-x-2">
                        <img
                          src={Whatsapp}
                          alt=""
                          className="unselect w-[15px]"
                        />{" "}
                        Join our a Whatsapp group
                      </p>
                    </Link>
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to="https://www.linkedin.com/company/tuneup-technologies"
                    >
                      <p className="flex gap-x-2">
                        <img
                          src={LinkedIn}
                          alt=""
                          className="unselect w-[15px]"
                        />{" "}
                        Message us on linkedIn
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="w-full mt-5 lg:mt-7">
                  <h1 className="Geist-bold">Call us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Call our team Mon-Fri from 10am to 6pm.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[12px]">
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to={"tel:+919944500207"}
                      className="flex gap-x-2"
                    >
                      <img src={Call} alt="" className="unselect w-[15px]" />{" "}
                      +91 9944500207
                    </Link>
                  </div>
                </div>
                <div className="mt-5 lg:mt-7">
                  <h1 className="Geist-bold">Connect with us</h1>
                  <p className="text-[11px] font-medium text-neutral-500">
                    Connect with our team on social platforms.
                  </p>
                  <div className="Geist-bold mt-3 flex flex-col gap-y-1 justify-start text-[11px]">
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to={
                        "https://www.linkedin.com/company/tuneup-technologies"
                      }
                      className="flex justify-start gap-x-2 w-[140px]"
                    >
                      <img
                        src={LinkedIn}
                        alt=""
                        className="unselect w-[15px]"
                      />{" "}
                      TuneUp Technologies
                    </Link>
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to={"https://www.instagram.com/tuneup_technologies"}
                      className="flex justify-start gap-x-2 w-[150px]"
                    >
                      <img
                        src={Instagram}
                        alt=""
                        className="unselect w-[15px]"
                      />{" "}
                      TuneUp Technologies
                    </Link>
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to={"https://github.com/TuneUp-Dev"}
                      className="flex justify-start gap-x-2 w-[90px]"
                    >
                      <img src={Github} alt="" className="unselect w-[15px]" />{" "}
                      TuneUp-Dev
                    </Link>
                    <Link
                      target="_blank"
                      onClick={linkFeedback}
                      to={"info@tuneuptech.in"}
                      className="flex justify-start gap-x-2 w-[130px]"
                    >
                      <img src={Mail} alt="" className="unselect w-[15px]" />{" "}
                      info@tuneuptech.in
                    </Link>
                  </div>
                </div>
              </div>
              <form
                ref={formRef}
                className="lg:p-4 w-full flex flex-col gap-y-4"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
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
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="px-3 lg:px-4 py-2 lg:py-3 text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Write message here"
                    className="px-3 lg:px-4 py-2 lg:py-3 h-[100px] lg:h-[130px] text-[13px] rounded-lg border border-gray-300 shadow-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full mt-3 py-3 bg-gradient-to-r text-[17px] sm:text-[15px] lg:text-[17px] from-blue-500 via-[#021734] to-blue-500 text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-500 ease-linear"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                  {!isSubmitting && (
                    <img
                      className="unselect w-7 -ml-3 animate-left-right"
                      src={Code}
                      alt=""
                    />
                  )}
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
