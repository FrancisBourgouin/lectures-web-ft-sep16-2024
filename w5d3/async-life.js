// Async JS

// Callbacks

// The original way to handle asynchronous operations

// Promises

// Newer version of how to interact with asynchronous operations

// Async/Await (Syntax Sugar for Promises)

const someObj = new Object();
const someOtherObj = {};

const someArray = new Array();
const someOtherArray = [];

const timerPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("YAY!");
      } else {
        reject("NAY!");
      }
    }, 1000);
  });
};

const someAsyncFunction = async () => {
  try{
    const result = await timerPromise();
    console.log(result);
  } catch(err){
    console.log(err)
  }
};

const somePromiseFunction = () => {
  timerPromise()
    .then((result) => console.log("result is", result))
    .catch((err) => console.log("err is", err));
};



const someFunction = async (a, b) => a + b

console.log(someFunction(5,5))