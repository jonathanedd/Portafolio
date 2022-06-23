import React from "react";
import "../navbar/nav.css";
import { useState } from "react";

import {
  FaHome,
  FaUser,
  FaNetworkWired,
  FaProjectDiagram,
  FaMedal,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
        href="#home"
      >
        <FaHome />
      </a>

      <a
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        href="#about"
      >
        <FaUser />
      </a>

      <a
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        href="#skills"
      >
        <FaNetworkWired />
      </a>

      <a
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
        href="#projects"
      >
        <FaProjectDiagram />
      </a>

      {/* <a
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        href="#experience"
      >
        <FaMedal />
      </a> */}

      <a
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        href="#contact"
      >
        <MdEmail />
      </a>
    </nav>
  );
};

export default Nav;
