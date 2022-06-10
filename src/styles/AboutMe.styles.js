import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #7189bf;

  width: 85%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: auto;
  height: 90vh;
  border-radius: 10px; */

  .about_container {
    display: grid;
    grid-template-columns: 50% 20%;
    grid-template-rows: 50% 40%;
    gap: 15%;
    margin: auto;
    width: 80%;

    height: 100vh;
    border-radius: 2rem;
    padding-top: 100px;
    background: linear-gradient(
      45deg,
      transparent,
      var(--color-primary),
      transparent
    );
    place-items: center;
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
    margin-bottom: 50px;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: auto;

  @media only screen and (max-width: 600px) {
    margin: auto;
    margin-top: 10px;
    width: 100%;
  }

  div {
    background-color: white;
    border-radius: 1rem;
    width: 130px;
    height: 130px;
    text-align: center;
    transform: rotate(10deg);

    @media only screen and (max-width: 600px) {
      margin: 5px;
      width: 150px;
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
    background-color: blue;
    transform: translateY(-8%);
    color: #a7c5eb;
    transform: rotate(0deg);
    cursor: pointer;
    cursor: hand;

    h2 {
      color: #a7c5eb;
    }
    p {
      color: #a7c5eb;
    }
  }
`;

export const Paragraph = styled.p`
  display: grid;
  grid-template-columns: auto;

  margin-bottom: 500px;
  p {
    color: aliceblue;
    text-align: left;
    width: 400px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
    margin-top: 5px;
    padding: 0;
  }
`;

export const Galery = styled.div`
  background-color: blue;
  width: 400px;
  height: 400px;
margin-top: 160px;
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);

  img {
    width: 400px;
    background-position: 2;
    
  }

  :hover {
    transform: rotate(0deg);
  }

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
    margin: auto;
    display: flex;
  }
`;
