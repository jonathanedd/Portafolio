import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* heith: 400px; */
  color: #a7c5eb;
  font-size: 2rem;
  position: fixed;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoCaontainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 50px;
  left: 50px;

  @media only screen and (max-width: 600px) {
    width: 30px;
    top: 15px;
    left: 15px;
  }
`;

export const Menu = styled.ul`
  height: 150px;
  width: 300px;
  display: flex;
  align-items: flex-start;
  padding-left: 25px;
  justify-content: space-between;
  list-style: none;
  position: relative;
  background-color: #000;
  top: 90px;
  left: ${({ open }) => (open ? "-4%" : "-100%")};

  flex-direction: column;
  transition: 0.9s all ease;

  @media only screen and (max-width: 600px) {
    top: 50px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 150px;
    transition: 0.9s all ease;
    text-align: start;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  padding: 0.5 rem 2.5rem;
  /* color: 64b2ff; */
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #413c69;

    transition: 0.5s all ease;
  }
  svg {
    margin-right: 0.8rem;
    color: #e0792a;
  }
`;

export const MobileIcon = styled.div`
  display: none;
`;
