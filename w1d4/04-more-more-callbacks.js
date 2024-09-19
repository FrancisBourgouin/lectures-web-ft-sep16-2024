// Complex conditions!

// I want to output a message "GOOD JOB", "I AM DISAPPOINT"
// Depending on the parents behavior and the student grade

// INPUT: Student grade Object {score:00, subject:""}
// OUTPUT: String (in the console)

// FIRST CASE: Strict Parent every grade should be over 90

const someGrade = { score: 86, subject: "arts" };

const outputMessageFromStrictParent = (grade) => {
  if (grade.score > 90) {
    console.log("GOOD JOB");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

// SECOND CASE: Sciency Parents every grade should be over 70, but maths should be 90 and plus

const outputMessageFromSciencyParent = (grade) => {
  if (
    (grade.score > 70 && grade.subject !== "math") ||
    (grade.score > 90 && grade.subject === "math")
  ) {
    console.log("GOOD JOB");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

// Make it generic!

const outputMessageFromParent = (grade, checkIfParentHappy) => {
  if (checkIfParentHappy(grade)) {
    console.log("GOOD JOB");
  } else {
    console.log("I AM DISAPPOINT");
  }
};

const evaluateFromSciencyParents = (grade) =>
  (grade.score > 70 && grade.subject !== "math") ||
  (grade.score > 90 && grade.subject === "math");

const evaluateFromStrictParents = (grade) => grade.score > 90;

const evaluateFromRandomParents = () => Math.random() > 0.5


outputMessageFromParent(someGrade, evaluateFromRandomParents)
outputMessageFromParent(someGrade, evaluateFromSciencyParents)