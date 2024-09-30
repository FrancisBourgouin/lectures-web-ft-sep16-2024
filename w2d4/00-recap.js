// Existential questions

// Synchronous code

// Read from top to bottom
// Locks the user

// Asynchronous code

// WebWorker
// Event Driven
// Scoped instead of top to bottom

let bob = "Robert";

// setTimeout is asynchronous or synchronous?
setTimeout(() => {
  bob = "Bob";
}, 1000);

setTimeout(() => {
  bob = "Bob";
}, 1000);

console.log(bob);

// Calling vs Referencing

console.log("Hello!");

// setTimeout(console.log("How are you?"), 1000)
// setTimeout(() => console.log("How are you?"), 1000)

const fct1 = console.log("How are you?");
const fct2 = () => console.log("How are you?");

console.log(fct1, fct2);

// setTimeout(fct2, 1000)

// [1,2,3].map(num => num * 2).filter(num => num > 1)

setTimeout(() => console.log("One"), 1000);
setTimeout(() => console.log("Two"), 2000);
setTimeout(() => console.log("Three"), 3000);

setTimeout(() => {
  console.log("One");
  setTimeout(() => {
    console.log("Two");
    setTimeout(() => {
      console.log("Three");
    }, 1000);
  }, 1000);
}, 1000);
