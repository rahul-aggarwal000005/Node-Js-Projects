// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(7));

const event = {
  name: "Birthday Party",
  guessList: ["rahul", "shivani", "megha"],
  printGuestList() {
    console.log("Guess List for ", this.name);
    this.guessList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
