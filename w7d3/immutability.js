// Mutation vs Immutability

// Immutability => Can't change / Won't change
// Mutability =>

const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 11, 11, 11];

for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
  [...someArray].pop();
}

console.log(someArray);




someArray.map() // returns a NEW array
someArray.forEach() // returns a NEW array
someArray.filter() // returns a NEW array
someArray.reduce() // returns a NEW structure

someArray.reverse() // MUTATES the original array
someArray.sort() // MUTATES the original array

someArray.toSorted()
someArray.toReversed()


forumPost.replies.push()
forumPost.replies.push()
forumPost.replies.push()


const someArrayAgain = [1,2,3,4]
const updatedArray = [...someArrayAgain, 5]