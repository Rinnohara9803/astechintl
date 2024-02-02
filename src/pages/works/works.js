import React, { useEffect, useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "../../css/about-me.css";
import TheHeader1 from "../../components/basic-header";
import { useDispatch } from "react-redux";
import { lineSliceActions } from "../../slices/line-slice";

const MyWorks = () => {
  const scrollRef = useRef(0);
  const myProjects = [
    {
      name: "Project 1",
      description:
        "This is project 1.",
      image:
        "",
      link: "",
    },
    {
      name: "Project 2",
      description:
        "This is project 2.",
      image: "",
      link: "",
    },
  ];

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
              "header-image-3-active",
              "header-data-active"
            );
          } else {
            entry.target.classList.remove(
              "heading-text-1-active",
              "heading-text-2-active",
              "header-image-1-active",
              "header-image-2-active",
              "header-image-3-active",
              "header-data-active"
            );
          }
        });
      },
      { threshold: 0.5, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-image-3, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="flex flex-col py-4 px-10 md:px-36 md:py-20">
      <div className="heading-text-1 text-slate-400 text-xl font-semibold">
        Our Projects | Company
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {myProjects.map((project, index) => (
          <div key={index} className="heading-text-2 relative">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={index}
                className="border border-solid border-white object-contain bg-slate-400 h-56  md:h-52 w-full hover:opacity-75 transition-opacity duration-300 cursor-pointer p-0.5"
                data-tooltip-id={`my-tooltip${index}`}
              />
            </a>
            <ReactTooltip
              id={`my-tooltip${index}`}
              style={{ width: "400px", background: "gray", opacity: "0.9" }}
              place="bottom"
              clickable={true}
              variant="info"
              className="z-10 "
            >
              <div className="flex flex-col">
                <p className="text-lg font-semibold"> {project.name}</p>
                <p>{project.description}</p>
              </div>
            </ReactTooltip>
          </div>
        ))}
      </div>

      {/* second-section */}
      {/* <MyAcademicProjects /> */}
    </div>
  );
};

export default MyWorks;
