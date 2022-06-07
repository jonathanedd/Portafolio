import React, { useState } from "react";
import "./styles/navBar.css";
import { FaAlignJustify } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoCaontainer onClick={() => setShowMenu(!showMenu)}>
            <FaAlignJustify />
          </LogoCaontainer>

          <Menu open={showMenu}>
            <MenuItem>
              <MenuItemLink>Home</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>About me</MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>Contact</MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
