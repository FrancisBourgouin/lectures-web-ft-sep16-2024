// ### What could go wrong
// - Get an empty cart (WARN|IGNORE)
// - Could have an invalid cart (THROW)
// - Could have an invalid item (WARN)
// - Could have invalid tax percentage / missing (THROW)

// ### What could go right
// - Impromper math in the function
const chai = require("chai");
const calculateCart = require("../calculate-cart");
const expect = chai.expect;

describe("What could go wrong", () => {
  it("should warn us and return null if the cart is an empty array", () => {
    // Test here!
    const cart = [];
    const taxPercentage = 0.14975;

    const expectedOutput = null;
    const expectedMessage = "YOUR CART IS EMPTY YOU DUM DUM";

    const actualOutput = calculateCart(cart, taxPercentage);

    expect(actualOutput).to.equal(expectedOutput);
  });
  it("should throw an error if the cart is invalid", () => {
    // Test here!
    const cart = "TOTALLY VALID CART *SARCASM*";
    const taxPercentage = 0.14975;

    const expectedOutput = "INVALID CART!";

    // const actualOutput = calculateCart(cart, taxPercentage)
    const throwyFunction = () => calculateCart(cart, taxPercentage);

    expect(throwyFunction).to.throw(expectedOutput);
  });
  it("should warn us and skip the item if the item is invalid", () => {
    // Test here!
    const cart = [
      {
        name: "Fuji",
        price: 0.75,
        quantity: 12,
        icon: "🍏",
      },
      "POTATO",
    ];
    const taxPercentage = 0.14975;
    const expectedMessage = "HMMM THERES AN INVALID ITEM IN THERE";
    const expectedOutput = {
      subtotal: 9,
      tax: 1.35,
      total: 10.35,
      listOfItems: ["🍏"],
    };

    const actualOutput = calculateCart(cart, taxPercentage);

    expect(actualOutput).to.deep.equal(expectedOutput);
  });
  it("should throw an error if the tax is either missing or invalid", () => {
    // Test here!
    const cart = [
      {
        name: "Fuji",
        price: 0.75,
        quantity: 12,
        icon: "🍏",
      },
    ];
    const taxPercentage = null;

    const expectedOutput = "INVALID TAX AMOUNT! YOU CANNOT EVADE TAXES";

    const throwyFunction = () => calculateCart(cart, taxPercentage);

    expect(throwyFunction).to.throw(expectedOutput);
  });
});

describe("What could go right?", () => {
  it("should return a proper result object if the cart, the items and the tax are all valid", () => {
    const item1 = {
      name: "Irish Cobbler",
      price: 0.99,
      quantity: 5,
      icon: "🥔",
    };

    const item2 = {
      name: "Fuji",
      price: 0.75,
      quantity: 12,
      icon: "🍏",
    };

    const sampleCart = [item1, item2];

    const expectedOutput = {
      subtotal: 13.95,
      tax: 2.09,
      total: 16.04,
      listOfItems: ["🥔", "🍏"],
    };

    const actualOutput = calculateCart(sampleCart, 0.14975)

    expect(actualOutput).to.deep.equal(expectedOutput)
  });
});
