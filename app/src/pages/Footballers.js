import React from "react";

import { useState } from "react";

import AnimationPages from "../components/AnimatePages";
import { Helmet } from "react-helmet";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { GiSoccerKick } from "react-icons/gi";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/player/search?api_key=${API_KEY}`;

const FootballersElement = ({ photo, playerId, name }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <div className="containerFootballers">
        <img
          className="footballers"
          onClick={() => setOpen((o) => !o)}
          src={photo}
          alt=""
        />
        <p>{playerId}</p>
        {/* <p>{name}</p> */}
      </div>

      <Popup open={open} onClose={closeModal}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="modalPhoto" src={photo} alt="" />
            </div>

            <div className="flip-box-back">
              <h1>name</h1>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

const Footballers = () => {
  const [footballers, SetFootballers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(API + `&name=${searchValue}`)
      .then((res) => res.json())
      .then((res) =>
        SetFootballers(
          Array.from(
            res.data
              .reduce((map, obj) => map.set(obj.playerId, obj), new Map())
              .values()
          )
        )
      )

      .catch((err) => console.log(err));
  };
  console.log(footballers);

  return (
    <AnimationPages>
      <Helmet>
        <style>{`body {background-image: linear-gradient(to right top, #070506, #180f16, #211624, #281d34, #292646, #202b4b, #142f4f, #003351, #003144, #072d36, #13282a, #1b2322);}`}</style>
      </Helmet>

      <div className="containerForm">
        <h2 className="searchFootballersText">
          Search Footballers
          <span className="FootballersIcon">
            <GiSoccerKick />
          </span>
        </h2>

        <form className="formFootballers" onSubmit={handleFormSubmit} action="">
          <input
            className="inputFootballers"
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
          />

          <button className="buttonFootballers" type="submit">
            Search
          </button>
        </form>
      </div>

      {footballers.length > 0 &&
        footballers.map((item, index) => (
          <FootballersElement name={item.name} photo={item.photo} />
        ))}
      {/* </div> */}
    </AnimationPages>
  );
};

export default Footballers;
