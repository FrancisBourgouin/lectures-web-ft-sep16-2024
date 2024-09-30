const calculateCart = require("./calculate-cart");

const item1 = {
  name: "Irish Cobbler",
  price: 7.99,
  quantity: 5,
  icon: "🥔",
};

const item2 = {
  name: "Fuji",
  price: 0.75,
  quantity: 12,
  icon: "🍏",
};

const item3 = "Fuji Again"

const sampleCart = [item1, item2, item3];

const result = calculateCart(sampleCart, 0.14975);

console.log(result);

// const someArray = new Date()

const obj1 = { a: 1 };
const obj2 = { a: 1 };

obj1 === obj2;



