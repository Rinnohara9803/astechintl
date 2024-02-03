import React, { useEffect, useRef, useState } from "react";
import FirstSection from "../../components/first-section";
import ThirdSection from "../../components/third-section";
import FourthSection from "../../components/fourth-section";
import { useDispatch } from "react-redux";
import { lineSliceActions } from "../../slices/line-slice";
import FifthSection from "../../components/fifth-section";

const Home = () => {
  const scrollRef = useRef(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lineSliceActions.replaceShowLine({ showLine: true, tab: "home" }));
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
    <div className="flex flex-col overflow-hidden">
      <FirstSection></FirstSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
    </div>
  );
};

export default Home;
