import React, { useEffect, useState } from "react";
import js from "../images/js.png";
import flutter from "../images/flutter.png";
import firebase from "../images/firebase.png";
import node from "../images/node.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import Slider from "react-slick";
import "../css/about-me.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/about-me.css";

const FourthSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const myExpertises = [
    { expertise: "React", image: react },
    { expertise: "Flutter", image: flutter },
    { expertise: "Firebase", image: firebase },
    { expertise: "Node JS", image: node },
    { expertise: "Tailwind", image: tailwind },
    { expertise: "Javascript", image: js },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: windowWidth < 800 ? 1 : 4,
    slidesToScroll: 1,
  };

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
              "header-data-active",
              
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
    <div className="flex flex-col bg-zinc-800 py-4 pt-16 px-10 md:px-36 md:py-20 justify-center">
      <p className="header-image-3 text-white font-semibold text-3xl  pb-4 text-center">
        {" "}
        Our Tools and Technologies
      </p>
      <div className="header-data flex flex-row justify-center pb-7">
        <div className="header-image-3 h-1 w-20 bg-teal-300 "></div>
      </div>
      <div className="header-image-3">
      <Slider {...settings}>
        {myExpertises.map((expertise, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-row justify-center">
              {" "}
              <img
                src={expertise.image}
                alt={expertise.image}
                className="h-24 w-fit"
              ></img>
            </div>
            <div className="text-white text-center pt-4 font-semibold">
              {" "}
              {expertise.expertise}
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
};

export default FourthSection;
