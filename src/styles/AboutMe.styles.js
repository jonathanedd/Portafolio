import styled from "styled-components";

export const Container = styled.div`
  .about_container {
    display: grid;
    grid-template-columns: 55% 10%;
    grid-template-rows: 50% 43%;
    gap: 15%;
    margin: auto;
    width: 80%;
    height: 100vh;
    border-radius: 2rem;
    padding-top: 100px;
    place-items: center;

    @media only screen and (max-width: 600px) {
      display: grid;
      grid-template-columns: 40%;
      grid-template-rows: 30%;
    }
  }
`;

export const Tittle = styled.h1`
  font-size: 1.5rem;
  color: #a7c5eb;
  margin-top: 60px;
  text-align: center;
  margin: auto;

  @media only screen and (max-width: 600px) {
    padding-top: 0;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: auto;

  @media only screen and (max-width: 600px) {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15%;
  }

  div {
    background-color: #a7c5eb;
    border-radius: 1rem;
    width: 130px;
    height: 130px;
    text-align: center;

    @media only screen and (max-width: 600px) {
      width: 130px;
      height: 130px;
      margin-left: 10px;
    }
  }
  p {
    color: #0e49b5;
  }
  h2 {
    color: #393e46;
    padding-top: 20px;
  }
  div:hover {
    background-color: transparent;
    border: solid 0.5px;

    color: #a7c5eb;
    transform: translateY(-5%);
    cursor: pointer;
    cursor: hand;
    box-shadow: 0px 3px 3px rgb(0, 0, 0);

    h2 {
      color: #a7c5eb;
    }
    p {
      color: #a7c5eb;
    }
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 550px;
  p {
    color: aliceblue;
    text-align: left;
    width: 450px;
    @media only screen and (max-width: 600px) {
      width: 340px;
      margin: 0;
    }
  }

  button {
    background-color: #a7c5eb;
    width: 90px;
    height: 30px;
    border-radius: 10px;
    position: relative;
    right: 180px;
    top: 35px;
    border: none;

    &:hover {
      box-shadow: 0px 3px 3px rgb(0, 0, 0);
      cursor: pointer;
      cursor: hand;
      transform: translateY(-8%);
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
    margin-top: 0;
    padding: 0;
  }
`;

export const Galery = styled.div`
  width: 350px;
  height: 350px;
  margin-top: 160px;
  border-radius: 2rem;
  overflow: hidden;
  transition: all 1s;
  box-shadow: 0px 5px 5px rgb(0, 0, 0.3);

  &:hover {
    transform: translateY(-5%);
  }

  img {
    width: 350px;
    filter: grayscale(100%);
    transition: all 0.8s;

    @media only screen and (max-width: 600px) {
      width: 100%;
      display: grid;
      border-radius: 2rem;
    }
    &:hover {
      filter: grayscale(0%);
      transition: all 0.8s;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 270px;
    height: 270px;
    margin: auto;
    margin-left: 25px;
  }
`;
