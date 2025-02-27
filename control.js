/** @format */

const readlineSync = require("readline-sync");

// Exercise 2.1
let age = Number(readlineSync.question("Enter your age: "));
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not yet an adult");
}

// Exercise 2.2
let min = parseInt(readlineSync.question("Enter min:"));
let max = parseInt(readlineSync.question("Enter max:"));
if (min > max) {
  console.log(
    "Error: min cannot be greater than max(."
  );
} else {
  let current = parseInt(readlineSync.question("Enter current:"));
  if (current >= min && current <= max) {
    console.log("Current is between min and max");
  } else {
    console.log("Current is not between min and max");
  }
}
 
// Exercise 2.3
let num = 1;
while (num <= 100) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num ++;
}
 
for (let num = 2; num <= 100; num += 2) {
  console.log(num);
}

// Exercise 2.4

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i / 2);
  } else {
    console.log(i * 3);
  }
}

// Exercise 2.5
while (true) {
  let favNum = parseInt(readlineSync.question("Enter your favorite number:"));
  if (favNum === 42) {
    break;
  }
  console.log("Are you sure?");
}

// Exercise 2.6
let day = parseInt(readlineSync.question("Enter a number between 1 and 7:"));
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
if (day >= 1 && day <= 7) {
  console.log(days[day - 1]);
} else {
  console.log("Invalid input");
}

// Exercise 2.7
let n = parseInt(readlineSync.question("Enter n: "));
let total = n;

for (let i = 0; i < n; i++) {
  let input = readlineSync.question(
    "Enter a number or type $stop$ to finish: "
  );

  if (input.toLowerCase() === "stop") {
    break; 
  }

  total += parseInt(input);
}

console.log("Total sum of numbers:", total);

