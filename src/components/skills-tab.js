import React, { useState, useEffect } from "react";
import TheServices from "./service";
import {
  faBug,
  faCloud,
  faComputer,
  faDatabase,
  faInfinity,
  faMobileAlt,
  faPencilSquare,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";
import Stacks from "./stacks";
import "../css/about-me.css";

const SkillsTab = () => {
  const [selectedTab, setSelectedTab] = useState("What we build");

  const [isFixed, setIsFixed] = useState(true);

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
              "header-image-2-active"
            );
          } else {
          }
        });
      },
      { threshold: 0.3, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-0, .header-image-1, .header-image-2"
    );

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.bottom - 90 > 0 &&
        rect.top - 90 <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    const handleScroll = () => {
      const redDivElement = document.getElementById("div-red");

      if (isElementInViewport(redDivElement)) {
        console.log("Element is in the viewport");
        setIsFixed(true);
      } else {
        console.log("Element is not in the viewport");
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-slate-100 md:py-20 pb-10 pt-16">
      <p className="header-image-2 tracking-widest font-semibold text-4xl text-black mb-10 leading-3 px-10 md:px-16 lg:px-36 ">
        {" "}
        <span className="text-cyan-700">Skills</span> at a glance
      </p>
      <p className="heading-text-2 tracking-widest font-normal text-xl text-black mb-16 px-10 md:px-16 lg:px-36 ">
        {" "}
        We support breadth of technologies, best practice, use cases and
        industries. Here are some of them{" "}
      </p>
      <div
        className={` flex bg-slate-100 text-black flex-row justify-center gap-x-20 z-20 pt-4 px-10 md:px-16 lg:px-36 w-full border-b-2 border-black overflow-x-auto  ${
          isFixed ? "sticky top-20" : "sticky top-0"
        }`}
      >
        <p
          onClick={() => {
            setSelectedTab("What we build");
          }}
          className={`text-black tracking-wider cursor-pointer text-xl pb-3 ${
            selectedTab === "What we build"
              ? "border-b-4 font-semibold  text-cyan-700"
              : "border-b-0"
          } border-b-cyan-700`}
        >
          {" "}
          What we build
        </p>
        <p
          onClick={() => {
            setSelectedTab("Technology-Stacks");
          }}
          className={`text-black tracking-wider cursor-pointer text-xl pb-3 ${
            selectedTab === "Technology-Stacks"
              ? "border-b-4 font-semibold text-cyan-700"
              : "border-b-0"
          } border-b-cyan-700`}
        >
          {" "}
          Technology-Stacks
        </p>
        <p
          onClick={() => {
            setSelectedTab("Practices");
          }}
          className={`text-black tracking-wider cursor-pointer text-xl pb-3 ${
            selectedTab === "Practices"
              ? "border-b-4 font-semibold text-cyan-700"
              : "border-b-0"
          } border-b-cyan-700`}
        >
          {" "}
          Practices
        </p>
      </div>
      <div id="div-red" className=" px-10 md:px-12 lg:px-24 mt-5">
        {selectedTab === "What we build" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16 mt-10">
            <TheServices
              icon={faFolderOpen}
              title="Software Development"
              description="Crafting tailored software solutions aligned with your vision, driving efficiency and innovation through precise coding."
            ></TheServices>
            <TheServices
              icon={faBug}
              title="Software Testing & QA"
              description="Ensuring impeccable software quality through rigorous testing, assuring reliability and user satisfaction with every release."
            ></TheServices>
            <TheServices
              icon={faInfinity}
              title="Infrastructure & DevOps"
              description="Building robust foundations and agile workflows for scalability and security while embracing continuous development methodologies."
            ></TheServices>
            <TheServices
              icon={faMobileAlt}
              title="Mobile and Web Development"
              description="Creating seamless digital journeys with user-centric design, marrying aesthetics and functionality for unparalleled cross-platform experiences."
            ></TheServices>
            <TheServices
              icon={faComputer}
              title="Data Science and Machine Learning"
              description="Unveiling insights from complex data landscapes, empowering strategic decisions and breakthroughs through advanced analytics and machine learning."
            ></TheServices>
            <TheServices
              icon={faUikit}
              title="UX and UI Design"
              description="Envisioning and crafting intuitive user experiences, where artistic UI meets seamless functionality, elevating brand value and user engagement."
            ></TheServices>
          </div>
        )}
        {selectedTab === "Technology-Stacks" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 mt-10 w-full items-start">
            <Stacks
              icon={faPencilSquare}
              title="Discovery and Design"
              list={[
                {
                  name: "Discover",
                  stacks: ["JIRA", "Confluence", "Google Suite"],
                },
                { name: "Design", stacks: ["Figma", "Adobe Suite", "Sketch"] },
                {
                  name: "Product Analysis",
                  stacks: ["Mixpanel", "Google Analytics", "FullStory"],
                },
              ]}
            ></Stacks>
            <Stacks
              icon={faTableCells}
              title="App Dev"
              list={[
                {
                  name: "Mobile Apps",
                  stacks: ["React Native", "Flutter ", "Swift", "Kotlin"],
                },
                { name: "Web Clients", stacks: ["React", "Angular", "Vue"] },
                {
                  name: "Backend and API's",
                  stacks: [
                    "Node Js",
                    "Python",
                    "Express",
                    "Golang",
                    "Typescript",
                  ],
                },
              ]}
            ></Stacks>
            <Stacks
              icon={faCloud}
              title="Data and Cloud"
              list={[
                {
                  name: "Database",
                  stacks: ["PostgreSQL", "Oracle", "Microsoft SQl Server"],
                },
                {
                  name: "Cloud and Integration",
                  stacks: ["AWS", "Azure", "Google Cloud"],
                },
              ]}
            ></Stacks>
            <Stacks
              icon={faDatabase}
              title="Data Sciences"
              list={[
                {
                  name: "InterOps",
                  stacks: ["HL7 VR", "HL7 FHIR"],
                },
                {
                  name: "Machine Learning and Data Science",
                  stacks: ["Jupyter", "Tenserflow", "Google Cloud AutoML"],
                },
              ]}
            ></Stacks>
          </div>
        )}
        {selectedTab === "Practices" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
        )}
      </div>
    </div>
  );
};

export default SkillsTab;
