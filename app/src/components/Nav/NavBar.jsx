import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  /* position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 55px;
  padding: 0 0;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  cursor: none; */
  width: 0px;
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
};

export default Navbar;
