import React from "react";

import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/player?api_key=${API_KEY}`;

const Footballers = () => {
  const [footballers, SetFootballers] = useState([]);

  // useEffect(() => {
  //   const getData = async () =>
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((res) => SetFootballers(res))
  //       .catch((err) => console.log(err));

  //   getData();
  // }, []);
  // console.log(footballers.teamId);

  return (
    <div>
      Footballers
      <h2>Search</h2>
      <form>
        <input
          onChange={(e) => SetFootballers(e.target.value)}
          value={footballers}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Footballers;
