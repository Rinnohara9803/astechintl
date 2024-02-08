import React, { useState, useEffect, useRef } from "react";
import "../../css/about-us.css";
import "../../css/animate-text.css";
import ContactForm from "../../components/contact-form";

const ContactMe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const scrollRef = useRef(0);

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
      { threshold: 0.3, root: null }
    );
    const hiddenElements = document.querySelectorAll(
      ".heading-text-1, .heading-text-2, .header-image-0, .header-image-1, .header-image-2, .header-image-3, .header-data, .block1, .block2, .block3, .block4"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.scrollTo(0, scrollRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      // scrollRef.current = window.scrollY;
    };
  }, []);

  return (
    <div className="flex flex-col items-start pt-4 md:pt-20">
      <div className="px-10 md:px-36">
        <p className="heading-text-1 text-white text-start text-2xl tracking-wider font-semibold mb-5">
          {" "}
          Contact Us
        </p>
        <p className="animated-text3 text-white text-start tracking-widest font-bold text-3xl mb-6">
          <span>B</span>
          <span>u</span>
          <span>i</span>
          <span>l</span>
          <span>d</span>
          <span> </span>
          <span>t</span>
          <span>o</span>
          <span>g</span>
          <span>e</span>
          <span>t</span>
          <span>h</span>
          <span>e</span>
          <span>r</span>
          <span> </span>
          <span>w</span>
          <span>i</span>
          <span>t</span>
          <span>h</span>
          <span> </span>
          <span>u</span>
          <span>s</span>
        </p>
        <p className="heading-text-2 text-white text-start w-full md:w-2/3 tracking-wider">
          {" "}
          Whether you're a startup trying to launch a business or an enterprise
          looking to scale up, there's definitely something we can do for you.
        </p>
      </div>
      <div className="flex flex-col gap-y-16 lg:flex-row mt-20 items-start justify-start gap-x-12 bg-slate-100 w-full py-10 px-10 md:px-36">
        <div className="w-full md:w-full lg:w-1/2">
          <p className="heading-text-1 text-start text-cyan-800 text-2xl font-semibold tracking-wider">
            {" "}
            Simply fill up this form
          </p>
          <p className="heading-text-1 text-start text-black mt-5 tracking-wider text-sm mb-8">
            {" "}
            We will get back to you instantly to explore possible avenues where
            we could work together. You will hear from us within 24 hours.
          </p>
          <img
            alt="girl-working"
            src="https://img.freepik.com/free-photo/smiling-businesswoman-typing-laptop-sitting-cafe_197531-340.jpg"
            className="heading-text-2 rounded-br-3xl w-full h-fit object-cover"
          ></img>
        </div>
        <div className="w-full md:w-full lg:w-1/2 flex flex-col items-start">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
