import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Logo from "../assets/logos/TuneUp_Logo.png";
import Code from "../assets/icons/Code_DarkBlue.svg";
import CodeLeft from "../assets/icons/Code_Left.svg";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const [bgColor, setBgColor] = useState(
    localStorage.getItem("navbarBgColor") || "bg-blue-50"
  );

  const location = useLocation(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-blue-50");
        localStorage.setItem("navbarBgColor", "bg-blue-50");
      } else {
        setBgColor("bg-blue-50");
        localStorage.setItem("navbarBgColor", "bg-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-5 z-[99999] w-full flex flex-col items-center`}>
      {/* Top Section */}
      <div className="w-full max-h-[68px] flex items-center justify-between px-36">
        {/* Logo Section */}
        <div
          className={`w-[130px] max-h-[64px] py-1.5 px-3 flex justify-center items-center overflow-hidden rounded-full transition-colors duration-500 backdrop-blur-[10px] ${bgColor} border-[1.5px] border-opacity-10 border-blue-500`}
        >
          <img
            className="w-full h-auto object-contain brightness-[90%]"
            src={Logo}
            alt="Logo"
          />
        </div>
        <ul
          className={`flex gap-x-9 ml-12 py-2.5 px-8 rounded-full transition-colors duration-500 backdrop-blur-[10px] ${bgColor} border-[1.5px] border-opacity-10 border-blue-500`}
        >
          {links.map((link, index) => (
            <li
              key={index}
              className={`hover:text-black transition-colors text-slate-600 nunito-medium cursor-pointer ${
                location.pathname === link.path
                  ? "border-b-2 border-blue-500 text-black"
                  : ""
              }`} // Active styles
            >
              <Link to={link.path}>{link.name}</Link>{" "}
              {/* Use Link for navigation */}
            </li>
          ))}
        </ul>

        {/* Button Section */}
        <div>
          <Button
            color="primary"
            variant="bordered"
            className={`rounded-full transition-colors duration-500 backdrop-blur-[10px] ${bgColor} h-[46px] border-[1.5px] border-opacity-10 text-blue-950 nunito-medium`}
          >
            <img
              className="w-6 -ml-3 animate-right-left"
              src={CodeLeft}
              alt=""
            />
            Let's Start!
            <img className="w-6 -ml-3 animate-left-right" src={Code} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
