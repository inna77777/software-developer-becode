/** @format */

// Exercice 3.0
const learners = ["Manu", "Inna", "Arseniia", "Kamal", "Hugo", "Stéphan", "Martin", "Antoine", "Valentin", "Liana", "Jordan"];
for (const learner of learners) {
  console.log(learner);
}

// Exercice 3.1
function sumOfArrayNumbers(array) {
  let total = 0;
  for (const number of array) {
    total += number;
  }
  return total;
}
console.log(sumOfArrayNumbers([1, 2, 3, 4, 5]));
console.log(sumOfArrayNumbers([100, 101, 102]));

// Exercice 3.2
function averageNumberOfArray(array) {
  return sumOfArrayNumbers(array) / array.length;
}
console.log(averageNumberOfArray([1, 2, 3, 4, 5]));
console.log(averageNumberOfArray([100, 101, 102]));

// Exercice 3.3
let array = [1, 2, 3];
let arrayCopy1 = [];
for (const item of array) {
  arrayCopy1.push(item);
}
console.log(arrayCopy1);

let arrayCopy2 = array.slice();
console.log(arrayCopy2);

// Exercice 3.4
function minMax(arr) {
  console.log("Min number of an array:", Math.min(...arr));
  console.log("Max number of an array:", Math.max(...arr));
}
minMax([1, 2, 3, 4, 5]);
minMax([100, 101, 102]);