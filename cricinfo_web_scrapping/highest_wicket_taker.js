const request = require("request");
const cheerio = require("cheerio");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
request(url, (err, res, html) => {
  if (err) {
    console.log("error:", err);
  } else {
    extractHTML(html);
  }
});

function extractHTML(html) {
  const $ = cheerio.load(html);
  const teamsArray = $(".match-info-MATCH .team");
  let winningTeam = "";

  for (let i = 0; i < teamsArray.length; i++) {
    if ($(teamsArray[i]).hasClass("team-gray") == false) {
      const winningTeamElement = $(teamsArray[i]).find(".name");
      winningTeam = $(winningTeamElement).text();
    }
  }

  const scoreCards = $(".Collapsible");

  for (let i = 0; i < scoreCards.length; i++) {
    const teamTitle = $(scoreCards[i]).find(".header-title");
    const teamName = $(teamTitle).text().split("INNINGS")[0].trim();
    if (teamName === winningTeam) {
      const bowlersTable = $(scoreCards[i]).find(".bowler tbody tr");
      let maxWickets = 0;
      let playerName = "";
      for (let j = 0; j < bowlersTable.length; j++) {
        const bowlerStats = $(bowlersTable[j]).find("td");
        const wickets = $(bowlerStats[4]).text();
        const name = $(bowlerStats[0]).text();
        if (wickets > maxWickets) {
          maxWickets = wickets;
          playerName = name;
        }
        if (wickets > 0) j++;
      }

      console.log("Player: ", playerName);
      console.log("Wicket: ", maxWickets);
    }
  }
}
