import React from "react";
import { IconContext } from "react-icons";
import { FaMedal, FaProjectDiagram, FaNetworkWired } from "react-icons/fa";
import { Cards, Container, Paragraph, Tittle } from "../styles/AboutMe.styles";

const Projects = () => {
  return (
    <>
      <Container>
        <IconContext.Provider value={{ style: { fontSize: "1.8em" } }}>
          <Tittle>About Me</Tittle>

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

          {/* <Cards>
            <div>
              <h2>Projects</h2>
              <FaProjectDiagram />
              <p>10+ Completed</p>
            </div>
          </Cards> */}

          {/* <Cards>
            <div>
              <h2>Experience</h2>
              <FaMedal />
              <p>1+ Years</p>
            </div>
          </Cards> */}

          <Paragraph>
            <p>
              I am a full stack software developer with experience in React and
              Node. I am passionate about continous learning, meeting new people
              and cultures, I am very committed and detailed orientated to solve
              problems. In my free times I like to read, swim, create and design
              illustrations.
            </p>
          </Paragraph>
        </IconContext.Provider>
      </Container>
    </>
  );
};

export default Projects;
