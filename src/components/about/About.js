import React from "react";
import "../about/about.css";
import image from "../../styles/images/about-me.jpg";

import { FaMedal, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img width='300px' src={image} alt="about image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaNetworkWired className="about-icon" />
              <h5>Skills</h5>
              <small>5+ Technologies</small>
            </article>

            <article className="about-card">
              <FaProjectDiagram className="about-icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className="about-card">
              <FaMedal className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Year experience</small>
            </article>

            <p>
              I am a full stack software developer with experience in React.js
              and Node.js, I am passionate about continous learning, I am very
              committed and detailed orientated to solve problems using
              technology. I like to meet new people and cultures. In my free
              time I like to swim, and create design
            </p>

            <a href="#contact" className="btn btn-primary">
              Lets talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
