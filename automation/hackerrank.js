const puppeteer = require("puppeteer");
const loginLink = "https://www.hackerrank.com/auth/login";

const email = "fejaxeh814@nubenews.com";
const password = "nodejsdev";

let page;

const browerOpen = puppeteer.launch({
  headless: false,
  args: ["--start-maximized"],
  defaultViewport: null,
});

browerOpen
  .then((browser) => {
    return browser.pages();
  })
  .then((pagesArray) => {
    page = pagesArray[0];
    return page.goto(loginLink);
  })
  .then(() => {
    return page.waitForSelector("#input-1", { visible: true });
  })
  .then(() => {
    return page.type("#input-1", email);
  })
  .then(() => {
    return page.type("#input-2", password);
  })
  .then(() => {
    return page.click(".auth-button");
  })
  .then(() => {
    return waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
  })
  .then(() => {
    return waitAndClick('input[value="warmup"]', page);
  })
  .then(() => {
    return page.waitFor(3000);
  })
  .then(() => {
    return page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-styled");
  })
  .then((quesArray) => {
    console.log("number of questions :", quesArray.length);
  })
  .catch((err) => {
    console.log(err);
  });

const waitAndClick = (selector, cpage) => {
  return new Promise((resolve, reject) => {
    page
      .waitForSelector(selector, {
        visible: true,
      })
      .then(() => {
        return page.click(selector);
      })
      .then(() => {
        resolve();
      })
      .catch(() => {
        reject();
      });
  });
};
