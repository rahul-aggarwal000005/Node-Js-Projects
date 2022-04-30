const request = require("request");
const cheerio = require("cheerio");

const url =
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

request(url, (err, res, html) => {
  if (err) {
    console.log("error:", error);
  } else {
    extractHTML(html);
  }
});

function extractHTML(html) {
  const $ = cheerio.load(html);
  const lastCommentArray = $(
    ".match-comment-wrapper .match-comment-long-text>p"
  );
  const lastComment = $(lastCommentArray[0]).text();
  console.log(`Last Comment : ${lastComment}`);
}
