import React from "react";

import { useState } from "react";

import AnimationPages from "../components/AnimatePages";
import { Helmet } from "react-helmet";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { GiSoccerKick } from "react-icons/gi";
import Zoom from "react-reveal/Zoom";
import { BiSearchAlt2 } from "react-icons/bi";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/player/search?api_key=${API_KEY}`;

const FootballersElement = ({
  photo,
  playerId,
  name,
  birthday,
  height,
  weight,
  country,
  feet,
  position,
  number,
}) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <div className="containerFootballers">
        <div className="haha2">
          <img
            className="footballers"
            onClick={() => setOpen((o) => !o)}
            src={photo}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <Popup open={open} onClose={closeModal}>
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img className="modalPhoto" src={photo} alt="" loading="lazy" />
            </div>

            <div className="flip-box-back">
              <h1 className="FootballersName">{name}</h1>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Birthday : </strong>
                {birthday}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Height : </strong>
                {`${height} cm`}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Weight : </strong>
                {`${weight} kg`}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Country : </strong> {country}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Feet : </strong>
                {feet}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Position : </strong> {position}
              </p>
              <p className="footballersInfo">
                <strong className="boldTextInfo">Number : </strong> {number}
              </p>
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
    setSearchValue((prevState) => (prevState = ""));

    if (searchValue >= 0) {
      alert("WPISZ NAZWĘ PIŁKARZA");
      return false;
    }

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
        <style>{`body { background-image: linear-gradient(to right top, #070506, #180f16, #211624, #281d34, #292646, #202b4b, #142f4f, #003351, #003144, #072d36, #13282a, #1b2322);}`}</style>
      </Helmet>

      <div className="containerForm">
        <h2 className="searchFootballersText">
          Footballers
          <Zoom duration={1500} delay={600}>
            <span className="FootballersIcon">
              <GiSoccerKick />
            </span>
          </Zoom>
        </h2>

        <form className="formFootballers" onSubmit={handleFormSubmit} action="">
          <input
            className="inputFootballers"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
          />

          <button className="buttonFootballers" type="submit">
            <span className="TeamsSearch">
              <BiSearchAlt2 />
            </span>
          </button>
        </form>
      </div>

      <div className="containerFootballersBig">
        {footballers.length > 0 &&
          footballers.map((item, index) => (
            <FootballersElement
              photo={item.photo}
              name={item.name}
              birthday={item.birthday}
              height={item.height}
              weight={item.weight}
              country={item.country}
              feet={item.feet}
              position={item.position}
              number={item.number}
            />
          ))}
      </div>
    </AnimationPages>
  );
};

export default Footballers;
