import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalculator,
  faPersonHiking,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import HoverComp from "./hover-comp";

const TheHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close the menu when the window is resized
      setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-row justify-between items-center top-0 bg-zinc-800 px-5 py-4 z-40 sticky  shadow-white shadow-sm">
      {isHovered && (
        <div
          onClick={() => {
            setIsHovered(false);
          }}
          className="fixed h-full w-full bg-black opacity-30 top-0 left-0"
        ></div>
      )}
      {showMenu && (
        <div
          onClick={() => {
            toggleMenu();
          }}
          className="fixed h-full w-full bg-black opacity-30 top-0 left-0"
        ></div>
      )}
      <div className="flex flex-row justify-start items-center gap-x-4 ">
        <img
          className="transition-all duration-1000 cursor-pointer hover:scale-110 h-12 w-12"
          src={logo}
          alt="logo"
        ></img>
        <div className="flex flex-col font-semibold items-start tracking-wider">
          <p className="text-cyan-700">
            AS <span className="text-slate-300">Tech</span>{" "}
          </p>
          <p className="text-cyan-700"> International</p>
        </div>
      </div>

      {windowWidth < 800 && (
        <>
          <div className=" mt-1.5 pr-4">
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl cursor-pointer duration-500 ease-in-out text-white hover:text-slate-400 transition-all"
              style={{
                transform: showMenu ? "rotate(-90deg)" : "rotate(0deg)",
              }}
              onClick={toggleMenu}
            />
          </div>
          {windowWidth < 800 && (
            <div
              style={{
                transition: "all 0.6s ease",
                height: showMenu ? "150px" : "0px",
              }}
              className={`flex flex-col bg-zinc-800 overflow-hidden items-center justify-around absolute top-14 right-10 shadow-sm  px-5  rounded-md transition-all duration-200 ease-in-out`}
            >
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/home"
                className="text-white hover:text-cyan-400 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/join-us"
                className="text-white hover:text-cyan-400 transition-all duration-300"
              >
                Join Us
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/about-us"
                className="text-white hover:text-cyan-400 transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/contact-us"
                className="text-white hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          )}
        </>
      )}
      {windowWidth >= 800 && (
        <div className="flex flex-row items-center gap-x-2 md:gap-x-4 lg:gap-x-7">
          <NavLink
            to="/home"
            className={(navData) =>
              navData.isActive
                ? "tracking-wider mr-7 text-cyan-600 font-semibold hover:text-cyan-400 transition-all duration-300"
                : "tracking-wider mr-7 text-white hover:text-cyan-400  border-cyan-500 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onClick={() => {
              setIsHovered(false);
            }}
            to="/join-us"
            className={(navData) =>
              navData.isActive
                ? "tracking-wider mr-7 text-cyan-600 font-semibold hover:text-cyan-400 transition-all duration-300 relative"
                : "tracking-wider mr-7 text-white hover:text-cyan-400  border-cyan-500 transition-all duration-300 relative"
            }
          >
            Join Us
            {isHovered && <HoverComp setIsHovered={setIsHovered}></HoverComp>}
          </NavLink>

          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive
                ? "tracking-wider mr-7 text-cyan-600 font-semibold hover:text-cyan-400 transition-all duration-300"
                : "tracking-wider mr-7 text-white hover:text-cyan-400  border-cyan-500 transition-all duration-300"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={(navData) =>
              navData.isActive
                ? "flex flex-row justify-center items-center gap-x-4 tracking-wider mr-7 text-white font-semibold hover:bg-black transition-all duration-1000 bg-cyan-700 px-5 py-3"
                : "flex flex-row justify-center items-center gap-x-4 tracking-wider mr-7 text-white  transition-all duration-300 bg-cyan-700 px-5 py-3 hover:bg-black"
            }
          >
            <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>
            <p> Contact Us</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TheHeader;
