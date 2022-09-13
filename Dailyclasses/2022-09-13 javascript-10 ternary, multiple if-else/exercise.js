console.log("--------2022-09-13--------\n");
console.log("--------Ternary operator--------\n");

function buyTheCar(cash) {
  const car =
    cash > 16000
      ? `I am buying new Fortuner with cash of ${cash} Rs.`
      : `I love splendor, because i have only ${cash} Rs.`;

  return car;
}
const havingMoney = 10000;
console.log(buyTheCar(havingMoney));

console.log("--------Multiple if-else condition--------\n");

function rollTheDice(dice) {
  if (dice === 1 || dice === "1") {
    return `You got smallest number of ${dice} `;
  } else if (dice === 2 || dice === "2") {
    return `You got smaller number of ${dice} `;
  } else if (dice === 3 || dice === "3") {
    return `You got number of ${dice} `;
  } else if (dice === 4 || dice === "4") {
    return `You got chance to capture enemy with number of ${dice} `;
  } else if (dice === 5 || dice === "5") {
    return `You got larger number of ${dice} `;
  } else if (dice === 6 || dice === "6") {
    return `You got largest number of ${dice}, and got another chance `;
  } else {
    return "Try again, and roll the dice";
  }
}

const diceValue = "0";
const dice = rollTheDice(diceValue);
console.log("--->", dice);
