import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  heith: 70px;
  background-color: #413c69;
  color: #a7c5eb;
  font-size: 2rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  heith: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoCaontainer = styled.div`
  margin-left: 0.5rem;
  display: felx;
  align-items: center;
  font-size: 1.2rem;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  position: relative;
  left: ${({ open }) => (open ? "100px" : "-100px")}
  flex-direction: column;
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
  color: 64b2ff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
`;
