const puppeteer = require("puppeteer");

let page;

const browserOpenPromise = puppeteer.launch({
  headless: false,
  slowMo: true,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then((browser) => {
    console.log("browser opened");
    let pageArrayPromise = browser.pages();
    return pageArrayPromise;
  })
  .then((browserPage) => {
    page = browserPage[0];
    return page.goto("https://www.google.com");
  })
  .then(() => {
    return page.waitForSelector("input[type='text']", { visible: true });
  })
  .then(() => {
    return page.type("input[type='text']", "codeforces");
  })
  .then(() => {
    return page.keyboard.press("Enter");
  })
  .then(() => {
    return page.waitForSelector("h3.LC20lb.DKV0Md", { visible: true });
  })
  .then(() => {
    page.click("h3.LC20lb.DKV0Md");
  })
  .catch((err) => {
    console.log(err);
  });
