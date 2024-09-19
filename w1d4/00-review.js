// Existential questions!

// I'm lost ?!

// Learning a language
// How to think

// CLARIFY QUESTION

// Define inputs
// Define outputs

// Loops!

// C-Style For Loop

let start = 0;
let end = 10;
let incrementor = 1;

for (let i = start; i < end; i += incrementor) {
  console.log("Hello!");
}

// For..of
// For the current element of the list
// Useful for structures (iterable structures)

const someList = [1, 2, 3, 4, 5];

for (const element of someList) {
  console.log(`The number is ${element}`);
}

// For..in
// For the current index/key in the list/object

const someObject = { name: "Irish Cobbler", type: "potato" };

for(const key in someObject){
  console.log(`The key is ${key}`)
  console.log(`The value is ${someObject[key]}`)
}

// .forEach


[1,2,3,4,5].forEach(num => console.log(num))