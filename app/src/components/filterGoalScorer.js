export default function func(goals) {
  const scors = goals.map((item) => item.score.split(" - ").map(Number));
  let result = [];
  for (let i = 0; i < scors.length; i++) {
    if (i === 0) {
      scors[i][0]
        ? result.push({
            time: goals[i].time,
            name: goals[i].home_scorer,
            type: "home",
          })
        : result.push({
            time: goals[i].time,
            name: goals[i].away_scorer,
            type: "away",
          });
    } else {
      scors[i][0] !== scors[i - 1][0]
        ? result.push({
            time: goals[i].time,
            name: goals[i].home_scorer,
            type: "home",
          })
        : result.push({
            time: goals[i].time,
            name: goals[i].away_scorer,
            type: "away",
          });
    }
  }
  return result;
}
