import React from "react";
import "../styles/home.css";
import profile from "../styles/images/profile2.jpg";
import cv from "../assets/cv.pdf";

const Home = () => {
  return (
    <section className="home-box" id="home">
      <p className="hi-animation">Hello, I'm</p>
      <h1 className="h2-style">Jhonatan</h1>
      <p className="p-style">Web developer & designer </p>

      <button className="download-cv">
        <a href={cv} download>
          download CV
        </a>
      </button>
      <button className="lets-talk ">Lets talk</button>

      <div>
        <img className="profile-pic" src={profile} alt="" />
      </div>
    </section>
  );
};

export default Home;
