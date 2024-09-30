// Promises!

// const someArray = []

// Promise?
// Asynchronous
// Pending => Limbo
// Resolved => Happy path
// Rejected => Sad path

const somePromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    // Success!
    // Attach the resolve callback to the .then method
    resolve("GOOD JOB!");
  } else {
    // Attach the reject callback to the .catch method
    reject("SAD :(");
  }
});

const anotherPromise = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    // Success!
    // Attach the resolve callback to the .then method
    resolve("GOOD JOB!");
  } else {
    // Attach the reject callback to the .catch method
    reject("SAD :(");
  }
});

console.log("FIRST!");

somePromise
  .then((message) => {
    console.log(message);
    anotherPromise
      .then((message) => console.log(message))
      .catch((errorMessage) => console.log(errorMessage));
  })
  .catch((errorMessage) => console.log(errorMessage));

console.log("LAST!");
