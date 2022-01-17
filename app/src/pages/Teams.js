import React from "react";
import { useState } from "react";

import AnimationPages from "../components/AnimatePages";
import DropDownDetails from "../components/DropDownDetails";

import { Helmet } from "react-helmet";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/team/search?api_key=${API_KEY}`;

const TeamsElements = ({ logo, name, area, venue }) => {
  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
  };

  console.log(addDefaultImg);

  return (
    <>
      <p>{name}</p>
      <img onError={addDefaultImg} src={logo} alt="" />
      {/* <p>{area}</p>
      <p>{venue}</p> */}
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
      <DropDownDetails />
    </AnimationPages>
  );
};
export default Teams;
