
// Why do we want to use functions?

// To create reusable code
// To avoid repetition
// To clarify the code's intent

const checkIfEven = function (num) {
  return num % 2 === 0;
};
checkIfEven(10)



const studentNames = [
  "Saif",
  "Bronwen",
  "Alexis",
  "Peter"
]

const teacherNames = [
  "Francis",
  "Andy",
  "Pedro"
]

const sayGoodMorningToEveryone = function(){
  for(const name of studentNames){
    console.log(`Hello ${name}!`)
  }
}


sayGoodMorningToEveryone()

// If we have params, often the function will be more reusable.

const sayGoodMorningToEveryoneButBetter = function(listOfNames){
  for(const name of listOfNames){
    console.log(`Hello ${name}!`)
  }
}

sayGoodMorningToEveryoneButBetter("12345") // Weird but still works
// sayGoodMorningToEveryoneButBetter(123) // Not a list!
sayGoodMorningToEveryoneButBetter(teacherNames)
sayGoodMorningToEveryoneButBetter(studentNames)


// Definitions vs. Expressions

sayHi()
sayHi()

// Hoisting!
function sayHi(){
  console.log("Hey!")
}
function sayHi(){
  console.log("👿👿👿👿👿👿👿👿👿👿👿")
}

// IIFE (Immediatly Invoked Function Expressions)
// SCOPING IS KEY!

const someValue = 1

(function(){
  const someValue = 5
  console.log("hello!")
}())


// Arrow function!


const someFunctionExpr = function(){
  // ...
}

const someFunctionArrOneStatement = (num) => num % 2 === 0



const someFunctionArrMoreStatements = () => {

  return false
}

const someObj = {
  name:"Patator",
  greet: function(){
    console.log("Hi I'm ", this.name)
  }
}


// A function with no name / Anonymous function


