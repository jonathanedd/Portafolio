import React from "react";
import { Cards, Container, Images, Tittle } from "../styles/Projects.styles";
import ecommerce from "../styles/images/ecommerce-1.png";
import pokedex from "../styles/images/pokedex-1.png";
import rick from "../styles/images/Rick.png";

const Projects = () => {
  return (
    <>
      <Container>
        <Tittle>Projects</Tittle>

        <Cards>
          <Images>
            <img className="img-1" src={pokedex} alt="" />
          </Images>
          Pokedex
        </Cards>

        <Cards>
          <Images>
            <img className="img-3" src={rick} alt="" />
          </Images>
          Rick & Morty
        </Cards>

        <Cards>
          <Images>
            <img className="img-2" src={ecommerce} alt="" />
          </Images>
          Ecomerce
        </Cards>
      </Container>
    </>
  );
};

export default Projects;
