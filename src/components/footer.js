import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 shawdow sm:w-full px-10 md:px-16 flex flex-col lg:flex-row lg:justify-around py-20 md:py-10">
      {/* first */}
      <div className=" flex flex-col justify-start text-start">
        <h2 className="text-white font-semibold">AS Tech International</h2>
        <p className=" text-xs  text-white">
          Copyright @2024,{" "}
          <span className="text-slate-400 font-semibold">
            AS Tech International Pvt.Ltd
          </span>
          . All rights reserved.
        </p>
        <div className="mt-4 cursor-pointer">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="border-2 border-white px-3.5 py-2 rounded-sm hover:text-blue-500 hover:border-blue-500 text-white"
              style={{}}
            />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagram}
              className="border-2 border-white ml-2 px-3 py-2 rounded-sm hover:text-red-600 hover:border-red-600 text-white"
              style={{}}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="border-2 border-white ml-2 px-3 py-2 rounded-sm  hover:border-blue-500 hover:text-blue-500 text-white"
              style={{}}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start text-white gap-y-3 pt-5 md:pt-0">
        <div className="pb-4 flex flex-col">
          <p className="font-semibold text-lg "> Quick Links </p>
          <div className="h-0.5 w-9 bg-white mt-1"></div>
        </div>
        <p
          onClick={() => {
            navigate("/home");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          Home
        </p>

        <p
          onClick={() => {
            navigate("/about-us");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          About Us
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Blog
        </p>
        <p
          onClick={() => {
            navigate("/contact-us");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Contact Us
        </p>
      </div>

      <div className="flex flex-col justify-start items-start text-white gap-y-3 pt-5 md:pt-0">
        <div className="pb-4 flex flex-col">
          <p className="font-semibold text-lg "> Our Services </p>
          <div className="h-0.5 w-9 bg-white mt-1"></div>
        </div>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          Application Development
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Web Development
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Web Hosting
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          UI/UX Design
        </p>

        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Digital Marketing
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Blogging/Content Writing
        </p>
      </div>

      <div className="flex flex-col justify-start items-start text-white gap-y-3 pt-5 md:pt-0">
        <div className="pb-4 flex flex-col">
          <p className="font-semibold text-lg "> Work with us </p>
          <div className="h-0.5 w-9 bg-white mt-1"></div>
        </div>

        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Careers{" "}
        </p>
        <p
          onClick={() => {
            navigate("");
          }}
          className=" transition-all hover:underline cursor-pointer hover:text-gray-400"
        >
          {" "}
          Internships
        </p>
      </div>
    </div>
  );
};

export default Footer;
