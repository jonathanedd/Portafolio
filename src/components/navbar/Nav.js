import React from "react";
import "../navbar/nav.css";

import {
  FaHome,
  FaUser,
  FaNetworkWired,
  FaProjectDiagram,
  FaMedal,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="#home">
        <FaHome />
      </a>

      <a href="#about">
        <FaUser />
      </a>

      <a href="#skills">
        <FaNetworkWired />
      </a>

      <a href="#projects">
        <FaProjectDiagram />
      </a>

      <a href="#experience">
        <FaMedal />
      </a>

      <a href="#contact">
        <MdEmail />
      </a>
    </nav>
  );
};

export default Nav;
