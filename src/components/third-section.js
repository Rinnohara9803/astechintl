import React, { useEffect, useState } from "react";
import "../css/about-us.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  var dots = [];

  for (var i = 0; i < 49; i++) {
    dots.push(".");
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-image-3-active",
              "header-data-active",
              "block1-active",
              "block2-active",
              "block3-active",
              "header-box-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-image-3, .header-data, .block1, .block2, .block3, .header-box"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      // style={{ width: "100vw" }}
      className="flex flex-col md:flex-row gap-y-14 justify-between gap-x-10 bg-slate-50 py-4 px-10 md:px-36 md:py-48 relative overflow-hidden"
    >
      <div
        style={{ width: "1px" }}
        className=" bg-black absolute left-5 top-0 h-full"
      >
        <div className="h-3 w-3 rounded-full bg-black absolute -left-1.5 top-20"></div>
      </div>

      <div
        style={{ width: "1px" }}
        className=" bg-black absolute top-0 right-7 md:left-1/2 h-full hidden md:flex"
      >
        <div className="h-3 w-3 rounded-full bg-black absolute -left-1.5 top-20"></div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <p className="heading-text-1 text-sm font-normal text-orange-400 pb-4">
          {" "}
          WHO WE ARE
        </p>
        <p className="heading-text-1 text-lg font-bold text-black leading-3">
          {" "}
          Custom IT Solutions
        </p>
        <p className="heading-text-1 text-lg font-bold text-black pb-4">
          {" "}
          for your business.
        </p>

        <p className="heading-text-2 text-sm font-semibold text-gray-500 pb-3 text-start">
          {" "}
          Since 2023 our company offers top notch IT services for companies all
          over the world.{" "}
        </p>
        <p className="heading-text-1 text-sm font-normal text-gray-500 text-start">
          {" "}
          It provides solutions that develops and manages entire IT service
          delivery process, from request, to research, analysis, issue
          resolution and knowledge capture.
        </p>
        <div className="flex flex-row mt-16 items-center gap-x-5">
          <div className="block1 border border-solid border-teal-300 rounded-full h-12 w-12 flex flex-row justify-center items-center">
            <div className="border border-solid border-teal-300 rounded-full h-10 w-10 flex flex-row justify-center items-center bg-teal-200">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-teal-300"
              ></FontAwesomeIcon>
            </div>
          </div>
          <p className="block2 text-sm font-bold text-black">
            {" "}
            See How We Work
          </p>
        </div>
      </div>
      <div className="w-1/2 flex-flex-col md:relative">
        <div className="header-box h-52 w-52 md:absolute  md:left-48 md:bottom-20  border-solid border-8 border-teal-300 ml-20 mb-11"></div>
        <div className="absolute md: left-12 bottom-0 md:left-7 md:-bottom-10 grid grid-cols-7 w-28">
          {dots.map((e) => (
            <p className="header-data text-4xl text-teal-400">{e}</p>
          ))}
        </div>
        <img
          className="header-image-3 absolute left-20 bottom-6 md:left-14 md:bottom-0 h-48 w-full md:h-72 md:w-72 object-cover rounded-3xl"
          src="https://images.pexels.com/photos/7693698/pexels-photo-7693698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="team"
        ></img>
      </div>
    </div>
  );
};

export default ThirdSection;

// absolute rotate-45 left-48 bottom-20
