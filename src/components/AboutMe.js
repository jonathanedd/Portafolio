import React from "react";
import { IconContext } from "react-icons";
import { FaMedal, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import {
  AboutBtn,
  Cards,
  Container,
  Galery,
  Paragraph,
  Tittle,
} from "../styles/AboutMe.styles";

import aboutImg from "../styles/images/about-me.jpg";

const Projects = () => {
  return (
    <>
      <Tittle>About Me</Tittle>
      <Container>
        <IconContext.Provider value={{ style: { fontSize: "1.8em" } }}>
          <div className="about_container">
            <Cards>
              <div>
                <h2>Skills</h2>
                <FaNetworkWired />
                <p>+5 Tecnologies</p>
              </div>
              <div>
                <h2>Projects</h2>
                <FaProjectDiagram />
                <p>10+ Completed</p>
              </div>
              <div>
                <h2>Experience</h2>
                <FaMedal />
                <p>1+ Years</p>
              </div>
            </Cards>

            <Galery>
              <div>
                <img src={aboutImg} alt="" />
              </div>
            </Galery>

            <Paragraph>
              <p>
                I am a full stack software developer with experience in React.js
                and Node.js, I am passionate about continous learning, I am very
                committed and detailed orientated to solve problems using
                technology. I like to meet new people and cultures. In my free
                time I like to swim, and create design
              </p>

              <button>
                <a href="">Lets talk</a>
              </button>
            </Paragraph>
          </div>
        </IconContext.Provider>
      </Container>
    </>
  );
};

export default Projects;
