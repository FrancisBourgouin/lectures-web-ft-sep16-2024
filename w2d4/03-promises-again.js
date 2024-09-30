const warmMilk = () => {
  console.log("Warming milk up...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.2) {
          return resolve("Milk is ready!");
        } else {
          throw new Error("OMG THERES MILK EVERYWHERE");
        }
      } catch (err) {
        reject(err.message);
      }
    }, 2000);
  });
};

const mixMilkAndChocolate = () => {
  console.log("Mixing chocolate and milk...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.2) {
          return resolve("Mix is ready!");
        } else {
          throw new Error("OMG CHOCOLATE MELTED TOO HARD FOR SOME REASON");
        }
      } catch (err) {
        reject(err.message);
      }
    }, 2000);
  });
};

const pourBlendInMugAndAddMilk = () => {
  console.log("Pouring the mix and milk together...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.2) {
          return resolve("Mix is ready!");
        } else {
          throw new Error("OMG I POURED IT ON MY FEET IT BURNS");
        }
      } catch (err) {
        reject(err.message);
      }
    }, 2000);
  });
};

const addMarshmallows = () => {
  console.log("Add marshmallows...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.5) {
          return resolve("Mix is ready!");
        } else {
          throw new Error("OMG IT'S THE FLUFFY MONSTER FROM GHOSTBUSTER");
        }
      } catch (err) {
        reject(err.message);
      }
    }, 2000);
  });
};

const outputMessage = message => console.log(`***\n ${message} \n***`)

const outputError = message => console.log(`😡😡😡\n ${message} \n😡😡😡`)


warmMilk() // returns a promise (GOOD/BAD)
.then(outputMessage) // ALWAYS GOOD
.catch(errMessage => {
  outputError(errMessage)
  console.log("I GUESS IT'S GONNA BE A COLD HOT CHOCOLATE")
})
.then(mixMilkAndChocolate) // returns a promise (GOOD/BAD)
.then(outputMessage) // ALWAYS GOOD
.then(pourBlendInMugAndAddMilk) // returns a promise (GOOD/BAD)
.then(outputMessage) // ALWAYS GOOD
.then(addMarshmallows) // returns a promise (GOOD/BAD)
.then(outputMessage) // ALWAYS GOOD
.catch(outputError)
.finally(() => console.log("OOF WHAT AN EXPERIENCE"))