const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

request(
  "https://www.worldometers.info/coronavirus/",
  function (error, response, html) {
    if (error) {
      console.log("error:", error);
    } else {
      handleHTML(html);
    }
  }
);

function handleHTML(html) {
  let selectorTool = cheerio.load(html);
  //   const h1s = selectorTool("h1");
  const contentArray = selectorTool("#maincounter-wrap");
  //   console.log(h1s.length);
  const total = chalk.yellow(selectorTool(contentArray[0]).text());
  const deaths = chalk.red(selectorTool(contentArray[1]).text());
  const recover = chalk.green(selectorTool(contentArray[2]).text());
  console.log(total);
  console.log(deaths);
  console.log(recover);
}
