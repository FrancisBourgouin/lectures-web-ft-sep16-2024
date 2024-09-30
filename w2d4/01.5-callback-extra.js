// structure : message, errorMessage
// {message:"", error:null}
// {message:null, error:""}

const warmMilk = (nextStep) => {
  console.log("Warming milk up...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return nextStep({ message: "Milk is ready!", error: null });
      } else {
        throw new Error("OMG THERES MILK EVERYWHERE");
      }
    } catch (err) {
      return nextStep({ message: null, error: err });
    }
  }, 2000);
};

warmMilk((result) => {
  if (err) {
    return console.log(err.message);
  }
  console.log(result.message);
});

const warmMilkAgain = (nextStepIfSuccessful, nextStepIfFailure) => {
  console.log("Warming milk up...");

  setTimeout(() => {
    try {
      if (Math.random() > 0.5) {
        return nextStepIfSuccessful("Milk is ready!");
      } else {
        throw new Error("OMG THERES MILK EVERYWHERE");
      }
    } catch (err) {
      return nextStepIfFailure(err);
    }
  }, 2000);
};

warmMilkAgain(
  (message) => console.log("HAPPY!", message),
  (error) => console.log("SAD!", error.message)
);
