import Ronaldo from "../img/Ronaldo.webp";

import { useState, useEffect } from "react";

import Bounce from "react-reveal/Bounce";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

import AsideLiveScore from "../components/AsideLiveScore";

import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

import Zoom from "react-reveal/Zoom";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=182f7c692008efceceaeb1ec9c226126d008aa81e38f0a4419d581d2de39360b&match_live=1";

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ScoreA = ({ home_scorer, time }) => {
  return (
    <>
      {/* <p>{home_scorer}</p>
      <p>{time}</p> */}
    </>
  );
};

const ScoreElement = ({
  match_awayteam_name,
  match_hometeam_name,
  match_awayteam_score,
  match_hometeam_score,
  team_away_badge,
  team_home_badge,
  DetailsELement,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
  };

  return (
    <>
      <div className="title-box"></div>

      <div className="title-box">
        <div className="team">
          <img
            onError={addDefaultImg}
            src={team_home_badge}
            alt="homelogo"
            loading="lazy"
          />
          <p className="nameTeam">{match_hometeam_name}</p>
          <p>{DetailsELement}</p>
        </div>

        <p className="score">
          {match_hometeam_score} - {match_awayteam_score}
        </p>

        <div className="team">
          <img
            onError={addDefaultImg}
            src={team_away_badge}
            alt="awaylogo"
            loading="lazy"
          />
          <p className="nameTeam">{match_awayteam_name}</p>
        </div>
      </div>
    </>
  );
};

const LiveScore = () => {
  const [liveScoreState, setLiveScoreState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () =>
      fetch(url)
        .then((res) => res.json())
        .then((res) => setLiveScoreState(res))
        // .then((res) => {
        //   setTimeout(() => {
        //     setLiveScoreState(res.data);
        //   }, 500);
        // })
        // .catch((err) => console.log(err));

        .then((res) => res.json())
        .then((res) =>
          setLiveScoreState(
            res.data
              .map((item) => {
                if (item.team_home_badge) return item;

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

    getData();
  }, []);

  console.log(liveScoreState);

  return (
    <>
      <AsideLiveScore />

      <AnimationPages>
        <Helmet>
          <style>{`body {background-color: #1d1e2c;}`}</style>
        </Helmet>
        <Bounce top duration={1000} delay={200}>
          <div className="containerRonaldo">
            <div className="ronaldo">
              <img src={Ronaldo} alt="" loading="lazy" />
            </div>
          </div>
        </Bounce>

        <div>
          {/* <div className="bgc">
          <aside className="aside"></aside>
        </div> */}
        </div>

        <div className="container2">
          <h1 className="scoreBoard">Score Board</h1>
          {isLoading ? (
            <div className="haha22">
              <CircleLoader
                color={"#FFFFFF"}
                css={override}
                size={150}
                speedMultiplier={1}
              />
            </div>
          ) : (
            liveScoreState &&
            (liveScoreState?.length > 0 ? (
              liveScoreState?.map((item, index) => (
                <Zoom duration={700} delay={100}>
                  <ScoreElement
                    key={item}
                    className="matches-table"
                    match_awayteam_name={item.match_awayteam_name}
                    match_hometeam_name={item.match_hometeam_name}
                    match_awayteam_score={item.match_awayteam_score}
                    match_hometeam_score={item.match_hometeam_score}
                    team_away_badge={item.team_away_badge}
                    team_home_badge={item.team_home_badge}
                  />
                </Zoom>
              ))
            ) : (
              <CircleLoader
                color={"#FFFFFF"}
                css={override}
                size={150}
                speedMultiplier={1}
              />
            ))
          )}
        </div>
      </AnimationPages>
    </>
  );
};

export default LiveScore;
