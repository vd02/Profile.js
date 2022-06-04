import React, { useState } from "react";
import Typical from "react-typical";
// import axios from "axios";
// import { toast } from "react-toastify";

import imgBack from "../../../src/images/mail1.png";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      const res = await fetch(
        "https://contact-data-portfolio-default-rtdb.firebaseio.com/userdata.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (res) {
        setUserData({ name: "", email: "", message: "" });
        alert("Data Recieved Successfully");
      } else {
        alert("Please Fill the Data");
      }
    } else {
      alert("Please Fill the Data");
    }
  };

  // const submitFormHandler=async (e)=>{
  //   console.log(e);
  //   e.preventDefault();
  //     const response = await fetch(
  //       "https://react-http-6b4a6.firebaseio.com/movies.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(movie),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  // }
  // console.log(name);
  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(
  //     "https://react-http-6b4a6.firebaseio.com/movies.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(movie),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  //     setBool(true);
  //     const res = await axios.post(`/contact`, data);
  //     if (name.length === 0 || email.length === 0 || message.length === 0) {
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBool(false);
  //     } else if (res.status === 200) {
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBool(false);

  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <div>
            <h2 className="title">
              <Typical loop={Infinity} steps={["Get In Touch📧", 1000]} />
            </h2>{" "}
          </div>
          <div>
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
        <div className="back-form">
          <div className="img-back">
            {/* <h4>Send Your Email Here!</h4> */}
            <img src={imgBack} alt="not found" />
          </div>
          <form method="POST">
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={postUserData}
              value={userData.name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={postUserData}
              value={userData.email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={postUserData}
              value={userData.message}
            />

            <div className="send-btn">
              <button type="submit" onClick={submitData}>
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
