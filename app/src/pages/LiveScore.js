import Ronaldo from "../img/Ronaldo.png";

import { useState, useEffect } from "react";

import Slide from "react-reveal/Slide";
import AnimationPages from "../components/AnimatePages";
// import DetailsELement from "../components/DetailsElement";

import { Helmet } from "react-helmet";

import Aside from "../components/Aside";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=92c52f62d781874adc780c755fecb174ef2245354500417f642c0d00d5a75502&match_live=1";

const ScoreA = ({ home_scorer, time }) => {
  return (
    <>
      <p>{home_scorer}</p>
      <p>{time}</p>
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
      <div class="title-box"></div>

      <div className="title-box">
        <div className="team">
          <img onError={addDefaultImg} src={team_home_badge} alt="homelogo" />
          <p className="nameTeam">{match_hometeam_name}</p>
          <p>{DetailsELement}</p>
        </div>

        <p className="score">
          {match_hometeam_score} - {match_awayteam_score}
        </p>

        <div className="team">
          <img onError={addDefaultImg} src={team_away_badge} alt="awaylogo" />
          <p className="nameTeam">{match_awayteam_name}</p>
        </div>
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
              DetailsELement={liveScoreState.map((item) => {
                return (
                  <div key={item.id}>
                    {item.goalscorer.map((item2) => (
                      <ScoreA
                        home_scorer={item2.home_scorer}
                        time={`${item2.time} min`}
                      />
                    ))}
                  </div>
                );
              })}
            />
          ))}
        {/* {liveScoreState.map((item) => {
          return (
            <div key={item.id}>
              {item.goalscorer.map((item2) => (
                <ScoreA
                  home_scorer={item2.home_scorer}
                  time={`${item2.time} min`}
                />
              ))}
            </div>
          );
        })} */}

        {/* {liveScoreState.map((item) => {
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
                  DropDownDetails={<ScoreA />}
                />
              ))}
            </div>
          );
        })} */}
      </div>
    </AnimationPages>
  );
};

export default LiveScore;
