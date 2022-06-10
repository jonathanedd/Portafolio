import styled from "styled-components";

export const Container = styled.div`
  background-color: #7189bf;

  width: 85%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  height: 100vh;
  border-radius: 10px;
`;

export const Tittle = styled.h1`
  font-size: 1.5rem;
  color: #a7c5eb;
  padding-top: 60px;

  @media only screen and (max-width: 600px) {
    padding-top: 0;
    margin-bottom: 50px;
  }
`;

export const Cards = styled.div`
  color: #393e46;
  display: flex;
  width: fit-content;
  margin-left: 90px;
  margin-top: 130px;

  @media only screen and (max-width: 600px) {
    margin: auto;
    margin-top: 10px;
    width: 100%;
  }

  div {
    width: 120px;
    height: 120px;
    background-color: #a7c5eb;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgb(0, 0, 0);
    font-size: 0.8rem;
    margin-left: 20px;

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
    padding-top: 15px;
  }
  div:hover {
    background-color: #0e49b5;
    transform: translateY(-8%);
    color: #a7c5eb;
    h2 {
      color: #a7c5eb;
    }
    p {
      color: #a7c5eb;
    }
  }
`;

export const Paragraph = styled.p`
  width: 400px;
  height: min-content;
  color: #a7c5eb;
  margin-left: 110px;
  text-align: start;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: auto;
    margin-top: 5px;
    padding: 0;
  }
`;

export const Galery = styled.div`
  background-color: blue;
  width: 300px;
  height: 300px;
  display: flex;
  margin-top: 200px;

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
