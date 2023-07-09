import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import "./Navbar.css";
import resume from "../../assets/Resume/RESUME_Rajat_2023.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="bg-[#F8F9FA] shadow-sm fixed-top">
        <div className="xl:max-w-[78rem] 2xl:max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="/">
                  <span className="text-[2.2rem] font-semibold text-gray-800 LogoName">
                    RAJAT
                  </span>
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="hidden lg:ml-6 lg:flex lg:space-x-2 lg:flex-row lg:justify-center lg:items-center">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "home" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>

                {/* <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-gray-600 px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "home" &&
                    "border-b-2 border-gray-800 transition-all duration-300"
                  }`}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link> */}
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "about" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="middlesection"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "middlesection" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("middlesection")}
                >
                  What I do ?
                </Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "skills" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("skills")}
                >
                  Skills
                </Link>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "experience" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("experience")}
                >
                  Experience
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "projects" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("projects")}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="achievements"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "achievements" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("achievements")}
                >
                  Achievements
                </Link>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "portfolio" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Portfolio
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-1 lg:px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "contact" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
                <div className="flex justify-end">
                  <a href={resume} target="_blank" rel="noreferrer">
                    <button className="bg-[#9B96B3] hover:bg-[#695ab3] text-white font-bold py-2 px-4 rounded">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                onClick={toggleNavbar}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {(ref) => (
            <div className="lg:hidden" ref={ref}>
              <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "home" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>

                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "about" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="middlesection"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "middlesection" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("middlesection")}
                >
                  What I do ?
                </Link>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "skills" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("skills")}
                >
                  Skills
                </Link>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "experience" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("experience")}
                >
                  Experience
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "projects" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("projects")}
                >
                  Projects
                </Link>
                <Link
                  activeClass="active"
                  to="achievements"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "achievements" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("achievements")}
                >
                  Achievements
                </Link>
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "portfolio" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Portfolio
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={0}
                  className={`text-gray-800 hover:text-[#5a39ff] px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    activeLink === "contact" && "text-[#695ab3]"
                  }`}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
                <div className="lg:pr-8">
                  <a href={resume} target="_blank" rel="noreferrer">
                    <button className="bg-[#9B96B3] hover:bg-[#695ab3] text-white font-bold py-2 px-4 rounded">
                      Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
