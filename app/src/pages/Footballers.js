import React from "react";

import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/player/search?api_key=${API_KEY}`;

const FootballersElement = ({ photo, playerId }) => {
  return (
    <>
      <div>
        <img src={photo} alt="" />
      </div>
      <p>{playerId}</p>
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
    <div>
      Footballers
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit} action="">
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <button type="submit">Search</button>
      </form>
      <div className="footcar">
        {footballers.length > 0 &&
          footballers.map((item, index) => (
            <FootballersElement photo={item.photo} />
          ))}
      </div>
    </div>
  );
};

export default Footballers;
