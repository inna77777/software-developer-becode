function manhattan(streetA, avenueA, streetB, avenueB) {
  return Math.abs(streetA - streetB) + Math.abs(avenueA - avenueB);
}

console.log(manhattan(1, 1, 2, 2)); // returns 2
console.log(manhattan(1, 1, 1, 1)); // returns 0
console.log(manhattan(5, 4, 3, 2)); // returns 4
