import React, { useEffect, useRef } from "react";
import "../../css/about-us.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLadderWater,
  faLightbulb,
  faPlus,
  faStairs,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

const MyWorks = () => {
  const scrollRef = useRef(0);

  const careers = [
    {
      position: "Senior React Developer",
      type: "Full-Time",
      site: "On-site",
    },
    {
      position: "IT Project Manager",
      type: "Full-Time",
      site: "Remote",
    },
    {
      position: "QA",
      type: "Full-Time",
      site: "On-site",
    },
  ];

  const navigate = useNavigate();

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
              "header-data-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2,.header-image-0, .header-image-1, .header-image-2, .header-image-3, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="flex flex-col">
      <div
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url("https://www.insidehighered.com/sites/default/files/styles/max_650x650/public/2023-06/GettyImages-1149286339.png?itok=_5LUM18L")`,
        }}
        className="flex flex-col object-cover items-start py-9 md:py-28 px-10 md:px-36 w-full bg-gradient-to-br bg-zinc-800 relative overflow-hidden"
      >
        <div className="bg-orange-400 h-40 w-40 rounded-full absolute -right-20 top-10"></div>
        <div className="border-4 border-solid border-cyan-700 h-40 w-40 rounded-full absolute -bottom-20 right-60"></div>
        <div className="bg-black bg-opacity-40 absolute top-0 left-0 h-full w-full"></div>

        <div className=" heading-text-1 text-white font-bold text-start text-5xl tracking-wider mb-7">
          Career
        </div>
        <p className="heading-text-2 text-start text-white text-lg tracking-wider">
          Skilled Team, Friendly Environment, Flexible Hours. Strategic
          Involvements, Idea Generating Sessions.
        </p>
      </div>
      <div className="w-full bg-slate-100 flex flex-col items-start px-10 md:px-36  py-9 md:py-28">
        <p className="heading-text-1 text-start text-black text-3xl font-bold tracking-wider mb-5">
          {" "}
          Join our Team{" "}
        </p>
        <p className="heading-text-1 text-start text-black tracking-wider mb-10">
          {" "}
          At AS Tech International., we are always on the lookout for passionate
          and talented individuals to join our dynamic team. Explore our current
          job openings and find the perfect fit for your career aspirations.
        </p>
        <p className="heading-text-2 text-start text-black font-semibold text-2xl tracking-wide mb-5">
          {" "}
          Current Openings
        </p>
        <div className=" flex flex-col items-start w-full mb-7">
          {careers.map((e) => {
            return (
              <div className="header-image-0 flex flex-col  md:flex-row md:justify-between md:items-center w-full my-4">
                {" "}
                <div className="flex flex-col items-start">
                  <p className="text-black font-semibold text-lg text-start">
                    {" "}
                    {e.position}{" "}
                  </p>
                  <p className="text-cyan-700 font-normal text-sm text-start mb-5 md:mb-0">
                    {" "}
                    {e.type} , {e.site}{" "}
                  </p>
                </div>
                <div
                  onClick={() => {
                    navigate(`/join-us/${e.position}`);
                  }}
                  className="bg-slate-700 hover:bg-black text-white rounded-sm px-6 py-2 cursor-pointer transition-all ease-in-out duration-700"
                >
                  {" "}
                  Apply Now
                </div>
              </div>
            );
          })}
        </div>
        <p className="heading-text-1 text-start text-black text-3xl font-bold tracking-wider mb-5">
          {" "}
          Why work with us ?{" "}
        </p>
        <p className="heading-text-1 text-start text-black tracking-wider mb-10">
          {" "}
          We are a company that values innovation, teamwork, and dedication.
          With us, you'll have the opportunity to work on exciting projects,
          learn from industry experts, and grow your career. Plus, you'll enjoy
          a range of benefits including health insurance, flexible working
          hours, and professional development opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-5 mb-5 w-full">
          <div className="header-image-2 border border-solid border-cyan-700 flex flex-col items-start gap-y-2 px-4 py-3 rounded-lg w-full">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-start text-lg"
            ></FontAwesomeIcon>
            <p className="text-start font-semibold text-black">
              {" "}
              Innovative Environment
            </p>
            <p className="text-start text-sm text-cyan-700">
              {" "}
              Work with the latest techs and push the boundaries in your field.
            </p>
          </div>
          <div className=" header-image-2 border border-solid border-cyan-700 flex flex-col items-start gap-y-2 px-4 py-3 rounded-lg w-full">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-start text-lg"
            ></FontAwesomeIcon>
            <p className="text-start font-semibold text-black">
              {" "}
              Competitive Benefits
            </p>
            <p className="text-start text-sm text-cyan-700">
              {" "}
              We offer competitive benefits and flexible working hours.
            </p>
          </div>
          <div className=" header-image-2 border border-solid border-cyan-700 flex flex-col items-start gap-y-2 px-4 py-3 rounded-lg w-full">
            <FontAwesomeIcon
              icon={faLadderWater}
              className="text-start text-lg"
            ></FontAwesomeIcon>
            <p className="text-start font-semibold text-black">
              {" "}
              Career Growth
            </p>
            <p className="text-start text-sm text-cyan-700">
              {" "}
              We provide opportunities for career growth and advancement.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full gap-x-5">
          <div className="header-data bg-zinc-700 hover:bg-black text-white rounded-sm px-6 py-2 cursor-pointer transition-all ease-in-out duration-700">
            Learn More
          </div>
          <div className="header-data bg-cyan-700 hover:bg-black text-white rounded-sm px-6 py-2 cursor-pointer transition-all ease-in-out duration-700">
            Submit Your Resume
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
