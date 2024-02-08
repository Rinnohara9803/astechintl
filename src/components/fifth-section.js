import React, { useEffect, useState } from "react";
import "../css/about-us.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/about-us.css";
import Questions from "./question";

const FifthSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="flex flex-col bg-slate-50 py-10 pt-16 px-10 md:px-36 md:py-32 justify-center">
      <p className="header-image-3 text-zinc-800 font-semibold text-3xl  pb-4 text-center">
        {" "}
        Frequently Asked Questions
      </p>
      <div className="header-image-3 flex flex-row justify-center pb-7">
        <div className="header-image-3 h-1 w-20 bg-zinc-800 "></div>
      </div>
      <div className="mt-10 text-start">
        <div className="header-image-3 w-full sm:text-sm">
          <Questions
            question={"What is the AS Tech International all about ?"}
            answer={
              "The AS Tech International, has a group of qualified and innovative IT personalities working in the field of Software Development, Database Management System, System Programming, Web-Based Programming, Web Application Development and many more."
            }
          />
          <Questions
            question={"What do the AS Tech International offer ?"}
            answer={
              "The AS Tech International offers the tech services such as, web designing and development, web hosting, application development, blogging, content writing, digital marketing and many more."
            }
          />
          <Questions
            question={"Why to choose the AS Tech International ?"}
            answer={
              "There are a lot of companies into the computer science and technology sector but the AS Tech International is different and unique from all. We prioritize the clients and work to meet their desires and necessities. Our aim is to satisfy the needs and requirements of the clients by delivering the secured and quality products."
            }
          />
          <Questions
            question={"How can I contact the AS Tech International ?"}
            answer={
              "You can directly email or can call the member of the AS Tech International in case of any queries. The contact details are present in the website itself."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
