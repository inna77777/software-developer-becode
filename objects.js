/** @format */

const readlineSync = require("readline-sync");

// Exercise 5.1
const askTvSerie = () => {
  const name = readlineSync.question("Enter the name: ");
  const year = readlineSync.question("Enter the production year: ");

  let castMembers = [];
  let moreCast = true;
  while (moreCast) {
    let member = readlineSync.question(
      "Enter a cast name (or press Enter to stop): "
    );
    if (member === "") {
      moreCast = false;
    } else {
      castMembers.push(member);
    }
  }

  return {
    name,
    year: Number(year),
    castMembers,
  };
};

// Exercise 5.2
const randomizeCast = (tvSerie) => {
  let shaffledCast = [...tvSerie.castMembers];
  for (let i = 0; i < shaffledCast.length; i++) {
    const randomInt = Math.floor(Math.random() * (i + 1));
    [shaffledCast[i], shaffledCast[randomInt]] = [
      shaffledCast[randomInt],
      shaffledCast[i],
    ];
  }
  return shaffledCast;
};

const tvSerie = askTvSerie();
console.log(JSON.stringify(tvSerie, null, 2));

const newCast = randomizeCast(tvSerie);
console.log(newCast);
