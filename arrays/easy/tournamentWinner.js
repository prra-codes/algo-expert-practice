// 11. Tournament Winner. Thu, 27/04/23

// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams complete against each other at a time, and for each competition, one team is designated the home team, whilst the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team recieves 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that recieves the most amount of points.

// Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

// Sample Input

// competitions = [["HTML", "C#""], ["C#","Python"], ["Python", "HTML"]]

// results = [0, 0, 1]

// Sample Output

// "Python"

// C# beats HTML, Python Beat C#, and Python Beats HTML.
// HTML - 0 points
// C# - 3 points
// Python - 6 points

// Time Complexity: O(n) time, where n is the number of competitions that we have.
// Space Complexity: O(k) space, where is k is the number of teams that are competing in the tournament

const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  let scores = {
    [currentBestTeam]: 0,
  };

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];
    let [homeTeam, awayTeam] = competitions[i];

    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(winningTeam, points, scores) {
  if (!(winningTeam in scores)) {
    scores[winningTeam] = 0;
  }

  scores[winningTeam] += points;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
