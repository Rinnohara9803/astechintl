import React, { useEffect, useRef, useState } from "react";
import FirstSection from "../../components/first-section";
import ThirdSection from "../../components/third-section";
import FourthSection from "../../components/fourth-section";
import FifthSection from "../../components/fifth-section";
import SkillsTab from "../../components/skills-tab";

const Home = () => {
  const scrollRef = useRef(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Set the scroll position when the component mounts
    window.scrollTo(0, scrollRef.current);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <FirstSection></FirstSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <SkillsTab></SkillsTab>
      <FifthSection></FifthSection>
    </div>
  );
};

export default Home;
