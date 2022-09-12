console.log("3.14", 3.14);

//-- To get the value of PI
const pi = Math.PI;
console.log("Math.PI()", pi);

console.log("---------------- Math.sqrt(x)-------------");
// to find the sqrt of any number
console.log("Math.sqrt--", Math.sqrt(144));

// Math.pow(number, power)
console.log("--------------- Math.pow(number, power)-------------");

// to find the power of any number
console.log("Math.pow--", Math.pow(2, 2)); // 2^2 ---2*2
console.log("Math.pow--", Math.pow(51, 2));
console.log("Math.pow--", Math.pow(21, 7));

// Math.ceil()
console.log("---------------- Math.ceil()-------------");

// Provide the decimal value to largest nearest value
console.log("Math.ceil of 1541.68 is--", Math.ceil(1541.68));
console.log("Math.ceil of 12.3 is--", Math.ceil(12.3));
console.log("Math.ceil of 641.89 is--", Math.ceil(641.89));
console.log("Math.ceil of 43.002 is--", Math.ceil(43.002));
console.log("Math.ceil of 0.1 is--", Math.ceil(0.1));

// Math.floor()
console.log("---------------- Math.floor()-------------");

// Provide the decimal value to smallest nearest value
console.log("Math.floor of 1541.68 is--", Math.floor(1541.68)); // 1541
console.log("Math.floor of 12.3 is--", Math.floor(12.3)); // 12
console.log("Math.floor of 641.89 is--", Math.floor(641.89)); // 641
console.log("Math.floor of 43.002 is--", Math.floor(43.002)); // 43
console.log("Math.floor of 0.1 is--", Math.floor(0.1)); // 0

// Math.round()
console.log("--------------- Math.round()-------------");

// Provide the decimal value to as per .5 nearest value
console.log("Math.round of 1541.68 is--", Math.round(1541.68)); // 1542
console.log("Math.round of 12.3 is--", Math.round(12.3)); // 12
console.log("Math.round of 641.89 is--", Math.round(641.89)); // 642
console.log("Math.round of 43.002 is--", Math.round(43.002)); // 43
console.log("Math.round of 0.1 is--", Math.round(0.1)); // 0

// Math.trunc()
console.log("--------------- Math.trunc()-------------");

// Remove the decimal point
console.log("Math.trunc of 1541.68 is--", Math.trunc(1541.68)); // 1541
console.log("Math.trunc of 12.3 is--", Math.trunc(12.3)); // 12
console.log("Math.trunc of 641.89 is--", Math.trunc(641.89)); // 641
console.log("Math.trunc of 43.002 is--", Math.trunc(43.002)); // 43
console.log("Math.trunc of 0.1 is--", Math.trunc(0.1)); // 0

// Math.abs()
console.log("---------------- Math.abs()-------------");
// Abs -- absolute provides which number is using in the number
console.log("Math.abs of 1541.68 is--", Math.abs(-1541.68));
console.log("Math.abs of 12.3 is--", Math.abs(12.3));
console.log("Math.abs of 641.89 is--", Math.abs(-641.89));
console.log("Math.abs of 43.002 is--", Math.abs(-43.002));
console.log("Math.abs of 0.1 is--", Math.abs(-0.1));

// Math.random()
console.log("---------------- Math.random()-------------");
// Random provides some random numbers

console.log("Math.random is--", Math.random());

console.log("Math.random is--", Math.random() * 1000);
console.log("Math.random is--", Math.random().toFixed(2));
console.log("Math.random is--", Math.ceil(Math.random() * 1000));

// Math.min()
console.log("---------------- Math.min()-------------");
// min provides  min number

console.log("Math.min is--", Math.min(5, 9, -3, 6, 100, -9, 8));
console.log("Math.min is--", Math.min(5, -5));
console.log("Math.min is--", Math.min(5));
console.log("Math.min is--", Math.min(-52, -51));

// Math.max()
console.log("---------------- Math.max()-------------");
// max provides  max number

console.log("Math.max is--", Math.max(5, 9, -3, 6, 100, -9, 8));
console.log("Math.max is--", Math.max(5, -5));
console.log("Math.max is--", Math.max(5));
console.log("Math.max is--", Math.max(-52, -51));
