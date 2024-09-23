// ERRORS !

// const addNumbers = (a, b) => {
//   return a + b;
// };

// const result = addNumbers(5, 8);

// console.log(result, 13);

// Automate that process

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const index in arr1) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};


// expect(arr1).to.deep.equal(arr2) // chai !


// What kind of errors can we have in our code?

// Syntax errors (wrong keywords)
// Ref errors (things that don't exist)
// Linting errors
// Logic errors


// if(I can do this){

// }
try{
  let number = 5
  number = 10
  // Line 42 will throw an error (exception)
  // V8 (Nodejs) 
  // (╯°□°）╯︵ ┻━┻
  throw new Error("RAAAAAAAAAAAAAA I'M MAD")
} catch(error){
  console.log(error)
}
console.log("YO YO YO")