import React, { useEffect } from "react";
import TeamMember from "../components/team-member.js";
import manav from "../images/manav.jpg";

const AbFifth = () => {
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
    <div className="flex flex-col my-10 justify-center items-center py-10 px-10 md:px-36 md:py-20">
      <p className="heading-text-1 text-2xl font-bold text-white tracking-wider">
        {" "}
        Our Team{" "}
      </p>
      <div className="heading-text-2 h-1 w-16 bg-white mt-2 text-center"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-10 gap-y-20">
        <TeamMember
          name="Manav Koirala"
          img={manav}
          jobTitle="React Native Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          lnlink="https://www.facebook.com/yuhi.yauna.3"
        ></TeamMember>
        <TeamMember
          name="Manav Koirala"
          img={manav}
          jobTitle="React Native Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
          lnlink="https://www.facebook.com/yuhi.yauna.3"
        ></TeamMember>
        <TeamMember
          name="Manav Koirala"
          img={manav}
          jobTitle="React Native Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          lnlink="https://www.facebook.com/yuhi.yauna.3"
        ></TeamMember>
      </div>
    </div>
  );
};

export default AbFifth;
