import React from "react";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/team/search?api_key=${API_KEY}`;

const TeamsElements = ({ logo }) => {
  return (
    <>
      <img src={logo} alt="" />
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
      .then((res) => setTeams(res.data))
      .catch((err) => console.log(err));
  };

  console.log(teams);
  return (
    <div>
      <h2>Teams</h2>
      <form onSubmit={handleFormSubmit} action="">
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" />
        <button type="submit">Search</button>
      </form>
      <div>
        {teams.length > 0 &&
          teams.map((item, index) => <TeamsElements logo={item.logo} />)}
      </div>
    </div>
  );
};
export default Teams;
