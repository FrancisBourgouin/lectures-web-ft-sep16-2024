// const fs = require("fs");

// fs.readFile("./README.md", {encoding:"utf-8"}, (error, data) => {
//   console.log(data);
// });

const fsAgain = require("fs/promises");

console.log("STARTING READFILE");

fsAgain
  .readFile("./README.md", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("FINISHED READFILE"));

Promise.all([
  fsAgain.readFile("./README.md", { encoding: "utf-8" }),
  fsAgain.readFile("./QUESTIONS.md", { encoding: "utf-8" }),
]);

Promise.race([
  fsAgain.readFile("./README.md", { encoding: "utf-8" }),
  fsAgain.readFile("./QUESTIONS.md", { encoding: "utf-8" }),
]);

// Promises are the evolution of callbacks
// Async/Await Syntax sugar for promises

const someAsyncFunction = async () => {
  console.log("STARTING READFILE");

  try {
    const data = await Promise.all([
      fsAgain.readFile("./README.md", { encoding: "utf-8" }),
      fsAgain.readFile("./QUESTIONS.md", { encoding: "utf-8" }),
    ]);
    // const data = await fsAgain.readFile("./README.md", { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("FINISHED READFILE");
  }
};

someAsyncFunction();

const addTwoNumbers = async (a, b) => a + b;
