/* 
setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const name = ["Rahul", "Shivani", "Deepanshu"];
const shortNames = name.filter((name) => {
  name.length <= 7;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Delhi", (data) => {
  console.log(data);
});

*/

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (num1, num2, callback) => {
//   setTimeout(() => {
//     const sum = num1 + num2;
//     callback(sum);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1,2,3,4]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
