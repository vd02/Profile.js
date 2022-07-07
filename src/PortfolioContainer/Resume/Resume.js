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
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "",
    },
    {
      title: "React Dhaba ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online Food Ordering Website based on React with dynamic loading of menu and receiving of order details through Firebase Realtime Database.",
      subHeading: "",
    },
    {
      title: "Optical Character Recognition",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "JavaScript based Optical Character Recognition (OCR) tool that reads custom written input with the help of Google and Microsoft enabled voice systems with modifiable pitch and voice rate.",
      subHeading: "",
    },
    {
      title: "Expense Tracker",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "React Expense Tracker that adds up all your credits and debits, displays them and shows up the total balance.",
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
          "Relevant Coursework: 📝Introduction to Computing and Programming    📝Data Structures and Algorithms    📝Operating Systems    📝Social Information and Networks"
        }
      />

      <ResumeHeading
        heading={"Swaraj India Public School"}
        subHeading={"ISC BOARD"}
        fromDate={"2017"}
        toDate={"2019"}
        description={"🔗Class 12th: 92.4%         🔗Class 10th: 92.8%"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Photomath"}
          subHeading={"Content Curator – Freelance"}
          fromDate={"May, 2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Creative Problem Solver and Math Expert.
          </span>
          <br />
          <span className="resume-description-text">
            - Providing solutions to math problems using LaTeX and software like
            GeoGebra and Figma.{" "}
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={
            "Plutonity Investment Advisory and Technology Pvt. Ltd.                                                                            "
          }
          subHeading={
            "Frontend Developer Intern                                                                                                                 "
          }
          fromDate={"May"}
          toDate={"Aug, 2021"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed Frontend for the startup’s website using React and
            Material UI.
          </span>
          <br />
          <span className="resume-description-text">
            - Worked on the designing the UI and UX of the mobile app.{" "}
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
