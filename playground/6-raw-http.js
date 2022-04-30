const http = require("https");
const url =
  "http://api.weatherstack.com/current?access_key=bbdb461a132142463eda3f9c31c55dac&query=40,-75";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    console.log(chunk);
  });

  response.on("end", () => {});
});

request.end();
