import React from "react";
import "../projects/projects.css";
import ecommerce from "../../styles/images/ecommerce-react.png";
import pokedex from "../../styles/images/pokedex.png";
import rick from "../../styles/images/rickymorty1.png";
import crud from "../../styles/images/crud.png";
import weather from "../../styles/images/weatherapp.png";
import quotes from "../../styles/images/quotes.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1>Front End</h1>
      <div className="projects-container">
        <div className="cards-projects">
          <div className="card-item">
            <h2>Ecommerce App</h2>
            <img src={ecommerce} alt="" />
            <h5>Reaact JS project</h5>
            <p>
              This is a project made with React JS, Pure front End. Implemented
              with Axios cosuming API and Redux
            </p>
            <a href="https://e-commerce-jo.netlify.app">See</a>
          </div>

          <div className="card-item">
            <h2>Pokedex App</h2>
            <img src={pokedex} alt="" />
            <h5>React JS project</h5>
            <p>
              This is a Pokemon API project using React, Implemented with react
              hooks. This is Front end develop
            </p>
            <a href="https://pokedex-app-jo.netlify.app">Go to project</a>
          </div>

          <div className="card-item">
            <h2>Rick and Morty App</h2>
            <img src={rick} alt="" />
            <h5>React JS project</h5>
            <p>
              This is a Pokemon API project using React, Implemented with react
              hooks. This is Front end develop
            </p>
            <a href="https://rick-and-morty-app-jo.netlify.app">Go to project</a>
          </div>

          <div className="card-item">
            <h2>Crud</h2>
            <img src={crud} alt="" />
            <h5>React JS project</h5>
            <p>
              This is a Pokemon API project using React, Implemented with react
              hooks. This is Front end develop
            </p>
            <a href="https://crud-form-jo.netlify.app">Go to project</a>
          </div>

          <div className="card-item">
            <h2>Weather App</h2>
            <img src={weather} alt="" />
            <h5>React JS project</h5>
            <p>
              This is a Pokemon API project using React, Implemented with react
              hooks. This is Front end develop
            </p>
            <a href="https://weather-app-jo.netlify.app">Go to project</a>
          </div>

          <div className="card-item">
            <h2>Quotes</h2>
            <img src={quotes} alt="" />
            <h5>React JS project</h5>
            <p>
              This is a Pokemon API project using React, Implemented with react
              hooks. This is Front end develop
            </p>
            <a href="https://quote-random-jonathan-ordonez.netlify.app">Go to project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
