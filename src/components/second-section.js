import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import puryaideu from "../images/puryaideu.jpg";
import { useNavigate } from "react-router-dom";

const SecondSection = () => {
  const navigate = useNavigate();

  const myProjects = [
    {
      name: "Hajurbuwa",
      description:
        "A Nepali B2B E-commerce platform that aims to empower Nepali businesses.",
      image:
        "https://hajurbuwa-s3-bucket.s3.ap-south-1.amazonaws.com/public/og_image.png",
      link: "https://github.com/Rinnohara9803?tab=repositories",
    },
    {
      name: "Puryaideu",
      description:
        "Puryaideu provides app based solution through ride sharing within Kathmandu Valley",
      image: puryaideu,
      link: "https://github.com/Rinnohara9803?tab=repositories",
    },
  ];

  return (
    <div className="flex flex-col pt-5">
      <p className="text-white font-semibold text-xl pb-8"> My Projects </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {myProjects.map((project, index) => (
          <div key={index} className="relative">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={index}
                className="cursor-pointer border border-solid border-white object-contain bg-slate-400 h-56  md:h-52 w-full hover:opacity-75 transition-opacity duration-300 cursor-pointer p-0.5"
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
        <div
          onClick={() => {
            navigate("/my-works");
          }}
          className="cursor-pointer flex flex-row  justify-center items-center border border-solid border-white bg-white opacity-30 h-56  md:h-52 w-full hover:bg-black transition-all ease-in-out duration-700 hover:text-white"
        >
          <p className="text-sm font-semibold pr-2"> See More</p>
          <p className="font-bold text-sm">{">>"}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
