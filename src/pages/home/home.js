import FirstSection from "../../components/first-section";
import ThirdSection from "../../components/third-section";
import FourthSection from "../../components/fourth-section";
import FifthSection from "../../components/fifth-section";
import SkillsTab from "../../components/skills-tab";

const Home = () => {
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
