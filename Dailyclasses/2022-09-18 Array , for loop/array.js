const array1 = [
  "Maruti",
  "BMW",
  "MG",
  "Volvo",
  "kia",
  "Suzuki",
  "Mercedes Benz",
  "Saab",
  "Audi",
]; // array of string
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // array of numbers
const array3 = [[0, 1], [true, false, true], ["Saab", "Volvo"], ["BMW"]]; // array of array
const array4 = [
  { name: "zebra", id: 90 },
  { name: "Lion", id: 465 },
  { name: "Leopard", id: 15 },
]; // Array of object

console.log("-->", array1[3]);
console.log("--length--", array4.length);
console.log("array 3--?>", array3[1][2]);

// Loops

// 1. for(){}
// 2. variable definition
// 3. condition
// 4. increment

const table = 3;
const limit = 50;
for (let i = 0; i <= limit; i++) {
  // 2 x1 = 2
  console.log("hello this is table no.", `${table} X ${i} = ${table * i}`);
}

// for (let i = 1; i <= limit; i++) {
//   const tableValue = table * i;

//   if (tableValue % 5 == 0 || tableValue % 11 == 0) {
//     console.log("hello this is table no.", `${table} X ${i} = ${tableValue}`);
//   }
// }

for (let i = 0; i < array1.length; i++) {
  if (array1[i] == "Maruti") {
    //   if (i == 4) {
    console.log(`${array1[i]} is an Indian Brand.`);
  } else {
    console.log(`I love ${array1[i]}`);
  }
}
