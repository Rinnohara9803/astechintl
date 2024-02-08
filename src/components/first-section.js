import React, { useEffect, useState } from "react";
import "../css/about-us.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../css/animate-text.css";

const FirstSection = () => {
  const navigate = useNavigate();
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
              "header-data-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-image-3, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="flex flex-col md:flex-row gap-x-5 lg:flex-row py-4 px-10 md:px-16 lg:px-36 md:py-20 pb-10  relative ">
      <div
        style={{ width: "1px" }}
        className=" bg-teal-200 absolute left-5 top-0 h-full"
      >
        <div className="h-3 w-3 rounded-full bg-teal-200 absolute -left-1.5 top-20"></div>
      </div>

      <div
        style={{ width: "1px" }}
        className=" bg-teal-200 absolute top-0 right-7 md:left-1/2 h-full hidden md:flex"
      >
        <div className="h-3 w-3 rounded-full bg-teal-200 absolute -left-1.5 top-20"></div>
      </div>
      <img
        style={{
          height: windowWidth <= 1024 ? "400px" : "600px",
          width: windowWidth <= 1024 ? "200px" : "400px",
        }}
        className="header-image-1 absolute object-cover right-0 top-10 rounded-tl-3xl rounded-bl-3xl bg-white z-10 hidden md:flex"
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
        alt="company"
      ></img>
      <div className=" sm:w-full md:w-1/2 flex flex-col items-start">
        <p className="animated-text2 heading-text-1 text-2xl font-semibold text-white tracking-wider">
          <span>I</span>
          <span>n</span>
          <span>n</span>
          <span>o</span>
          <span>v</span>
          <span>a</span>
          <span>t</span>
          <span>e</span>
          <span> </span>
          <span>b</span>
          <span>e</span>
          <span>t</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <span>,</span>
        </p>
        <p className="animated-text2 heading-text-1 text-3xl font-bold text-cyan-700 py-3">
          <span>f</span>
          <span>a</span>
          <span>s</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
        </p>

        <p className="text-start heading-text-2 text-sm font-semibold text-white">
          {" "}
          We provide outsourced IT services for Individuals & Companies.
        </p>
        <div className="flex flex-row justify-start gap-x-5">
          <button className="header-data mt-7 text-start rounded-sm bg-zinc-800 text-white text-sm font-semibold px-7 py-2.5 border border-solid border-white hover:border-orange-400  hover:text-white hover:bg-orange-400 transition-all ease-in-out duration-700">
            Learn more
            <FontAwesomeIcon
              className="pl-4"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </button>
          <button className="header-data mt-7 text-start rounded-sm bg-zinc-800 text-white text-sm font-semibold px-7 py-2.5 border border-solid border-white hover:border-orange-400  hover:text-white hover:bg-orange-400 transition-all ease-in-out duration-700">
            Get in Touch
            <FontAwesomeIcon
              className="pl-4"
              icon={faArrowRight}
            ></FontAwesomeIcon>
          </button>
        </div>
        <p className="heading-text-1 text-sm font-semibold text-white mt-20 md:mt-40 text-start">
          Our team is your trusted partner in offering the best suitable
          solutions for your business. Just get in touch. It's that simple...
        </p>
      </div>

      <div className="sm:w-full hidden md:flex md:w-1/2 flex-row justify-start md:justify-center  relative">
        <div className="header-data absolute left-7 top-7 grid grid-cols-7 w-60">
          {dots.map((e) => (
            <p className="text-4xl text-white">{e}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
