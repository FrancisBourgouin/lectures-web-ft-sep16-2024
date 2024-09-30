// Hot chocolate

// Asyncronous operations
// Error prone

// Warm the milk (Frother / Microwave)
// Mix a little bit of milk + chocolate
// Pour the blend in a mug
// Add more milk + mix
// Add some marshmallows

const warmMilk = (nextStep) => {
  console.log("Warming milk up...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return nextStep("Milk is ready!");
      } else {
        throw new Error("OMG THERES MILK EVERYWHERE");
      }
    } catch (err) {
      console.log("OH NO!", err.message);
    }
  }, 2000);
};

const mixMilkAndChocolate = (nextStep) => {
  console.log("Mixing chocolate and milk...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return nextStep("Mix is ready!");
      } else {
        throw new Error("OMG CHOCOLATE MELTED TOO HARD FOR SOME REASON");
      }
    } catch (err) {
      console.log("OH NO!", err.message);
    }
  }, 2000);
};

const pourBlendInMugAndAddMilk = (nextStep) => {
  console.log("Pouring the mix and milk together...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return nextStep("Mix is ready!");
      } else {
        throw new Error("OMG I POURED IT ON MY FEET IT BURNS");
      }
    } catch (err) {
      console.log("OH NO!", err.message);
    }
  }, 2000);
};

const addMarshmallows = () => {
  console.log("Add marshmallows...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return console.log("Mix is ready!");
      } else {
        throw new Error("OMG IT'S THE FLUFFY MONSTER FROM GHOSTBUSTER");
      }
    } catch (err) {
      console.log("OH NO!", err.message);
    }
  }, 2000);
};

// warmMilk()
// mixMilkAndChocolate()

warmMilk((milkMessage) => {
  console.log(milkMessage);
  mixMilkAndChocolate((mixMessage) => {
    console.log(mixMessage);
    pourBlendInMugAndAddMilk((pourMessage) => {
      console.log(pourMessage);
      addMarshmallows();
    });
  });
});
