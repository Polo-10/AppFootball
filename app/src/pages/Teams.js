import React from "react";
import { useState } from "react";

import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

import { GiTrophy } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { CgSearchFound } from "react-icons/cg";

import Zoom from "react-reveal/Zoom";

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API = `/sport/football/team/search?api_key=${API_KEY}`;
const API = `/sport/football/team/search?api_key=RDYNFf67jhOzXLHW`;

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TeamsElements = ({
  logo,
  name,
  address,
  area,
  venue,
  capacity,
  coach,
  website,
}) => {
  const [openTeams, setOpenTeams] = useState(false);
  const closeModalTeams = () => setOpenTeams(false);

  return (
    <>
      <div className="containerTeams">
        <p className="teamsName">{name}</p>
        <img
          className="teams"
          onClick={() => setOpenTeams((o) => !o)}
          src={logo}
          alt=""
          loading="lazy"
        />
      </div>

      <Popup open={openTeams} onClose={closeModalTeams}>
        {(close) => (
          <div className="closeDivModal">
            <Zoom duration={1000} delay={500}>
              <button className="closeModal" onClick={close}>
                <RiCloseCircleLine />
              </button>
            </Zoom>
            <div className="flip-box-teams">
              <div className="flip-box-inner-teams">
                <Zoom duration={800} delay={200}>
                  <div className="flip-box-front-teams">
                    <img
                      className="modalPhoto-teams"
                      src={logo}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </Zoom>

                <div className="flip-box-back-teams">
                  <h1 className="TeamsName">{name}</h1>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Address :</strong>
                    {address}
                  </p>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Area :</strong>
                    {area}
                  </p>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Venue :</strong>
                    {venue}
                  </p>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Capacity :</strong>
                    {`${capacity} tys`}
                  </p>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Coach : </strong>
                    {coach}
                  </p>
                  <p className="teamsInfo">
                    <strong className="TeamsBoldTextInfo"> Website :</strong>
                    {website}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

const Teams = () => {
  const [teams, setTeams] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue((prevState) => (prevState = ""));

    // setError(false);

    if (searchValue >= 0) {
      alert(" ENTER A TEAM NAME");
      return false;
    }

    setIsLoading(true);

    fetch(API + `&name=${searchValue}`)
      .then((res) => res.json())
      .then((res) =>
        setTeams(
          res.data
            .map((item) => {
              if (
                item.logo &&
                item.address &&
                item.area &&
                item.venue &&
                item.capacity &&
                item.coach &&
                item.website
              )
                return item;
              return null;
            })
            .filter((i) => i)
        )
      )
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1200);
      })
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
          spellcheck="false"
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
        {isLoading ? (
          <CircleLoader
            color={"#FFFFFF"}
            css={override}
            size={150}
            speedMultiplier={1}
          />
        ) : (
          teams &&
          (teams?.length > 0 ? (
            teams?.map((item, index) => (
              <Zoom duration={1000} delay={100}>
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
              </Zoom>
            ))
          ) : (
            <div className="NotFoundTeams">
              No data available, check the name of the entered team
              <CgSearchFound className="check" />
            </div>
          ))
        )}
      </div>
    </AnimationPages>
  );
};
export default Teams;
