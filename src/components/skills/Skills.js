import React from "react";
import { motion } from "framer-motion";
import "../skills/skills.css";
import images from "../exports/images";

const Skills = () => {
  return (
    <section id="skills">
      <h5>Skills that I have</h5>
      <h2>Technologies</h2>

      <div className="section-skills">
        <motion.div className="container-skills">
          <motion.div
            className="slider"
            drag="x"
            dragConstraints={{ right: 0, left: -1700.19 }}
          >
            {images.map((image) => (
              <motion.div className="item">
                <img id="css" src={image.technology} alt="css" />

                <motion.div className="item-name">{image.name}</motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
