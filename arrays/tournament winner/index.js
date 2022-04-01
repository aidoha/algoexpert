function tournamentWinner(competitions, results) {
  let obj = {};
  for (let i = 0; i < competitions.length; i++) {
    const homeWinner = competitions[i][0];
    const awayWinner = competitions[i][1];
    if (results[i] === 1) {
      obj[homeWinner] = obj[homeWinner] ? obj[homeWinner] + 1 : 1;
    } else if (results[i] === 0) {
      obj[awayWinner] = obj[awayWinner] ? obj[awayWinner] + 1 : 1;
    }
  }

  let max = { number: -Infinity, winner: "" };
  for (let key in obj) {
    if (obj[key] > max.number) {
      max.number = obj[key];
      max.winner = key;
    }
  }
  return max.winner;
}
