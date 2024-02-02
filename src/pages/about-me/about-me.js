import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import codingBoy from "../../images/coding-boy.png";
import "../../css/about-me.css";
import { useDispatch } from "react-redux";
import { lineSliceActions } from "../../slices/line-slice";

const AboutMe = () => {
  const scrollRef = useRef(0);

  const navigate = useNavigate();

  const navigateToContactMe = () => {
    navigate("/contact-me");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      lineSliceActions.replaceShowLine({ showLine: false, tab: "Contact" })
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-data-active",
              "block1-active",
              "block2-active",
              "block3-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.3, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-data, .block1, .block2, .block3"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="flex flex-col py-4 px-10 md:px-36 md:py-20">
      <div className="flex flex-col-reverse md:flex-row gap-y-14">
        <div className="flex flex-col w-full md:w-3/5 items-start justify-between">
          <p className="heading-text-1 text-white font-bold leading-10 text-3xl mb-4">
            {" "}
            YOU IMAGINE / WE BUILD
          </p>
          <p className="heading-text-2 text-white font-semibold text-sm">
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
      <div className="h-0.5 my-9 w-full bg-white"></div>
      <div className="flex flex-col md:flex-row gap-y-10 justify-around w-full">
        <div className="block1 flex flex-col items-center justify-center gap-y-3">
          <div className="h-20 w-20 bg-violet-700 rounded-t-full rounded-bl-2xl mb-4"></div>
          <p className="text-white text-sm font-semibold">
            {" "}
            Web Development/Hosting{" "}
          </p>
          <p className="text-sm text-white"> Simple and Shiny websites </p>
        </div>
        <div className="block2 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-red-700 rounded-tr-full rounded-bl-2xl mb-4"></div>
          <p className="text-white text-sm font-semibold"> UI/UX Design </p>
          <p className="text-sm text-white"> Minimalistic / Simple Designs </p>
        </div>
        <div className="block3 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-green-700 rounded-tr-3xl rounded-bl-3xl mb-4"></div>
          <p className="text-white text-sm font-semibold">
            {" "}
            Application Development{" "}
          </p>
          <p className="text-sm text-white">
            {" "}
            Fast and Beautiful Applications{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-10 justify-around w-full mt-10">
        <div className="block1 flex flex-col items-center justify-center gap-y-3">
          <div className="h-20 w-20 bg-teal-700 mb-4"></div>
          <p className="text-white text-sm font-semibold">
            {" "}
            Digital Marketing{" "}
          </p>
          <p className="text-sm text-white"> Strategic Online Presence </p>
        </div>
        <div className="block2 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-cyan-700 mb-4">
            <div className=" h-20 w-20 bg-cyan-700 rotate-45"></div>
          </div>
          <p className="text-white text-sm font-semibold">
            {" "}
            Blogging and Content Writing{" "}
          </p>
          <p className="text-sm text-white">
            {" "}
            Compelling Narratives, Impactful Content
          </p>
        </div>
        <div className="block3 flex flex-col items-center justify-center gap-y-3 ">
          <div className=" h-20 w-20 bg-zinc-800 mb-4 relative text-center">
            <div className=" h-5 w-20 bg-yellow-700 absolute left-0 top-0"></div>
            <div className=" h-5 w-20 bg-yellow-700 absolute bottom-0 left-0"></div>
            <div className=" h-20 w-5 bg-yellow-700 absolute top-0 right-0"></div>
            <div className=" h-20 w-5 bg-yellow-700 absolute top-0 left-0"></div>
          </div>
          <p className="text-white text-sm font-semibold">
            Business Email Hosting
          </p>
          <p className="text-sm text-white"> Professional Email Solutions</p>
        </div>
      </div>
      <div className="h-0.5 my-9 w-full bg-white"></div>
      <p className="text-center text-white text-3xl font-bold">
        Your Success is OUR
      </p>
      <p className="text-center text-white">Success</p>
      <p className="text-center text-white">
        We do not compromise on your Product.
      </p>

      {/* <MyTimeline></MyTimeline> */}
    </div>
  );
};

export default AboutMe;
