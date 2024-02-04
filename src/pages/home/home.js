import React, { useEffect, useState } from "react";
import FirstSection from "../../components/first-section";
import ThirdSection from "../../components/third-section";
import FifthSection from "../../components/fifth-section";
import SkillsTab from "../../components/skills-tab";
import FourthSection from "../../components/fourth-section";

const Home = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();

      return (
        rect.bottom - 90 > 0 &&
        rect.top - 90 <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    const handleScroll = () => {
      const redDivElement = document.getElementById("div-red");

      if (isElementInViewport(redDivElement)) {
        console.log("Element is in the viewport");
        setIsFixed(true);
      } else {
        console.log("Element is not in the viewport");
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // Set the scroll position when the component mounts
    // window.scrollTo(0, scrollRef.current);
    // const handleResize = () => {
    //   setWindowWidth(window.innerWidth);
    // };
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
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
