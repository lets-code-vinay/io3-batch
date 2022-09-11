// Write a program to find is the entered number is even or odd

let number = prompt("Enter a number to check Even/Odd");

number = Number(number);

function evenOdd(num) {
  // if (num % 2 === 0) {
  //   console.log(`${num} is a valid Even Number.`);
  // }

  // if (num % 2 !== 0) {
  //   console.log(`${num} is a valid Odd Number.`);
  // }

  if (num % 2 === 0) {
    console.log(`${num} is a valid Even Number.`);
  } else {
    console.log(`${num} is not a valid Even Number.`);
  }
}

evenOdd(number);
