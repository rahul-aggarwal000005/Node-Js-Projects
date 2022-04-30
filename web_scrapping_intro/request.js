const request = require("request");

console.log("before");
request("https://www.worldometers.info/coronavirus/", function (error, response, html) {
  console.error("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("html:", html);
});

console.log("after");
