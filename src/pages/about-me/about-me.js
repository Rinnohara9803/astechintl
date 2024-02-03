import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import codingBoy from "../../images/coding-boy.png";
import "../../css/about-me.css";
import { useDispatch } from "react-redux";
import { lineSliceActions } from "../../slices/line-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSmile,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import TeamMember from "../../components/team-member";
import manav from "../../images/manav.jpg";

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
              "header-image-0-active",
              "header-image-1-active",
              "header-image-2-active",
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
      ".heading-text-1, .heading-text-2, .header-image-0, .header-image-1, .header-image-2, .header-data, .block1, .block2, .block3, .block4"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    // window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="flex flex-col py-4 px-10 md:px-36 md:py-20">
      <div className="flex flex-col-reverse md:flex-row gap-y-14">
        <div className="flex flex-col w-full md:w-3/5 items-start justify-between">
          <p className="heading-text-1 text-white font-bold leading-10 text-3xl mb-4 text-start tracking-wider">
            {" "}
            YOU IMAGINE / WE BUILD
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
      <div
        style={{ height: "1px" }}
        className="h-0.5 my-9 w-full bg-white"
      ></div>
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
      <div
        style={{ height: "1px" }}
        className="h-0.5 my-9 w-full bg-white"
      ></div>

      {/* thesection */}
      <div className="flex flex-col md:flex-row md:items-center gap-x-20 gap-y-9 md:px-0 my-10">
        <div className="w-full md:w-1/2 pr-0 ">
          <div>
            <img
              className="header-image-0 h-80 w-full bg-white rounded-tl-3xl object-cover"
              src="https://codeop.tech/wp-content/uploads/2022/09/women-in-coding-e1664430458975.jpg"
              alt="coding-girl"
            ></img>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
          <p className="heading-text-1 text-start text-white text-2xl tracking-wide font-bold pb-6">
            {" "}
            Our Mission
          </p>
          <p className="heading-text-1 text-start text-white font-semibold text-4xl tracking-wider pb-5">
            {" "}
            <span className="text-cyan-700"> Your success</span> is our mission
          </p>
          <p className="heading-text-2 text-start text-white font-semibold text-lg tracking-wide pb-6">
            {" "}
            At AS Tech International, we combine talented people with an
            unwavering commitment to the success of our customers.
          </p>
          <p className="heading-text-2 text-start text-white font-normal tracking-wider text-sm">
            {" "}
            We are fanatics of how to design, build, and validate new ideas in
            better ways. We use those learnings to help our customers innovate
            faster and teams perform better. More than 90% of our business comes
            through referrals because we've proven time and again that we don't
            let customers down.
          </p>
        </div>
      </div>
      <div style={{ height: "1px" }} className="w-full  bg-white"></div>

      {/* thesection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20 w-full">
        <div className="block1 flex flex-col gap-y-3 border border-solid border-white hover:bg-cyan-700 hover:border-cyan-700 rounded-md py-8 hover:scale-105 cursor-pointer  duration-300 hover:shadow-md hover:shadow-slate-300">
          <FontAwesomeIcon
            className="text-slate-100 text-5xl"
            icon={faCalendarAlt}
          ></FontAwesomeIcon>
          <p className="text-slate-100 text-3xl font-bold">2+</p>
          <p className="text-white text-xl font-normal tracking-wider">
            Years of operation
          </p>
        </div>
        <div className="block2 flex flex-col gap-y-3 hover:bg-violet-700 hover:border-violet-700 border border-solid border-white rounded-md py-8 hover:scale-105 cursor-pointer duration-300 hover:shadow-md hover:shadow-slate-300 ">
          <FontAwesomeIcon
            className="text-slate-100 text-5xl"
            icon={faUsers}
          ></FontAwesomeIcon>
          <p className="text-slate-100 text-3xl font-bold">10+</p>
          <p className="text-white text-xl font-normal tracking-wider">
            Skilled Professionals
          </p>
        </div>
        <div className="block3 flex flex-col gap-y-3 hover:bg-red-700 hover:border-red-700 border border-solid border-white rounded-md py-8 hover:scale-105 cursor-pointer duration-300 hover:shadow-md hover:shadow-slate-300">
          <FontAwesomeIcon
            className="text-slate-100 text-5xl"
            icon={faSmile}
          ></FontAwesomeIcon>
          <p className="text-slate-100 text-3xl font-bold">12+</p>
          <p className="text-white text-xl font-normal tracking-wider">
            Satisfied Clients
          </p>
        </div>
        <div className="block4 flex flex-col gap-y-3 hover:bg-green-700 hover:border-green-700 border border-solid border-white rounded-md py-8 hover:scale-105 cursor-pointer duration-300 hover:shadow-md hover:shadow-slate-300">
          <FontAwesomeIcon
            className="text-slate-100 text-5xl"
            icon={faUser}
          ></FontAwesomeIcon>
          <p className="text-slate-100 text-3xl font-bold">80%</p>
          <p className="text-white text-xl font-normal tracking-wider">
            Repeat Customers
          </p>
        </div>
      </div>
      <div style={{ height: "1px" }} className="w-full  bg-white"></div>

      {/* thesection */}
      <div className="flex flex-col my-10 justify-center items-center">
        <p className="heading-text-1 text-2xl font-bold text-white tracking-wider">
          {" "}
          Our Team{" "}
        </p>
        <div className="heading-text-2 h-1 w-16 bg-white mt-2 text-center"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-10 gap-y-20">
          <TeamMember
            name="Manav Koirala"
            img={manav}
            jobTitle="React Native Developer"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            lnlink="https://www.facebook.com/yuhi.yauna.3"
          ></TeamMember>
          <TeamMember
            name="Manav Koirala"
            img={manav}
            jobTitle="React Native Developer"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            lnlink="https://www.facebook.com/yuhi.yauna.3"
          ></TeamMember>
          <TeamMember
            name="Manav Koirala"
            img={manav}
            jobTitle="React Native Developer"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
            lnlink="https://www.facebook.com/yuhi.yauna.3"
          ></TeamMember>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
