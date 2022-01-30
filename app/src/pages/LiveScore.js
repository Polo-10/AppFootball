import Ronaldo from "../img/Ronaldo.png";

import { useState, useEffect } from "react";

import Bounce from "react-reveal/Bounce";
import AnimationPages from "../components/AnimatePages";

import { Helmet } from "react-helmet";

import AsideLiveScore from "../components/AsideLiveScore";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=92c52f62d781874adc780c755fecb174ef2245354500417f642c0d00d5a75502&match_live=1";

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

  // console.log(liveScoreState);

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
              //   DetailsELement={liveScoreState.map((item) => {
              //     return (
              //       <div key={item}>
              //         {item.goalscorer.map((item2, index2) => (
              //           <ScoreA
              //             home_scorer={item2.home_scorer}
              //             // time={`${item2.time} min`}
              //           />
              //         ))}
              //       </div>
              //     );
              //   })}
              // />
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
        })}

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
        })} */}
        </div>
      </AnimationPages>
    </>
  );
};

export default LiveScore;
