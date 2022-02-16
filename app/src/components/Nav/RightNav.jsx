import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { IoFootball } from "react-icons/io5";

import { IoPeopleSharp } from "react-icons/io5";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  border-radius: 20px 0 0 20px;
  padding-left: 20px;
  user-select: none;
  padding-top: 200px;
  position: fixed;
  background: linear-gradient(132.02deg, #1d7859 15%, #1d1e2c 86.7%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100%;
  width: 222px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  cursor: none;
  /* z-index: 999; */
  cursor: none;
  li {
    margin-top: 140px;
    padding: 1px 0px;

    list-style: none;
    text-decoration: none;
    color: #fff;
    cursor: none;
    color: white;
    font-size: 25px;
    /* padding-top: 55px; */
    cursor: none;
    z-index: 999;
    /* padding-left: 10px; */
    a {
      text-decoration: none;
      color: white;
      cursor: none;
    }
  }

  @media (max-width: 480px) {
    width: 140px;
    li {
      margin-top: 90px;
    }
    a {
      font-size: 16px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    width: 160px;
    li {
      margin-top: 110px;
      padding: 1px 0px;
    }
    a {
      font-size: 18px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 200px;
    li {
      margin-top: 110px;
      padding: 1px 0px;
    }
    a {
      font-size: 22px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1440px) {
    /* width: 200px; */
    li {
      margin-top: 110px;
      padding: 1px 0px;
    }
    a {
      font-size: 23px;
    }
  }

  /* @media (max-width: 3000px) {
    background: linear-gradient(132.02deg, #1d7859 15%, #1d1e2c 86.7%);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 222px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    cursor: none;

    li {
      color: #fff;
      cursor: none;
    }
    a {
      text-decoration: none;
      color: white;
      cursor: none;
    }
  } */
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      <div>
        <nav>
          <ul>
            <li onClick={() => setOpen(!open)} id="1" className="liHover">
              <Link to="/">
                <BiHomeAlt className="icon" /> MainPage
                <span id="2" className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>

            <li className="liHover">
              <Link onClick={() => setOpen(!open)} to="/LiveScore">
                <MdLiveTv className="icon" /> Live Score
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>
            <li className="liHover">
              <Link onClick={() => setOpen(!open)} to="/teams">
                <IoPeopleSharp className="icon" /> Teams
                <span className="spanHover">
                  <AiOutlineDoubleRight />
                </span>
              </Link>
            </li>

            <li className="liHover">
              <Link onClick={() => setOpen(!open)} to="/footballers">
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
