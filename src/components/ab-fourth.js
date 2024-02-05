import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSmile,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../css/animate-text.css";

const AbFourth = () => {
  const [yopValue, setyopValue] = useState(0);
  const [spValue, setspValue] = useState(0);
  const [scValue, setscValue] = useState(0);
  const [rcValue, setrcValue] = useState(0);

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

    const updateValue = () => {
      setyopValue((prevValue) => {
        if (prevValue < 2) {
          return prevValue + 1;
        }
        return prevValue;
      });
    };

    const updateValue1 = () => {
      setspValue((prevValue) => {
        if (prevValue < 10) {
          return prevValue + 1;
        }
        return prevValue;
      });
    };

    const updateValue2 = () => {
      setscValue((prevValue) => {
        if (prevValue < 12) {
          return prevValue + 1;
        }
        return prevValue;
      });
    };

    const updateValue3 = () => {
      setrcValue((prevValue) => {
        if (prevValue < 80) {
          return prevValue + 1;
        }
        return prevValue;
      });
    };

    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
      );
    }

    let intervalId, intervalId1, intervalId2, intervalId3;

    const handleScroll = () => {
      const redDivElement = document.getElementById("div-ani");

      if (isElementInViewport(redDivElement)) {
        intervalId = setInterval(updateValue, 1000);
        intervalId1 = setInterval(updateValue1, 400); // Adjust the delay to control the animation speed
        intervalId2 = setInterval(updateValue2, 300);
        intervalId3 = setInterval(updateValue3, 50);
      } else {
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-slate-50 py-10 px-10 md:px-36 md:py-36">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
        <div
          id="div-ani"
          className="block1 flex flex-col gap-y-3 py-8 cursor-pointer  duration-300 "
        >
          <FontAwesomeIcon
            className="text-cyan-700 text-5xl"
            icon={faCalendarAlt}
          ></FontAwesomeIcon>
          <p className="text-cyan-700 text-4xl font-bold">{yopValue}+</p>
          <p className="text-black text-xl font-normal tracking-wider">
            Years of operation
          </p>
        </div>
        <div className="block2 flex flex-col gap-y-3 py-8 cursor-pointer duration-300  ">
          <FontAwesomeIcon
            className="text-cyan-700 text-5xl"
            icon={faUsers}
          ></FontAwesomeIcon>
          <p className="text-cyan-700 text-4xl font-bold">{spValue}+</p>
          <p className="text-black text-xl font-normal tracking-wider">
            Skilled Professionals
          </p>
        </div>
        <div className="block3 flex flex-col gap-y-3 py-8 cursor-pointer duration-300 ">
          <FontAwesomeIcon
            className="text-cyan-700 text-5xl"
            icon={faSmile}
          ></FontAwesomeIcon>
          <p className="text-cyan-700 text-4xl font-bold">{scValue}+</p>
          <p className="text-black text-xl font-normal tracking-wider">
            Satisfied Clients
          </p>
        </div>
        <div className="block4 flex flex-col gap-y-3 py-8 cursor-pointer duration-300 ">
          <FontAwesomeIcon
            className="text-cyan-700 text-5xl"
            icon={faUser}
          ></FontAwesomeIcon>
          <p className="text-cyan-700 text-4xl font-bold">{rcValue}%</p>
          <p className="text-black text-xl font-normal tracking-wider">
            Repeat Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbFourth;
