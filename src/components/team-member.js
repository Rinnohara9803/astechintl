import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeamMember = ({ name, img, jobTitle, description, lnlink }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-64 w-60 relative">
        <img
          src={img}
          alt="team-member"
          className="h-64 w-60 object-cover rounded-tl-3xl"
        ></img>
        <a href={lnlink} target="_blank" rel="noopener noreferrer">
          <div className="absolute rounded-full bottom-0 -right-8 bg-slate-300 h-16 w-16 flex flex-col justify-center items-center">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-sky-500 text-3xl"
            ></FontAwesomeIcon>
          </div>
        </a>
      </div>
      <div className="w-64">
        <p className="text-2xl font-semibold tracking-wider text-slate-200 mt-4 text-start">
          {" "}
          {name}
        </p>
        <p className="text-lg font-normal tracking-wider text-slate-200 mt-2 text-start">
          {" "}
          {jobTitle}
        </p>
        <p className="text-sm font-normal tracking-wide text-white mt-2 text-start">
          {" "}
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
