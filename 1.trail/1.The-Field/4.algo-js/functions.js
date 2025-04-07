/** @format */

const readlineSync = require("readline-sync");

//Exercise 4.1
/*
 * Calculates the surface area of a rectangle.
 *
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The surface area of the rectangle.
 */
function calcSurface(len, wid) {
  return len * wid;
}

let len = parseFloat(
  readlineSync.question("Enter the length of the rectangle:")
);
let wid = parseFloat(
  readlineSync.question("Enter the width of the rectangle:")
);
console.log("Surface of the rectangle: " + calcSurface(len, wid));

//Exercise 4.2
/*
 * Generates a random integer between 1 and 10 (inclusive).
 *
 * @returns {number} A random integer between 1 and 10.
 * */
function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

console.log("Random number :", rand10());

//Exercise 4.3
/*
 * Generates an array of `n` random integers between 1 and 10 (inclusive).
 *
 * @param {number} n - The number of random integers to generate.
 * @returns {number[]} An array containing `n` random integers between 1 and 10.
 */
function multiRand(n) {
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(rand10());
  }
  return numbers;
}

let n = parseInt(
  readlineSync.question("Enter the number of random numbers to generate:")
);
console.log("Random numbers :", multiRand(n));

//Exercise 4.4
/*
 * Randomly selects `n` unique learners from the given array.
 *
 * @param {string[]} inputAr - The array of learner names.
 * @param {number} n - The number of learners to pick.
 * @returns {string[]} An array of `n` randomly selected learners.
 */
function pickLearner(inputAr, n) {
  for (let i = inputAr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputAr[i], inputAr[j]] = [inputAr[j], inputAr[i]];
  }
  return inputAr.slice(0, n);
}

let learners = [
  "Manu",
  "Inna",
  "Arseniia",
  "Kamal",
  "Hugo",
  "Stéphan",
  "Martin",
  "Antoine",
  "Valentin",
  "Liana",
  "Jordan",
];
n = parseInt(readlineSync.question("Enter the number of learners to pick: "));
console.log("Selected learners:", pickLearner(learners, n));

//Exercise 4.5
/*
 * Calculates distance between two points.
 *
 * The formula is:
 * `distance = sqrt((x2 - x1)² + (y2 - y1)²)`
 *
 * @param {number[]} pointA - The first point as an array [x1, y1].
 * @param {number[]} pointB - The second point as an array [x2, y2].
 * @returns {number} distance between the two points, rounded to two decimal places.
 * */
function calcDistance(pointA, pointB) {
  const [x1, y1] = pointA;
  const [x2, y2] = pointB;
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return Math.round(distance * 100) / 100;
}
console.log(
  `Distance between $[1, 1] and $[2, 2]:`,
  calcDistance([1, 1], [2, 2])
);
console.log(
  `Distance between [1, 1] and $[3, 1]:`,
  calcDistance([1, 1], [3, 1])
);
console.log(
  `Distance between [4, 1] and $[1, 1]:`,
  calcDistance([4, 1], [1, 1])
);
console.log(
  `Distance between [-2, 2], and $[2, -2]:`,
  calcDistance([-2, 2], [2, -2])
);

//Exercise 4.6
/*
 * Calculate the factorial of a given number using recursion.
 * 
 * @param {number} num - The number for which to calculate the factorial.
 * @returns {number} The factorial of the given number.
 * */
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

let number = parseInt(
  readlineSync.question("Enter a number to calculate factorial:")
);
console.log("Factorial:", factorial(number));
