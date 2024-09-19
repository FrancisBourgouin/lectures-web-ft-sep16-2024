// WEIRD CALLBACKS !

const studentNames = ["Saif", "Bronwen", "Alexis", "Peter"];

const sayGoodMorning = (name) => console.log(`Good morning ${name}`);
const sayGoodbye = (name) => console.log(`Goodbye ${name}`);

const saySomething = (isMorning, name) => {
  if (isMorning) {
    console.log(`Good morning ${name}`);
  } else {
    console.log(`Goodbye ${name}`);
  }
};

// studentNames.forEach(sayGoodMorning)
// studentNames.forEach(sayGoodbye)

studentNames.forEach((name) => saySomething(true, name));
