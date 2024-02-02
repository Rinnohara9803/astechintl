import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  //   faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const GetInTouch = () => {
  const emailAddress = "astechinternational111@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="flex flex-col pt-28 py-4 px-10 md:px-36 md:py-20">
      <div className="relative overflow-hidden h-28 w-full bg-slate-700 mb-9 rounded-lg flex flex-row justify-center items-center gap-x-4 md:gap-x-20 px-2">
        <p className="text-white font-bold"> Say Hello to Us !</p>
        <button
          onClick={handleEmailClick}
          className=" px-6 py-1.5 border-2 flex flex-row items-center justify-center gap-x-2  border-solid border-yellow-500 text-yellow-500 rounded-md font-semibold hover:text-black hover:bg-yellow-500 transition-all ease-in "
        >
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
          <p> Email Us</p>
        </button>
        <div className=" absolute left-4  md:left-80 blur-sm top-3 -rotate-45 border-yellow-500 border-2 h-24 w-24 "></div>
        <div className=" absolute left-6 md:left-96 top-7 blur-sm -rotate-3 border-yellow-500 border-2 h-16 w-16 "></div>
        <div className=" absolute bottom-14 -right-3 blur-sm -rotate-45 border-yellow-500 border-2 h-10 w-10 "></div>
      </div>
      <p className="text-xl font-semibold text-white text-start"> Get in Touch!</p>
      <p className="text-sm text-white pt-2 text-start">
        {" "}
        For business inquiry, please send email to{" "}
        <span className="text-yellow-500 underline hover:cursor-pointer">
          {" "}
          astechinternational111@gmail.com{" "}
        </span>
      </p>
      <div className="flex flex-row gap-x-2 pt-4">
        <a
          href="https://www.facebook.com/profile.php?id=100008867498604"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="cursor-pointer hover:text-blue-600 hover:border-blue-600 border border-solid border-white rounded-sm text-center text-white text-lg py-2.5 px-3"
            icon={faFacebookF}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.instagram.com/rin.nohara9803/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="cursor-pointer hover:text-orange-600 hover:border-orange-600 border border-solid border-white rounded-sm text-center text-white text-lg p-2.5"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/sagarprajapati9803/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="cursor-pointer hover:text-sky-400 hover:border-sky-400 border border-solid border-white rounded-sm text-center text-white text-lg p-2.5"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
