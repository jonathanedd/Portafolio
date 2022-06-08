import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #3c415c; */
  width: 85%;
  /* display: flex; */
  /* flex-direction: column; */
  margin: auto;
  height: 100vh;
  border-radius: 10px;
`;

export const Tittle = styled.h1`
  font-size: 1.5rem;
  color: #a7c5eb;
  padding-top: 20px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const Cards = styled.div`
  color: #a7c5eb;
  display: flex;
  margin-left: 80px;
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    margin: 0;
    display: flex;
  }

  div {
    width: 120px;
    height: 120px;
    background-color: #4a47a3;
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
    color: #000;
  }
`;

export const Paragraph = styled.p`
  width: 400px;
  height: min-content;
  color: #a7c5eb;
  margin-left: 100px;
  text-align: start;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    width: 350px;
    margin-left: 0;
  }
`;
