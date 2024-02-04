import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

const TheServices = ({ icon, title, description }) => {
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
      { threshold: 0.2, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-0, .header-image-1, .header-image-2, .header-image-3,  .header-data, .block1, .block2, .block3, .block4"
    );
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="header-data flex flex-col justify-start items-start gap-y-6">
      <FontAwesomeIcon
        className="text-3xl text-cyan-700"
        icon={icon}
      ></FontAwesomeIcon>
      <p className="text-start text-2xl font-semibold tracking-wider text-cyan-700">
        {" "}
        {title}
      </p>
      <p className="text-start text-black tracking-wide"> {description} </p>
    </div>
  );
};

export default TheServices;
