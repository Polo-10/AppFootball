import { useState, useEffect } from "react";

import Zoom from "react-reveal/Zoom";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";
import AsideLiveScore from "../components/AsideLiveScore";

import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
import filterGoalScorers from "../components/filterGoalScorer";
import CardLiveScore from "../components/CardLiveSCore";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=602e5da902a40c1e77a26c8972fbbc7bf89e41abdcbd7a1eb18075887fcb0ebf&match_live=1";

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ScoreElement = ({
  match_awayteam_name,
  match_hometeam_name,
  match_awayteam_score,
  match_hometeam_score,
  team_away_badge,
  team_home_badge,
  goalScorer,
  cards,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = "https://apiv3.apifootball.com/badges/1864_clipper.jpg";
  };

  const [goals] = useState(filterGoalScorers(goalScorer));

  return (
    <>
      <div className="title-box">
        <div className="team">
          <img
            onError={addDefaultImg}
            src={team_home_badge}
            alt="homelogo"
            loading="lazy"
          />
          <p className="nameTeam">{match_hometeam_name}</p>

          <div className="goalScorerContainer">
            {goals
              .filter((i) => i.type === "home")
              .map((i) => (
                <div className="goalScorer">
                  <p className="result">
                    {i.time + " '"}
                    {i.name ? i.name : "Unknown"}
                  </p>
                </div>
              ))}
            {cards
              .filter((i) => i.home_fault)
              .map((i) => (
                <p>
                  {i.card} - {i.home_fault} {i.time + " '"}
                </p>
              ))}
          </div>
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

          <div className="goalScorerContainer">
            {goals
              .filter((i) => i.type === "away")
              .map((i) => (
                <div className="goalScorer">
                  <p className="result">
                    {i.time + " '"}
                    {i.name ? i.name : "Unknown"}
                  </p>
                </div>
              ))}
            {cards
              .filter((i) => i.away_fault)
              .map((i) => (
                <p>
                  {i.card} {i.away_fault} {i.time + "'"}
                </p>
              ))}
          </div>
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
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1200);
        })
        .catch((err) => err);

    getData();
  }, []);

  console.table(liveScoreState);

  return (
    <>
      <Helmet>
        <style>{`body {background-color: #1d1e2c;}`}</style>
      </Helmet>
      <AnimationPages>
        <AsideLiveScore />
        <h1 className="scoreBoard">Score Board</h1>
        <div className="container2">
          {liveScoreState?.length > 0 ? (
            liveScoreState?.map((item, index) => (
              <Zoom duration={700} delay={100}>
                <ScoreElement
                  key={index}
                  className="matches-table"
                  match_awayteam_name={item.match_awayteam_name}
                  match_hometeam_name={item.match_hometeam_name}
                  match_awayteam_score={item.match_awayteam_score}
                  match_hometeam_score={item.match_hometeam_score}
                  team_away_badge={item.team_away_badge}
                  team_home_badge={item.team_home_badge}
                  goalScorer={item.goalscorer}
                  cards={item.cards}
                />
              </Zoom>
            ))
          ) : (
            <PulseLoader
              color={"#000000"}
              css={override}
              size={20}
              speedMultiplier={1}
            />
          )}
        </div>
        <CardLiveScore />
      </AnimationPages>
    </>
  );
};

export default LiveScore;
