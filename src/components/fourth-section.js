import React, { useEffect, useState } from "react";
import "../css/about-us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-x-9 bg-zinc-800 px-10 md:px-16 lg:px-36 justify-center py-10">
      <div className="header-data  w-full lg:w-1/2  flex flex-row justify-center items-center relative overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/group-african-american-business-workers-600nw-2019273542.jpg"
          alt="joining-hands"
          className="header-image-3 h-fit object-cover w-full top-0 left-1/2 rounded-tr-3xl"
        ></img>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-y-7 items-start py-10">
        <p className="text-start heading-text-1 text-white tracking-wider font-semibold text-xl">
          {" "}
          The AS Tech Difference{" "}
        </p>
        <p className="heading-text-1 text-start text-white tracking-wide font-semibold text-2xl">
          {" "}
          We strive to be a{" "}
          <span className="text-cyan-700">better technology partner.</span>{" "}
        </p>
        <p className="header-image-2 text-start text-white font-semibold tracking-wide">
          {" "}
          At our core, we are a company obsessed with innovating with technology
          in the right ways.
        </p>
        <p className="header-data text-white text-start tracking-wider text-sm">
          We are 100% oriented around solving your problems and making you
          successful. If you need skilled people, we make sure they have the
          talent and nature to plug right into your team. When you have a job
          for us, we move mountains to make sure it’s done well and on time. We
          pride ourselves on earning your trust, providing demonstrable value,
          and being great at what we do - together.{" "}
        </p>
        <div onClick={() => {
          navigate('/contact-us');
        }} className="header-data flex flex-row bg-cyan-700 px-5 py-4 hover:bg-zinc-900 gap-x-5 items-center transition-all ease-in-out text-white cursor-pointer duration-700">
          <FontAwesomeIcon
            icon={faComputerMouse}
            className="text-white text-xl"
          ></FontAwesomeIcon>
          <p className="tracking-wider font-semibold"> Build with Us </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
