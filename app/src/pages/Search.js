import React, { useState } from "react";
import axios from "axios";
const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`api/search/${searchValue}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Search</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>Results from response</h2>
        <div>
          <p>
            Footballers :
            {searchResults?.footballers?.length > 0
              ? searchResults.footballers.length
              : 0}
          </p>
          <p>
            Teams :
            {searchResults?.teams?.length > 0 ? searchResults.teams.length : 0}
          </p>
          <p>
            Leagues :
            {searchResults?.leagues?.length > 0
              ? searchResults.leagues.length
              : 0}
          </p>
        </div>
        <div>
          <div>
            <h2>Footballers</h2>
            {searchResults?.footballers?.map((item, index) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div>
            <h2>Teams</h2>
            {searchResults?.teams?.map((item, index) => (
              <div>{item.name}</div>
            ))}
          </div>
          <div>
            <h2>Leagues</h2>
            {searchResults?.leagues?.map((item, index) => (
              <div>{item.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
