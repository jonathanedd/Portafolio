import React from "react";
import "../skills/skills.css";

import images from "../exports/images";
// import names from "../exports/names";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { motion } from "framer-motion";

const Skills = () => {
  // const getNames = names.map((name) => <h5>{name}</h5>);

  // const [changeImg, setChangeImg] = useState('');

  // const getImgs = images.map(image => setChangeImg(image))

  return (
    <section id="skills">
      <h5>Skills that I have</h5>
      <h2>Technologies</h2>

      <div className="section-skills">
        <a className="btn-left" href="css">
          <GrFormPrevious />
        </a>

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
          <a href="#css">
            <GrFormNext />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
