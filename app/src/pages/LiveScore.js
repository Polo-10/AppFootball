import Ronaldo from "../img/Ronaldo.png";

import { useState, useEffect } from "react";

const url =
  "https://apiv3.apifootball.com/?action=get_events&APIkey=97d9664621e7c934b8045ceda543fa95f0dd62e332fac2ba8cbc723d308ffe14&match_live=1";

const ScoreElement = ({
  match_awayteam_name,
  match_hometeam_name,
  match_awayteam_score,
  match_hometeam_score,
  team_away_badge,
  team_home_badge,
}) => {
  return (
    <>
      <div className="title-box">
        <div className="team">
          <img src={team_home_badge} alt="homelogo" />
          <p>{match_hometeam_name}</p>
        </div>
      </div>
      <p>
        Score: {match_hometeam_score}-{match_awayteam_score}
      </p>
      <div className="title-box">
        <div className="team">
          <img src={team_away_badge} alt="awaylogo" />
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

  // console.log(liveScoreState);
  return (
    <>
      <div className="containerBgc">
        <div className="containerRonaldo">
          <div className="ronaldo">
            <img src={Ronaldo} alt="" />
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
