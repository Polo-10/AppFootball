import React from "react";
import { useState } from "react";

import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

import { GiTrophy } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import Zoom from "react-reveal/Zoom";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/team/search?api_key=${API_KEY}`;

const TeamsElements = ({
  logo,
  name,
  foundingDate,
  address,
  area,
  venue,
  capacity,
  coach,
  website,
}) => {
  const [openTeams, setOpenTeams] = useState(false);
  const closeModalTeams = () => setOpenTeams(false);

  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
    // setTeams(
    //   Array.from(
    //     teams.reduce((map, obj) => map.set(obj.logo, obj), new Map()).values()
    //   )
    // );
  };
  // console.log(addDefaultImg);

  return (
    <div className="haha">
      <div className="containerTeams">
        <p className="teamsName">{name}</p>
        <img
          className="teams"
          onClick={() => setOpenTeams((o) => !o)}
          onError={addDefaultImg}
          src={logo}
          alt=""
          loading="lazy"
        />
      </div>

      <Popup open={openTeams} onClose={closeModalTeams}>
        {(close) => (
          <div className="flip-box-teams">
            <button className="closeModal" onClick={close}>
              <VscChromeClose />
            </button>
            <div className="flip-box-inner-teams">
              <div className="flip-box-front-teams">
                <img
                  className="modalPhoto-teams"
                  src={logo}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="flip-box-back-teams">
                <h1 className="TeamsName">{name}</h1>
                <p className="teamsInfo">Address: {address}</p>
                <p className="teamsInfo">Area: {area}</p>
                <p className="teamsInfo">Venue: {venue}</p>
                <p className="teamsInfo">Capacity: {capacity}</p>
                <p className="teamsInfo">Coach: {coach}</p>
                <p className="teamsInfo">Website: {website}</p>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue((prevState) => (prevState = ""));

    if (searchValue >= 0) {
      alert("WPISZ NAZWĘ DRUŻYNY");
      return false;
    }

    fetch(API + `&name=${searchValue}`)
      .then((res) => res.json())
      .then((res) =>
        setTeams(
          Array.from(
            res.data
              .reduce((map, obj) => map.set(obj.logo, obj), new Map())
              .values()
          )
        )
      )
      .catch((err) => console.log(err));
  };

  console.log(teams);
  return (
    <AnimationPages>
      <Helmet>
        <style>{`body {background-image: linear-gradient(to right top, #070506, #180f16, #211624, #281d34, #292646, #202b4b, #142f4f, #003351, #003144, #072d36, #13282a, #1b2322);}`}</style>
      </Helmet>

      <div className="containerFormTeams">
        <h2 className="searchTeamsText">
          Teams
          <Zoom duration={1500} delay={600}>
            <span className=" TeamsIcon">
              <GiTrophy />
            </span>
          </Zoom>
        </h2>
        <form
          className="teamsFootballers"
          onSubmit={handleFormSubmit}
          action=""
        >
          <input
            className="inputTeams"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
          />
          <button className="buttonTeams" type="submit">
            <span className="TeamsSearch">
              <BiSearchAlt2 />
            </span>
          </button>
        </form>
      </div>

      <div className="ContainerTeamsBig">
        {teams.length > 0 &&
          teams.map((item, index) => (
            <TeamsElements
              logo={item.logo}
              name={item.name}
              arefoundingDatea={item.foundingDate}
              address={item.address}
              area={item.area}
              venue={item.venue}
              capacity={item.capacity}
              coach={item.coach}
              website={item.website}
            />
          ))}
      </div>
    </AnimationPages>
  );
};
export default Teams;
