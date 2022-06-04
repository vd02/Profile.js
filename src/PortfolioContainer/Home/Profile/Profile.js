import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import imgProfile from "../../../assets/Home/profilephoto.png"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/vd02">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/varun-dixit-997b93201/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="mailto:dixitvarun0208@gmail.com">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Varun</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Developer✨",
                    1200,
                    "Student👨‍🎓",
                    1200,
                    "Tech Enthusiast💻",
                    1200,
                    "Programmer0️⃣1️⃣",
                    1200,
                    "Sportsman⛹️‍♂️",
                    1200,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Eat, Sleep, Code, Repeat...
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="Resume.pdf" download="Varun_Dixit_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          <img src={imgProfile} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
}
