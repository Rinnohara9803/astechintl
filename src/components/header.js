import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

const TheHeader = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

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
    <div className="flex flex-row justify-between top-0 bg-zinc-800 px-5 py-4 z-40 sticky border-solid border-b-2 border-teal-200">
      {showMenu && (
        <div
          onClick={() => {
            toggleMenu();
          }}
          className="fixed h-full w-full bg-black opacity-30 top-0 left-0"
        ></div>
      )}
      <div className="flex flex-row justify-start items-center gap-x-4 ">
          <img className="transition-all duration-1000 cursor-pointer hover:scale-110 h-12 w-12" src={logo} alt="logo"></img>
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
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/my-works"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                Projects
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/about-me"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                onClick={() => {
                  toggleMenu();
                }}
                to="/contact-me"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          )}
        </>
      )}
      {windowWidth >= 800 && (
        <div className="flex flex-row">
          <NavLink
            onClick={() => {}}
            to="/home"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400  border-orange-500 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {}}
            to="/my-works"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400  border-orange-500 transition-all duration-300"
            }
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => {}}
            to="/about-me"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400  border-orange-500 transition-all duration-300"
            }
          >
            About Us
          </NavLink>
          <NavLink
            onClick={() => {}}
            to="/contact-me"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400 transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TheHeader;
