import React from "react";
import "../skills/skills.css";

import images from "../exports/images";
// import names from "../exports/names";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const Skills = () => {
  // const getNames = names.map((name) => <h5>{name}</h5>);

  // const skillsImg = images.map((image) => <img src={image} alt="Imgs"></img>);

  // const [changeImg, setChangeImg] = useState(skillsImg);

  return (
    <section id="skills" className="section-skills">
      <h5>Skills that I have</h5>
      <h2>Technologies</h2>

      <div className="btn-left">
        <a href="#css">
          <GrFormPrevious />
        </a>
      </div>

      <motion.div className="container-skills">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: -1400.19 }}
        >
          {images.map((image) => (
            <motion.div className="item">
              <img id="css" src={image} alt="css" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="btn-right">
        <a  href='css'>
          <GrFormNext />
        </a>
      </div>
    </section>
  );
};

export default Skills;
