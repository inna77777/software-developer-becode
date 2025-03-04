/** @format */

const computeChange = (price, moneyHanded) => {
  if (
    typeof price !== "number" ||
    typeof moneyHanded !== "number" ||
    price <= 0 ||
    moneyHanded <= 0 ||
    moneyHanded < price
  ) {
    return [];
  }

  const changeAmount = moneyHanded - price;
  const denominations = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];
  let remainingChange = parseFloat(changeAmount.toFixed(2));
  const result = [];

  for (let denom of denominations) {
    while (remainingChange >= denom) {
      result.push(denom);
      remainingChange = parseFloat((remainingChange - denom).toFixed(2));
    }
  }

  return result;
};

const change1 = computeChange(12.3, 50);
console.log(change1); // [20, 10, 5, 2, 0.5, 0.2]

const change2 = computeChange(17.41, 20);
console.log(change2); // [2, 0.5, 0.05, 0.02, 0.02]
