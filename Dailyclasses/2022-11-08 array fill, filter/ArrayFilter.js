let filterArr = ["Mango", "Apple", "Grapes", "Red", "Blue"];

// filterArr.filter((item) => {
//   if (item.length >= 5) {
//     console.log(item);
//   }
//   //   console.log(item, i, filterArr);
// });
const arr = [1, 2, 3, 89, 45, 11, 1, "Radha", "Kanha", "John"];

arr.filter(function (item) {
  if (typeof item === "number") {
    console.log(item);
  }
  if (typeof item === "string") {
    console.log("string", item);
  }
});

let studentName = ["ABCD", "A", "B", "DFGHG"];
studentName.filter((value) => {
  if (value.length >= 4) {
    console.log(value);
  }
});
