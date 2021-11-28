import React from "react";

import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API = `/sport/football/livescores?api_key=${API_KEY}`;

const Footballers = () => {
  // axios.post("/api/football", data).then((response) => console.log(response.data))

  const [footballers, SetFootballers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      Footballers
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit}>
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
