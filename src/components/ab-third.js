import React, { useEffect } from "react";

const AbThird = () => {
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
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-x-20 gap-y-9 my-10 py-10 px-10 md:px-36 md:py-20">
      <div className="w-full md:w-1/2 pr-0 ">
        <div>
          <img
            className="header-image-0 h-80 w-full bg-white rounded-tl-3xl object-cover"
            src="https://codeop.tech/wp-content/uploads/2022/09/women-in-coding-e1664430458975.jpg"
            alt="coding-girl"
          ></img>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
        <p className="heading-text-1 text-start text-white text-2xl tracking-wide font-bold pb-6">
          {" "}
          Our Mission
        </p>
        <p className="heading-text-1 text-start text-white font-semibold text-4xl tracking-wider pb-5">
          {" "}
          <span className="text-cyan-700"> Your success</span> is our mission
        </p>
        <p className="heading-text-2 text-start text-white font-semibold text-lg tracking-wide pb-6">
          {" "}
          At AS Tech International, we combine talented people with an
          unwavering commitment to the success of our customers.
        </p>
        <p className="heading-text-2 text-start text-white font-normal tracking-wider text-sm">
          {" "}
          We are fanatics of how to design, build, and validate new ideas in
          better ways. We use those learnings to help our customers innovate
          faster and teams perform better. More than 90% of our business comes
          through referrals because we've proven time and again that we don't
          let customers down.
        </p>
      </div>
    </div>
  );
};

export default AbThird;
