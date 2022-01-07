import Ronaldo from "../img/Ronaldo.png";

import { useState, useEffect } from "react";

import Slide from "react-reveal/Slide";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=90d5e0c94a9ac18b5cfd5477f3e75d22affab2e0a8f64dad1eafae4564eab3eb&match_live=1";

const ScoreElement = ({
  match_awayteam_name,
  match_hometeam_name,
  match_awayteam_score,
  match_hometeam_score,
  team_away_badge,
  team_home_badge,
  leagueName,
  matchTime,
  status,
  homeRed,
  awayRed,
  homeYellow,
  awayYellow,
  location,
  weather,
  homeScore,
  awayScore,
  hasLineup,
}) => {
  const addDefaultImg = (e) => {
    e.target.src = "https://via.placeholder.com/150/771796";
  };

  return (
    <>
      <div className="title-box">
        <div className="team">
          <img onError={addDefaultImg} src={team_home_badge} alt="homelogo" />
          <p>{match_hometeam_name}</p>
          <p>{homeYellow}</p>
        </div>
      </div>
      <p>
        Score: {match_hometeam_score}-{match_awayteam_score}
      </p>
      <div className="title-box">
        <div className="team">
          <img onError={addDefaultImg} src={team_away_badge} alt="awaylogo" />
          <p>{match_awayteam_name}</p>
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
        .catch((err) => console.log(err));

    getData();
  }, []);

  console.log(liveScoreState);

  return (
    <>
      <div className="containerBgc">
        <div className="containerRonaldo">
          <div className="ronaldo">
            <Slide left>
              <img src={Ronaldo} alt="" />
            </Slide>
          </div>
        </div>
        <div className="bgc">
          <aside className="aside"></aside>
        </div>
      </div>
      {/* LiveScore */}
      {/* <div className="container2"> */}
      {/* <h1>Score Board</h1> */}
      {/* <div className="title-box">
          <p>Local Team</p>
          <p>Time</p>
          <p>Visior Team</p>
        </div> */}
      <div className="container2">
        <h1>Score Board</h1>
        {liveScoreState.length > 0 &&
          liveScoreState.map((item, index) => (
            <ScoreElement
              className="matches-table"
              match_awayteam_name={item.match_awayteam_name}
              match_hometeam_name={item.match_hometeam_name}
              match_awayteam_score={item.match_awayteam_score}
              match_hometeam_score={item.match_hometeam_score}
              team_away_badge={item.team_away_badge}
              team_home_badge={item.team_home_badge}
              homeYellow={console.log(item.homeYellow)}
            />
          ))}
      </div>
      {/* </div> */}
    </>
  );
};

{
  /* <div className="containerBgc">
  <div className="containerRonaldo">
    <div className="ronaldo">
      <img src={Ronaldo} alt="" />
    </div>
  </div>
  <div className="bgc">
    <aside className="aside"></aside>
  </div>
</div>; */
}

export default LiveScore;
