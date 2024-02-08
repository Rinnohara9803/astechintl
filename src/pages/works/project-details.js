import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../css/about-us.css";

const ProjectDetails = () => {
  //   const { projectname } = useParams();
  const scrollRef = useRef(0);

  const location = useLocation();

  const projectData = location.state;

  useEffect(() => {
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
      { threshold: 0.2, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-1, .header-image-2, .header-image-3, .header-data"
    );
    hiddenElements.forEach((el) => observer.observe(el));
    window.scrollTo(0, scrollRef.current);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-y-4">
        <p className="heading-text-1 text-2xl text-yellow-500 font-semibold">
          {" "}
          {projectData.name}
        </p>
        <div className="flex flex-row gap-x-4">
          {projectData.projectGenre.map((genre) => (
            <div className="header-data text-black bg-white px-3 py-1 rounded-sm text-sm font-semibold hover:bg-black hover:text-white transition-all duration-700 ease-out cursor-pointer">
              {" "}
              {genre}{" "}
            </div>
          ))}
        </div>
      </div>
      <p className="heading-text-2 text-white text-sm my-5">
        {" "}
        {projectData.description}{" "}
      </p>
      <p className="heading-text-1 text-lg text-yellow-500 pb-5 font-semibold">
        {" "}
        Showcases:{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projectData.images.map((image) => (
          <div className="header-image-1 flex flex-row justify-center">
            <img
              className="object-contain"
              src={image}
              alt={projectData.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
