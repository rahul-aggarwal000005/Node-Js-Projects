const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([3, 2, 1, 5]);
    reject("Something went wrong!");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Success : ", result);
  })
  .catch((error) => {
    console.log(error);
  });
