import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonHiking,
  faPersonSkiing,
} from "@fortawesome/free-solid-svg-icons";
import "../css/about-us.css";

const HoverComp = ({ setIsHovered }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-11-active",
              "heading-text-2-active",
              "header-image-0-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-image-3-active",
              "header-data-active",
              "block1-active",
              "block2-active",
              "block3-active",
              "block4-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.3, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-11, .heading-text-2, .header-image-0, .header-image-1, .header-image-2, .header-image-3, .header-data, .block1, .block2, .block3, .block4"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="absolute md:-right-36 lg:top-10 lg:right-0 flex flex-col md:flex-col lg:flex-col h-fit">
      <div
        onClick={() => {
          setIsHovered(false);
        }}
        className="heading-text-1 flex flex-col gap-y-5 px-9 py-7 hover:bg-violet-200 items-start justify-start bg-slate-200 w-96 transition-all duration-500 ease-in-out"
      >
        <FontAwesomeIcon
          className="header-data text-cyan-700 text-4xl"
          icon={faPersonHiking}
        ></FontAwesomeIcon>
        <p className="heading-text-1 text-start text-cyan-700 text-3xl font-bold tracking-wider">
          Careers
        </p>
        <p className="heading-text-1 text-start text-black">
          {" "}
          Be a part of AS Tech and help us build future of work.
        </p>
      </div>
      <div
        onClick={() => {
          setIsHovered(false);
        }}
        className="heading-text-11 flex flex-col gap-y-5 px-9 py-7 hover:bg-violet-200 items-start justify-start bg-slate-200 w-96 transition-all duration-500 ease-in-out"
      >
        <FontAwesomeIcon
          className="header-data text-cyan-700 text-4xl"
          icon={faPersonSkiing}
        ></FontAwesomeIcon>
        <p className="heading-text-11 text-start text-cyan-700 text-3xl font-bold tracking-wider">
          Internships
        </p>
        <p className="heading-text-11  text-start text-black">
          {" "}
          Be a part of AS Tech and experience exciting and impactful mentorship.
        </p>
      </div>
    </div>
  );
};

export default HoverComp;
