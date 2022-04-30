//  Object property shorthand

const name = "Rahul";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Delhi",
};

console.log(user);

// Object Destructuring

const product = {
  label: "Red NoteBook",
  price: 3,
  stock: 302,
  salePrice: undefined,
  rating: 4,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0, rating = 0 } = {}) => {
  console.log(type, label, stock, rating);
};

transaction("order", product);
