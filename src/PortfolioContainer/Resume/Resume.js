import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
// import educationLogo from "../../assets/Resume/education.svg";
// import workHistoryLogo from "../../assets/Resume/work-history.svg";
// import progSkillsLogo from "../../assets/Resume/programming-skills.svg";
// import projectsLogo from "../../assets/Resume/projects.svg";
// import interestsLogo from "../../assets/Resume/interests.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "Java", ratingPercentage: 70 },
    { skill: "C", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Healthify @SNU",
      duration: { fromDate: "Sep, 22", toDate: "Nov, 22" },
      description:
        "💻 Technologies Used: React, MongoDB, Node.js, Express.js, Figma 💻 Developed a full-stack web-based application to automate the working of the healthcare system at Shiv Nadar University. Features include authentication for students, doctors and admin, AI chatbot, appointment booking, patient record etc.",
      subHeading: "",
    },
    {
      title: "Player Management System",
      duration: { fromDate: "Oct, 22", toDate: "Nov, 22" },
      description:
        "💻 Technologies Used: MySQL, Python, HTML, CSS 💻 A basic CRUD application designed to manage players across all sports for a particular club at universities. Gained a strong understanding of deploying databases and implemented triggers, functions, procedures along with improving        query performance.",
      subHeading: "",
    },
    {
      title: "Social Media Network Project on Influence Maximization",
      duration: { fromDate: "Feb, 22", toDate: "Apr, 22" },
      description:
        "Worked on a research paper investigating the Influence Maximisation in Social Networks. Proposed proficient calculations and heuristics for the influence maximization problem using greedy approach, degree discount heuristics, independent cascade model and linear threshold model.",
      subHeading: "",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Shiv Nadar University"}
        subHeading={"BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE"}
        fromDate={"2020"}
        toDate={"2024"}
        description={
          "Relevant Coursework: 📝Data Structures and Algorithms  📝Operating Systems    📝Database Systems    📝Social Information and Networks 📝Artificial Intelligence (AI) 📝Probability and Statistics  📝Object Oriented Programming (OOP’s)"
        }
      />

      <ResumeHeading
        heading={"Swaraj India Public School"}
        subHeading={"ISC BOARD"}
        fromDate={"2017"}
        toDate={"2019"}
        description={"🔗Class 12th: 92.4%"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Photomath"}
          subHeading={"Content Curator – Freelance"}
          fromDate={"July, 2020"}
          toDate={"July, 2022"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Solved and reviewed over 2500+ math problems in the domain of
            probability, statistics, calculus, vectors and algebra; provided
            solutions using LaTeX, GeoGebra (proprietary software tool) and
            Figma.
          </span>
          <br />
          {/* <span className="resume-description-text">
            - Providing solutions to math problems using LaTeX and software like
            GeoGebra and Figma.{" "}
          </span> */}
          {/* <br /> */}
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={
            "Plutonity Investment Advisory and Technology Pvt. Ltd.                                                                            "
          }
          subHeading={
            "Software Developer Intern                                                                                                                 "
          }
          fromDate={"July, 2021"}
          toDate={"Sep, 21"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Assisted in developing backend code snippets for multiple key
            functions including user authentication and extracting spare change
            from all the online payments. Gained experience working with AWS
            Cloud services to deploy infrastructure (S3 & RDS).
          </span>
          <br />
          <span className="resume-description-text">
            Worked on designing the UI/UX of the mobile application in React
            Native using Material UI.{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Basketball"
        description="Playing Basketball as a game has not only helped me to stay fit but also has taught me the dedication and patience that goes into a team leadership role."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to music of various genres has been my best stress buster. Be it Rap, Classical, Bollywood or any other, music has been my go to place every single time."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes while competing in football games, first-person shooter games as they excite and challenge my brain at the same time."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=""
        />
        {/* src={bullet.logoSrc} alt="B" */}
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
