import Ronaldo from "../img/Ronaldo.png";

var elapsedTime = document.querySelector("#elapsed");
var homeTeamImage = document.querySelector("#homeLogo");
var homeTeamName = document.querySelector("#homeName");
var awayTeamImage = document.querySelector("#awayLogo");
var awayTeamName = document.querySelector("#awayName");
var lastMatchGoal = document.querySelector("#goals");
var matchTable = document.querySelector("#matchTable");

//the functions to create an element
function addMatchTile(data) {
  //createing the tile div
  var matchtile = document.createElement("div");
  matchtile.classList.add("match-tile");

  //creating the home match box
  var homeTeam = document.createElement("div");
  homeTeam.classList.add("team");
  //creating the image and the text
  var homeTileTeamName = document.createElement("p");
  homeTileTeamName.innerHTML = data["teams"]["home"]["name"];
  var homeTileTeamLogo = document.createElement("img");
  homeTileTeamLogo.src = data["teams"]["home"]["logo"];
  homeTeam.appendChild(homeTileTeamLogo);
  homeTeam.appendChild(homeTileTeamName);

  var awayTeam = document.createElement("div");
  awayTeam.classList.add("team");
  //creating the image and the text
  var awayTileTeamName = document.createElement("p");
  awayTileTeamName.innerHTML = data["teams"]["away"]["name"];
  var awayTileTeamLogo = document.createElement("img");

  awayTileTeamLogo.src = data["teams"]["away"]["logo"];
  awayTeam.appendChild(awayTileTeamLogo);
  awayTeam.appendChild(awayTileTeamName);

  //createing the score
  var score = document.createElement("p");
  score.innerHTML = data["goals"]["home"] + " - " + data["goals"]["away"];

  //append all the element to the parent
  matchtile.appendChild(homeTeam);
  matchtile.appendChild(score);
  matchtile.appendChild(awayTeam);

  matchTable.appendChild(matchtile);
}
//fetching the data
fetch(
  "https://cors-anywhere.herokuapp.com/http://api.isportsapi.com/sport/football/livescores?api_key=<JyDs9zY0Qbn2yEbN>",
  {
    // fetch("/sport/football/livescores", {
    // fetch("https://v3.football.api-sports.io/fixtures?live=all", {

    method: "GET",
  }
)
  .then((response) =>
    response.json().then((data) => {
      var matchesList = data["response"];
      console.log(data);
      var fixture = matchesList[0]["fixture"];
      var goals = matchesList[0]["goals"];
      var teams = matchesList[0]["teams"];
      console.log(matchesList.length);
      //Now let's set our first match
      elapsedTime.innerHTML = fixture["status"]["elapsed"] + "'";
      homeTeamImage.src = teams["home"]["logo"];
      homeTeamName.innerHTML = teams["home"]["name"];
      awayTeamImage.src = teams["away"]["logo"];
      awayTeamName.innerHTML = teams["away"]["name"];
      lastMatchGoal.innerHTML = goals["home"] + " - " + goals["away"];

      for (var i = 1; i < matchesList.length; i++) {
        addMatchTile(matchesList[i]);
      }
    })
  )
  .catch((err) => {
    console.log(err);
  });

const LiveScore = () => {
  return (
    <div className="containerBgc">
      <div className="container2">
        <h1>ScoreBoard</h1>
        <div className="title-box">
          <p>Local Team</p>
          <p id="elapsed">45'</p>
          <p>Visitor Team</p>
        </div>
        <div className="title-box">
          <div className="team">
            <img id="homeLogo" alt="" />
            <p id="homeName">Team name</p>
          </div>
          <p id="goals">3 - 1</p>
          <div className="team">
            <img id="awayLogo" alt="" />
            <p id="awayName">Team name</p>
          </div>
        </div>
        <hr />
        <div id="matchTable" className="matches-table"></div>
      </div>

      <div className="containerRonaldo">
        <div className="ronaldo">
          <img src={Ronaldo} alt="" />
        </div>
      </div>
      <div className="bgc">
        <aside className="aside"></aside>
      </div>
    </div>
  );
};

export default LiveScore;
