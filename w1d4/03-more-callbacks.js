// More Callbacks

// HOF
// either a function that takes another function as a parameter TODAY
// either a function that will return a function definition

// runDrill is a Higher Order Function (HOF)
const runDrill = (nbOfTurns, doSomeAction) => {
  for (let i = 0; i < nbOfTurns; i++) {
    doSomeAction(i);
  }
};

// Mix and screw callback functions?

const mix = (turnNumber) => console.log("Mixed mixture for turn: ", turnNumber);
const screw = (turnNumber) => console.log("Screwed bit at depth level: ", turnNumber);

// Being a callback function is a relationship status

runDrill(5, mix); // mix is THE callback of runDrill
runDrill(5, screw); // screw is THE callback of runDrill

const forEachElement = (someList, action) => {
  for (const elementIndex in someList) {
    const element = someList[elementIndex]

    action(element, elementIndex, someList);
  }
};

const studentNames = ["Saif", "Bronwen", "Alexis", "Peter"];

const sayHello = (name) => console.log(`Hello ${name}!`)

const someComplexCallback = (value, index, array, song) => {
  // ...
}

forEachElement(studentNames, sayHello);
forEachElement(["Bob","Robert"], (name) => console.log(`Hello ${name}!`));


// console.log()