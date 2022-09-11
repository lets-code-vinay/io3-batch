//  1. The temperature of any city is in fahrenheit degrees is input through
// the keyboard. write a program to convert this temperature into
// celsius(centigrade) degrees
console.log("--------1.-Fahrenheit to celsius---------");

// const fahrenheit = prompt("Enter the temperature in fahrenheit");
const fahrenheit = 100;

function convertFahrenheitToCelsius(f) {
  let far = Number(f);

  const cel = (far - 32) * (5 / 9);
  return `The converted temperature of ${far}\xB0 fahrenheit is ${cel.toFixed(
    2
  )}\xB0 celsius `;
}

console.log(convertFahrenheitToCelsius(fahrenheit));

console.log("--------1.-Area of Circle---------");
const pi = 3.14;

function area({ radius, type, length, width }) {
  if (type == "circle") {
    const areaOfCircle = pi * (radius * radius);
    return `The area of ${type} is ${areaOfCircle.toFixed(
      2
    )}, which radius is ${radius}`;
  }

  if (type == "rectangle") {
    const areaOfRec = length * width;

    return `The area of ${type} is ${areaOfRec.toFixed(
      2
    )}, which length is ${length} and Width is ${width}`;
  }
}

function perimeter({ type, radius, length, width }) {
  if (type == "rectangle") {
    const perimeter = 2 * (length + width);
    return `The Perimeter of ${type} is ${perimeter.toFixed(
      2
    )}, which length is ${length} and Width is ${width}`;
  }

  if (type == "circle") {
    const perimeter = 2 * pi * radius;
    return `The circumstance of ${type} is ${perimeter.toFixed(
      2
    )}, which radius is ${radius}`;
  }
}

const radius = prompt("Enter the radius of circle.");
const areaOfCircle = area({ radius: radius, type: "circle" });
const peri = perimeter({ radius: radius, type: "circle" });
console.log(areaOfCircle);
console.log(peri);

const len = prompt("Enter the length of Rectangle");
const wid = prompt("Enter the width of Rectangle");

const areaOfRec = area({ type: "rectangle", length: len, width: wid });
console.log(areaOfRec);

const periOfRec = perimeter({ type: "rectangle", length: len, width: wid });
console.log(periOfRec);
