import React from "react";
import "../projects/projects.css";
import ecommerce from "../../styles/images/ecommerce-react.png";
import pokedex from "../../styles/images/pokedex.png";
import rick from "../../styles/images/rickymorty1.png";
import crud from "../../styles/images/crud.png";
import weather from "../../styles/images/weatherapp.png";
import quotes from "../../styles/images/quotes.png";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title">Front End</h1>
      <div className="projects-container">
        <div className="cards-projects">
          <motion.div
            // animate={{ x: [0, 10, 0] }}
            // transition={{ ease: "easeOut", duration: 10, repeat: 100 }}
            className="card-item"
          >
            <img src={ecommerce} alt="" />
            <p>E-commerce front end development using React JS</p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/e-commerce.git"
              >
                Github
              </a>
              <a className="project" href="https://e-commerce-jo.netlify.app">
                Project
              </a>
            </div>
          </motion.div>

          <motion.div
            // animate={{ y: [0, 15, 0] }}
            // transition={{ ease: "easeOut", duration: 10, repeat: 100 }}
            className="card-item"
          >
            <img src={pokedex} alt="" />
            <p>Pokemon front end App consuming API with React JS</p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/Pokedex-app.git"
              >
                Github
              </a>
              <a className="project" href="https://pokedex-app-jo.netlify.app">
                Project
              </a>
            </div>
          </motion.div>

          <motion.div
            // animate={{ x: [0, 16, 0] }}
            // transition={{ ease: "easeOut", duration: 10, repeat: 100 }}
            className="card-item"
          >
            <img src={rick} alt="" />
            <p>The amazing World of Rick & Morty API</p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/Rick-and-Morty.git"
              >
                Github
              </a>
              <a
                className="project"
                href="https://rick-and-morty-app-jo.netlify.app"
              >
                Project
              </a>
            </div>
          </motion.div>

          <div className="card-item">
            <img src={crud} alt="" />
            <p>Crud project with React, and React hooks</p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/crude.git"
              >
                Github
              </a>
              <a className="project" href="https://crud-form-jo.netlify.app">
                Project
              </a>
            </div>
          </div>

          <div className="card-item">
            <img src={weather} alt="" />
            <p>
              Weather App consuming API that shows Temperature in your location
            </p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/weather-app.git"
              >
                Github
              </a>
              <a className="project" href="https://weather-app-jo.netlify.app">
                Project
              </a>
            </div>
          </div>

          <div className="card-item">
            <img src={quotes} alt="" />
            <p>React first project that shows random famous phrases</p>
            <div className="card-btn">
              <a
                className="github"
                href="https://github.com/jonathanedd/quotes.js.git"
              >
                Github
              </a>
              <a
                className="project"
                href="https://quote-random-jonathan-ordonez.netlify.app"
              >
                Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
