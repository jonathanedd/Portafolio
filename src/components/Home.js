import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home-box">
      <p className="hi-animation">Hello, I'm</p>
      <h1 className="h2-style">Jhonatan</h1>
      <p className="p-style">Web developer & designer </p>

      <button className="download-cv">download CV</button>
      <button className="lets-talk ">Lets talk</button>
    </div>
  );
};

export default Home;
