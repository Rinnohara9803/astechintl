import React, { useEffect, useRef } from "react";
import "../../css/about-us.css";

import AbFirst from "../../components/ab-first";
import AbSecond from "../../components/ab-second";
import AbThird from "../../components/ab-third";
import AbFourth from "../../components/ab-fourth";
import AbFifth from "../../components/ab-fifth";

const AboutMe = () => {
  const scrollRef = useRef(0);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current);
  }, []);

  return (
    <div className="flex flex-col py-4">
      <AbFirst></AbFirst>
      <AbSecond></AbSecond>
      <AbThird></AbThird>
      <AbFourth></AbFourth>
      <AbFifth></AbFifth>
    </div>
  );
};

export default AboutMe;
