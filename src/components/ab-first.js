import React, { useEffect } from "react";
import codingBoy from "../images/coding-boy.png";
import { useNavigate } from "react-router";
import "../css/about-us.css";
import '../css/animate-text.css'

const AbFirst = () => {
  const navigate = useNavigate();

  const navigateToContactMe = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
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
      ".heading-text-1, .heading-text-2, .header-image-0, .header-image-1, .header-image-2, .header-image-3, .header-data, .block1, .block2, .block3, .block4"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-y-14 py-10 px-10 md:px-36 md:py-20">
      <div className="flex flex-col w-full md:w-3/5 items-start justify-between">
        <p className="animated-text1  heading-text-1 text-white font-bold leading-10 text-3xl mb-4 text-start tracking-wider">
          <span>Y</span>
          <span>O</span>
          <span>U</span>
          <span> </span>
          <span>I</span>
          <span>M</span>
          <span>A</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
          <span>E</span>
          <span> </span>
          <span>/</span>
          <span> </span>
          <span>W</span>
          <span>E</span>
          <span> </span>
          <span>B</span>
          <span>U</span>
          <span>I</span>
          <span>L</span>
          <span>D</span>
        </p>
        <p className="heading-text-2 text-white font-semibold text-sm text-start tracking-wide">
          {" "}
          We don't just deliver a solution, we help you project a future with
          it. A Future with unprecedented technology. Transform your digital
          landscape and pioneer the future of technology with our solutions –
          where innovation meets seamless functionality for a tech-forward
          tomorrow.
        </p>
        <div className="flex flex-row justify-start gap-x-5">
          <button
            onClick={navigateToContactMe}
            className="header-data mt-7 text-start rounded-tr-xl rounded-bl-xl bg-white text-black text-sm font-semibold px-7 py-2.5 hover:border-solid hover:border-black hover:text-white hover:bg-black transition-all ease-in-out duration-700"
          >
            {" "}
            Contact Us
          </button>
          <button className="header-data mt-7 text-start rounded-sm bg-white text-black text-sm font-semibold px-7 py-2.5 hover:border-solid hover:border-black hover:text-white hover:bg-black transition-all ease-in-out duration-700">
            {" "}
            Get me a quote
          </button>
        </div>
      </div>
      <div className="w-full md:2/5 flex flex-row justify-center md:justify-center">
        <div className=" h-40 w-48 md:h-72 md:w-48 bg-slate-200 rounded-r-full md:rounded-t-full relative">
          <img
            className="header-data absolute -bottom-9 -left-10 md:left-0 md:right-0"
            src={codingBoy}
            alt="coding-boy"
          />
          <div className="header-image-1 absolute -bottom-5 -left-5 md:-left-10 md:bottom-12 h-14 w-20 bg-cyan-700 rounded-tr-2xl rounded-bl-2xl"></div>
          <div className="header-image-2 absolute md:-right-10 md:top-20 top-5 -right-6 h-16 w-16 bg-yellow-700 rounded-tr-full rounded-bl-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default AbFirst;
