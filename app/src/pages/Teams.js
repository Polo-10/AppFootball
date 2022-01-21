import React from "react";
import { useState } from "react";

import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";
import Footballers from "./Footballers";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/team/search?api_key=${API_KEY}`;

const TeamsElements = ({ logo, name, area, venue }) => {
  const [openTeams, setOpenTeams] = useState(false);
  const closeModalTeams = () => setOpenTeams(false);
  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
  };

  console.log(addDefaultImg);

  return (
    <>
      <div className="containerTeams">
        <p>{name}</p>
        <img
          className="teams"
          onClick={() => setOpenTeams((o) => !o)}
          onError={addDefaultImg}
          src={logo}
          alt=""
        />
      </div>

      <Popup open={openTeams} onClose={closeModalTeams}>
        <div className="flip-box-teams">
          <div className="flip-box-inner-teams">
            <div className="flip-box-front-teams">
              <img className="modalPhoto-teams" src={logo} alt="" />
            </div>

            <div className="flip-box-back-teams">
              <h1>name</h1>
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

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
        <style>{`body {background-color: red;}`}</style>
      </Helmet>
      <h2>Teams</h2>
      <form onSubmit={handleFormSubmit} action="">
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <button type="submit">Search</button>
      </form>
      <div>
        {teams.length > 0 &&
          teams.map((item, index) => (
            <TeamsElements
              logo={item.logo}
              name={item.name}
              // area={item.area}
              // venue={item.venue}
            />
          ))}
      </div>
    </AnimationPages>
  );
};
export default Teams;
