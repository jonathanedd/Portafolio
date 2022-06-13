import React from "react";
import "../skills/skills.css";

import images from "../exports/images";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills that I have</h5>
      <h2>Technologies</h2>

      <motion.div className="container-skills">
        <motion.div className="slider" drag="x">
          {images.map((image) => (
            <motion.div className="item">
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
