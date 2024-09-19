// Higher order functions!

const runDrillScrew = (nbOfTurns) => {
  for (let i = 0; i < nbOfTurns; i++) {
    console.log("Screwed bit at depth level: ", i);
  }
};

runDrillScrew(10);

const runDrillMix = (nbOfTurns) => {
  for (let i = 0; i < nbOfTurns; i++) {
    console.log("Mixed mixture for turn: ", i);
  }
};

runDrillMix(10);

const runDrill = (nbOfTurns, doSomeAction) => {
  for (let i = 0; i < nbOfTurns; i++) {
    doSomeAction(i);
  }
};

const mix = (turnNumber) => console.log("Mixed mixture for turn: ", turnNumber);
const screw = (turnNumber) => console.log("Screwed bit at depth level: ", turnNumber);


runDrill(20, mix)
runDrill(20, screw)

// Callbacks!
