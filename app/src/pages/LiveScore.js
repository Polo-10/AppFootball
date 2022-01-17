import Ronaldo from "../img/Ronaldo.png";

import { useState, useEffect } from "react";

import Slide from "react-reveal/Slide";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

import Aside from "../components/Aside";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=90d5e0c94a9ac18b5cfd5477f3e75d22affab2e0a8f64dad1eafae4564eab3eb&match_live=1";
const ScoreA = ({ home_scorer, time }) => {
  return (
    <>
      <p></p>
      <p></p>
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
  home_scorer,
  ScoreA,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
  };

  return (
    <>
      <div class="title-box">
        {/* <p className="text">Local Team</p>
        <p className="text">Visitor Team</p> */}
      </div>

      <div className="title-box">
        <div className="team">
          <img onError={addDefaultImg} src={team_home_badge} alt="homelogo" />
          <p className="nameTeam">{match_hometeam_name}</p>
        </div>

        <p className="score">
          {match_hometeam_score} - {match_awayteam_score}
        </p>

        <div className="team">
          <img onError={addDefaultImg} src={team_away_badge} alt="awaylogo" />
          <p className="nameTeam">{match_awayteam_name}</p>
        </div>
        <p>{home_scorer}</p>
      </div>
    </>
  );
};

const LiveScore = () => {
  const [liveScoreState, setLiveScoreState] = useState([]);

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
        .catch((err) => console.log(err));

    getData();
  }, []);

  console.log(liveScoreState);

  return (
    <AnimationPages>
      <Helmet>
        <style>{`body {background-color: #C9C9C5;}`}</style>
      </Helmet>
      <div>
        <div className="containerRonaldo">
          <div className="ronaldo">
            <Slide left duration={1100}>
              <img src={Ronaldo} alt="" />
            </Slide>
          </div>
        </div>
        <div className="bgc">
          <aside className="aside"></aside>
        </div>
      </div>
      <div className="container2">
        <h1 className="scoreBoard">Score Board</h1>
        {liveScoreState.length > 0 &&
          liveScoreState.map((item, index) => (
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
          ))}
        {/* {liveScoreState.map((item) => {
          return (
            <div key={item.id}>
              {item.goalscorer.map((item2) => (
                <ScoreA
                  home_scorer={item2.home_scorer}
                  time={console.log(item2.time)}
                />
              ))}
            </div>
          );
        })}{" "}
        *
        {liveScoreState.map((item) => {
          return (
            <div>
              {item.goalscorer.map((item2) => (
                <ScoreElement
                  match_awayteam_name={item.match_awayteam_name}
                  match_hometeam_name={item.match_hometeam_name}
                  match_awayteam_score={item.match_awayteam_score}
                  match_hometeam_score={item.match_hometeam_score}
                  team_away_badge={item.team_away_badge}
                  team_home_badge={item.team_home_badge}
                  home_scorer={console.log(item2.home_scorer)}
                />
              ))}
            </div>
          );
        })}
         */}
      </div>
    </AnimationPages>
  );
};

export default LiveScore;
