import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Logo from "../assets/logos/TuneUp_Logo.svg";

const Navbar = () => {
  const links = ["About", "Services", "Courses", "Products", "Contact"];

  const defaultLinks = links.slice(0, 5); // First 5 links
  const expandedLinks = links.slice(5); // Remaining links

  const [isExpanded, setIsExpanded] = useState(false);
  const [bgColor, setBgColor] = useState(
    // Retrieve the background color from localStorage, default to transparent
    localStorage.getItem("navbarBgColor") || "bg-transparent"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("bg-white");
        localStorage.setItem("navbarBgColor", "bg-white"); // Save bg color to localStorage
      } else {
        setBgColor("bg-transparent");
        localStorage.setItem("navbarBgColor", "bg-transparent"); // Save bg color to localStorage
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also check on mount in case the page is refreshed and scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-[99999] w-full flex flex-col items-center transition-colors duration-500 backdrop-blur-[1px] ${bgColor}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Top Section */}
      <div className="w-full h-[68px] flex items-center justify-between px-36">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="w-[130px] h-[64px] flex justify-center items-center overflow-hidden">
            <img className="w-full h-auto object-cover" src={Logo} alt="Logo" />
          </div>
          <ul className="flex gap-x-9 ml-12">
            {defaultLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-black transition-colors text-slate-600 nunito-medium cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Button Section */}
        <div>
          <Button
            color="primary"
            variant="bordered"
            className="rounded-[9px] h-[38px] border-[1.5px] bg-blue-50 bg-opacity-50 text-blue-950 nunito-medium"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Collapsible Links Section */}
      {expandedLinks.length > 0 && (
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isExpanded
              ? "max-h-40 translate-y-0 opacity-100"
              : "max-h-0 translate-y-[10px] opacity-0"
          } overflow-hidden w-[calc(100vw-286px)] bg-white border-t-[1px] border-neutral-100`}
        >
          <ul className="flex flex-wrap gap-x-9 px-20 py-4">
            {expandedLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-black transition-colors text-neutral-500 chakra-medium cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
