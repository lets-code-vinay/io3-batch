console.log("-------------2022-09-05 --------------_");
console.log("-------------Relational Operator --------------");

console.log("-------------== and === --------------");
// == checks only value not datatype
// === checks value and datatypes

console.log("1.--->", "Ram" == "ram"); // false
console.log("2.---->", "Ram" === "ram"); // false

console.log("3.--->", "Ram" == "Ram"); // true
console.log("4.---->", "Ram" === "Ram"); // true

console.log("5.--->", "true" == true); // 'false
console.log("6.---->", "true" === true); // false

console.log("7.--->", "1" == true); // true
console.log("8.---->", "1" === true); // false

console.log("9.--->", 1 == true); // true
console.log("10.---->", 1 === true); // false

console.log("9.--->", 0 == false); // true
console.log("10.---->", 0 === false); // false

console.log("11.--->", "" == false); // true
console.log("12.---->", "" === false); // false

console.log("13.--->", undefined == false); // false
console.log("14.---->", undefined === false); // false

console.log("15.--->", null == false); // false
console.log("16.---->", null === false); // false

// ! === not

console.log("-------------! === not --------------");

console.log("17.--->", !true == false); // true
console.log("18.---->", !true === false); // true

console.log("19.--->", !false == false); // false
console.log("20.---->", !false === false); // false

console.log("------------- != and !== --------------");
console.log("21. --->", 12 != "12"); // false
console.log("22. --->", 12 !== "12"); // true

console.log("------------- (  >  )   greater than --------------");
// left > right
console.log("23. -->", 10 > 5); // true
console.log("24. -->", true > false); // 1 > 0 true
console.log("25. -->", 1 > 0); // true
console.log("26. -->", "a" > "A"); // according to ASCII codes
console.log("27. -->", 45 > 45); // false

console.log(
  "------------- (  >=   )   greater than and equal to --------------"
);
// left > right
console.log("28. -->", 10 >= 10); // true
console.log("29. -->", true >= false); //  true
console.log("30. -->", true >= true); //  true

console.log("31. -->", -10 >= 10); //  false
console.log("32. -->", "A" >= "a"); // according to ASCII codes

const paise = 60000;
const carPrice = 60000;

if (paise >= carPrice) {
  console.log("Congratulations!! you bought a brand new car ");
} else {
  console.log("Sorry!! you can buy only motorcycle ");
}
