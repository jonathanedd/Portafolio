import React from "react";
import "../footer/footer.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <h3>Jhonatan Ordonez</h3>

      <div className="social-follow">
        <ul>
          <li>
            <a href="https://github.com/jonathanedd">
              <FaGithub className="social-icon"  />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonaedd/">
              <FaLinkedinIn className="social-icon"  />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jonaedd/">
              <FaInstagram className="social-icon"  />
            </a>
          </li>
        </ul>
      </div>

      <h4>Academlo 2022</h4>
    </section>
  );
};

export default Footer;
