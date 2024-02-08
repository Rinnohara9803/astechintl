import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const TheHeader1 = () => {
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
    <div className="flex flex-row justify-between  top-0 bg-zinc-800 px-5 py-4 z-20 sticky">
      
      {showMenu && (
        <div
          onClick={toggleMenu}
          className="fixed h-full w-full bg-black opacity-30 top-0 left-0"
        ></div>
      )}
      <div className="border-2 border-yellow-500 ml-5 px-2 py-1 text-yellow-500 hover:scale-105 cursor-pointer transition-all duration-700">
        AS
      </div>
      {windowWidth < 800 && (
        <>
          <div className=" mt-1.5 pr-4">
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl cursor-pointer duration-500 ease-in-out hover:text-white transition-all"
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
                onClick={toggleMenu}
                to="/home"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                Home
              </Link>
              <Link
                onClick={toggleMenu}
                to="/my-works"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                Projects
              </Link>
              <Link
                onClick={toggleMenu}
                to="/about-us"
                className="text-white hover:text-orange-400 transition-all duration-300"
              >
                About Me
              </Link>
              <Link
                onClick={toggleMenu}
                to="/contact-us"
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
            to="/home"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 border-b-4  border-orange-500 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400 hover:border-b-4 border-b-0 border-orange-500 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-works"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 border-b-4  border-orange-500 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400 hover:border-b-4 border-b-0 border-orange-500 transition-all duration-300"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 border-b-4  border-orange-500 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400 hover:border-b-4 border-b-0 border-orange-500 transition-all duration-300"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={(navData) =>
              navData.isActive
                ? "mr-7 text-orange-500 hover:text-orange-400 border-b-4  border-orange-500 transition-all duration-300"
                : "mr-7 text-white hover:text-orange-400 hover:border-b-4 border-b-0 border-orange-500 transition-all duration-300"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TheHeader1;
