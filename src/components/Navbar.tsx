import { useState, useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";
import Arrow from "../assets/icons/arrow.svg";
import Logo from "../assets/logos/Logo.svg";
import Code from "../assets/icons/Code_DarkBlue.svg";
import CodeLeft from "../assets/icons/Code_Left.svg";
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuText, setShowMenuText] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const links = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Repos", id: "repos" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMenuText(false); // Hide text after 3 seconds
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      // Toggle scrolling on the body element
      if (!prevState) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return !prevState;
    });
  };

  const [bgColor, setBgColor] = useState(
    localStorage.getItem("navbarBgColor") || "bg-blue-50"
  );

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

  useEffect(() => {
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const serviceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;

          if (entry.isIntersecting) {
            setActiveSection(id);
          } else if (!entry.isIntersecting && activeSection === id) {
            setActiveSection("");
          }
        });
      },
      {
        root: null,
        threshold: isMobile ? 0.17 : 0.2, // Use 0.2 only for the 'services' section
      }
    );

    const defaultObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;

          if (entry.isIntersecting) {
            setActiveSection(id);
          } else if (!entry.isIntersecting && activeSection === id) {
            setActiveSection("");
          }
        });
      },
      {
        root: null,
        threshold: isMobile ? 0.5 : 0.8, // Default threshold for other sections
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        sectionRefs.current[link.id] = section;
        if (link.id === "services") {
          serviceObserver.observe(section); // Use the special observer for 'services'
        } else {
          defaultObserver.observe(section); // Use the default observer for other sections
        }
      }
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          serviceObserver.unobserve(section);
          defaultObserver.unobserve(section);
        }
      });
    };
  }, [links, activeSection]);

  // Scroll to section
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <div className={`fixed top-5 z-[99999] w-full flex flex-col items-center`}>
      {/* Top Section */}
      <div className="w-full max-h-[50px] md:max-h-[68px] flex items-center justify-between px-5 md:px-36">
        {/* Logo Section */}
        <div
          className={`w-[110px] md:w-[130px] max-h-[50px] md:max-h-[44px] py-1 md:py-1.5 px-1.5 md:px-3 flex justify-between lg:justify-center items-center overflow-hidden rounded-full transition-colors duration-500 backdrop-blur-[10px] ${bgColor} border-[1.5px] border-opacity-10 border-blue-500`}
        >
          <img
            className="w-full h-auto object-contain brightness-[90%]"
            src={Logo}
            alt="Logo"
          />
        </div>
        {/* Menu Icon (Hamburger) */}
        <div
          className={`lg:hidden py-0.5 pl-0.5 pr-1 flex justify-center items-center backdrop-blur-[10px] ${bgColor} rounded-2xl border-[1.5px] border-opacity-10 border-blue-500`}
          onClick={toggleMenu}
        >
          <button className="flex items-center">
            <img src={Arrow} className="w-9" alt="" />
            <p
              className={`-ml-1.5 mr-2 text-[12px] text-blue-500 nunito-extrabold transition-all duration-500 ${
                showMenuText ? "block translate-x-0" : "hidden -translate-x-2"
              }`}
            >
              Menu
            </p>
          </button>
        </div>
        {/* Navigation Links (Visible when menu is open on mobile) */}
        <ul
          className={`lg:flex lg:flex-row lg:h-auto flex-col h-full gap-y-1.5 lg:gap-y-0 lg:gap-x-9 ml-12 py-10 lg:py-2.5 px-5 lg:px-8 rounded-l-3xl lg:rounded-full transition-all duration-300 ease-in-out ${bgColor} border-[1.5px] border-opacity-10 border-blue-500 ${
            isMenuOpen
              ? "fixed top-0 right-0 w-48 h-full flex flex-col justify-start py-5 shadow-lg transform translate-x-0"
              : "fixed top-0 right-0 w-0 h-full flex flex-col justify-start py-5 shadow-lg transform translate-x-full"
          }`}
        >
          {/* Menu Icon (Close) */}
          <div className="h-[60px]">
            <div
              className={`lg:hidden py-[5px] px-2 flex justify-center items-center backdrop-blur-[10px] bg-white rounded-full border-[1.5px] border-opacity-10 border-blue-500`}
              onClick={toggleMenu}
            >
              <button className="text-1xl nunito-bold text-blue-500">
                close
              </button>
              <div
                className={`absolute h-[28px] right-[4px] shadow-sm w-[28px] rounded-full ${bgColor} border-[1px] border-opacity-10 border-blue-500 flex justify-center items-center`}
              >
                <img src={Arrow} className="w-9 rotate-180 -mr-0.5" alt="" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-grow space-y-5 mt-6">
            {links.map((link) => (
              <li
                key={link.id}
                className={`relative pl-4 hover:text-black transition-colors text-slate-600 nunito-bold lg:nunito-medium cursor-pointer ${
                  activeSection === link.id
                    ? "text-black border-l-2 border-[#021734]"
                    : ""
                }`}
                onClick={() => handleScrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </div>

          {/* Quote Container */}
          <div className="w-full mt-auto text-black nunito-bold text-[14px] text-center">
            Let's Tune Yourself! ✨
          </div>
        </ul>
        {/* Desktop View Nav Link */}
        <ul
          className={`hidden lg:flex gap-x-9 ml-12 py-2 px-8 rounded-full transition-colors duration-500 backdrop-blur-[10px] ${bgColor} border-[1.5px] border-opacity-10 border-blue-500`}
        >
          {links.map((link) => (
            <li
              key={link.id}
              className={`hover:text-black transition-colors text-slate-600 nunito-medium cursor-pointer ${
                activeSection === link.id
                  ? "border-b-1.5 border-[#021734] text-black"
                  : ""
              }`}
              onClick={() => handleScrollToSection(link.id)}
            >
              {link.name}
            </li>
          ))}
        </ul>
        {/* Button Section */}
        <a href="#about" className="hidden lg:block">
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
            Let's Tune!
            <img className="w-6 -ml-3 animate-left-right" src={Code} alt="" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
