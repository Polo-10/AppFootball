import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { IoFootball } from "react-icons/io5";

import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";

import { useState } from "react";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 10px;
  padding-left: 20px;
  user-select: none;
  padding-top: 200px;
  /* position: fixed; */
  /* z-index: 999; */
  li {
    margin-top: 60px;
    padding: 18px 0px;
    list-style: none;
    text-decoration: none;
    color: white;
    font-size: 25px;
    padding-top: 55px;
    /* padding-left: 10px; */
  }
  @media (max-width: 2000px) {
    flex-flow: column nowrap;
    background-color: #1d7874;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  const [changeUrlBackgroundColor, setChangeUrlBackgroundColor] = useState("");

  const [bgFlag, setBgflag] = useState(false);

  const changeUrl = (document.body.style.backgroundColor = "");

  if (!bgFlag) {
    setChangeUrlBackgroundColor(
      changeUrl == "/teams"
        ? (document.body.style.backgroundColor = "red")
        : "yellow"
    );
    setBgflag(true);
  }

  return (
    <Ul open={open}>
      <div className="main__page">
        <nav>
          <ul>
            <li id="1" className="liHover">
              <Link to="/">
                <BiHomeAlt className="icon" /> MainPage
                <span id="2" className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>

            <li className="liHover">
              <Link to="/LiveScore">
                <MdLiveTv className="icon" /> Live Score
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>
            <li className="liHover">
              <Link to="/teams">
                <IoPeopleSharp className="icon" /> Teams
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>

            <li className="liHover">
              <Link to="/footballers">
                <IoFootball className="icon" /> Footballers
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Ul>
  );
};

export default RightNav;
