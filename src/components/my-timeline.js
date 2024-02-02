import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MyTimeline = () => {
  return (
    <div className="h-fit">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "white" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Sep, 2019 - Apr, 2023"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>}
        >
          <h3 className="text-black font-semibold">IIMS College, Kathmandu</h3>
          <h4 className="text-black">Sep, 2019 - Apr, 2023</h4>
          <p className="text-black">Bachelor's In Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "white" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May, 2021 - Dec, 2021"
          iconStyle={{ background: "red", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
        >
          <h3 className="text-black font-semibold">
            Mobile Application Developer ( Intern )
          </h3>
          <h4 className="text-black">May, 2021 - Dec, 2021</h4>
          <p className="text-black">Enspire Tech, Kathmandu</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "white" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Mar, 2022 - Dec, 2022"
          iconStyle={{ background: "purple", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>}
        >
          <h3 className="text-black font-semibold">
            Flutter Developer (Junior )
          </h3>
          <h4 className="text-black">Mar, 2022 - Dec, 2022</h4>
          <p className="text-black">Let It Grow, Lalitpur</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default MyTimeline;
