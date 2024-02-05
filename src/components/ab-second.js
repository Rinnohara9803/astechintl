import React, { useEffect } from "react";

const AbSecond = () => {
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
    <div className="bg-slate-50 px-10 md:px-36 md:py-20 py-10">
      <div className="flex flex-col md:flex-row gap-y-10 justify-around w-full">
        <div className="block1 flex flex-col items-center justify-center gap-y-3">
          <div className="h-20 w-20 bg-violet-700 rounded-t-full rounded-bl-2xl mb-4"></div>
          <p className="text-black text-sm font-semibold">
            {" "}
            Web Development/Hosting{" "}
          </p>
          <p className="text-sm text-black"> Simple and Shiny websites </p>
        </div>
        <div className="block2 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-red-700 rounded-tr-full rounded-bl-2xl mb-4"></div>
          <p className="text-black text-sm font-semibold"> UI/UX Design </p>
          <p className="text-sm text-black"> Minimalistic / Simple Designs </p>
        </div>
        <div className="block3 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-green-700 rounded-tr-3xl rounded-bl-3xl mb-4"></div>
          <p className="text-black text-sm font-semibold">
            {" "}
            Application Development{" "}
          </p>
          <p className="text-sm text-black">
            {" "}
            Fast and Beautiful Applications{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-10 justify-around w-full mt-10">
        <div className="block1 flex flex-col items-center justify-center gap-y-3">
          <div className="h-20 w-20 bg-teal-700 mb-4"></div>
          <p className="text-black text-sm font-semibold">
            {" "}
            Digital Marketing{" "}
          </p>
          <p className="text-sm text-black"> Strategic Online Presence </p>
        </div>
        <div className="block2 flex flex-col items-center justify-center gap-y-3">
          <div className=" h-20 w-20 bg-cyan-700 mb-4">
            <div className=" h-20 w-20 bg-cyan-700 rotate-45"></div>
          </div>
          <p className="text-black text-sm font-semibold">
            {" "}
            Blogging and Content Writing{" "}
          </p>
          <p className="text-sm text-black">
            {" "}
            Compelling Narratives, Impactful Content
          </p>
        </div>
        <div className="block3 flex flex-col items-center justify-center gap-y-3 ">
          <div className=" h-20 w-20 bg-zinc-800 mb-4 relative text-center">
            <div className=" h-5 w-20 bg-yellow-700 absolute left-0 top-0"></div>
            <div className=" h-5 w-20 bg-yellow-700 absolute bottom-0 left-0"></div>
            <div className=" h-20 w-5 bg-yellow-700 absolute top-0 right-0"></div>
            <div className=" h-20 w-5 bg-yellow-700 absolute top-0 left-0"></div>
          </div>
          <p className="text-black text-sm font-semibold">
            Business Email Hosting
          </p>
          <p className="text-sm text-black"> Professional Email Solutions</p>
        </div>
      </div>
    </div>
  );
};

export default AbSecond;
