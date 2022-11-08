let array = [1, 2, 3, 4, 5, 6];

// array.fill() also change the original array
/**
 * first argument is the value, second is the start index, third is the length of array
 */
let result = array.fill(1, 3, 6);
console.log(result, array);

console.log(array.fill(2, 3)); // [1,2,3,2,2,2]

console.log(array.fill(3)); // [3,3,3,3,3,3]
