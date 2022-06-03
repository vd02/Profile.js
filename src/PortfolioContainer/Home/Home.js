import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer.js";
import "./Home.css";
import Header from "./Header/Header.js";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
