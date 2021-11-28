import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { IoFootball } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";

import Lewandowski from "../../img/Robert Lewandowski.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 10px;
  padding-left: 20px;
  user-select: none;
  /* z-index: 999; */
  li {
    margin-top: 20px;
    padding: 18px 0px;
    list-style: none;
    text-decoration: none;
    color: white;
    font-size: 24px;
    padding-top: 50px;
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
  return (
    <Ul open={open}>
      <div className="main__page">
        <nav>
          <ul>
            <li id="1" className="liHover">
              <NavLink to="/">
                <BiHomeAlt className="icon" /> MainPage{" "}
                <span id="2" className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink to="/LiveScore">
                <MdLiveTv className="icon" /> Live Score
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink to="/leagues">
                <IoPeopleSharp className="icon" /> Leagues
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink to="/teams">
                <RiTeamFill className="icon" /> Teams
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink to="/footballers">
                <IoFootball className="icon" /> Footballers
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
            <li className="liHover">
              <NavLink to="/search">
                <BsSearch className="icon" /> Search
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </NavLink>
            </li>
          </ul>
          {/* <img
            src={Lewandowski}
            style={{ width: "300px", height: "300px" }}
            alt=""
          /> */}
        </nav>
      </div>
    </Ul>
  );
};

export default RightNav;
