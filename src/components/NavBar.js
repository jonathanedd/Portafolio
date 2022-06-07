import React, { useState } from "react";
import "./styles/navBar.css";
import { FaAlignJustify } from "react-icons/fa";
import { IconContext } from "react-icons";

import { FaHome, FaUserAlt, FaGlasses } from "react-icons/fa";

import {
  Container,
  LogoCaontainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Burguer";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "1.5em" } }}>
          <LogoCaontainer onClick={() => setShowMenu(!showMenu)}>
            <FaAlignJustify />
          </LogoCaontainer>

          <Menu open={showMenu}>
            <MenuItem>
              <MenuItemLink>
                <FaHome />
                Home
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <FaUserAlt />
                About me
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <FaGlasses />
                Contact me
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
