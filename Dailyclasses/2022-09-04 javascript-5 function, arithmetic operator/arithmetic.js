console.log("Ankur", "kumar", "Maurya");
console.log("Ankur" + "kumar" + "Maurya");
console.log(`Ankur kumar Maurya`);
console.log(`AnkurKumarMaurya`);

const num = 555;
// console.log("Vinay", 555); // Vinay 555
// console.log("Vinay" + 555); // Vinay555
// console.log(`Vinay ${num}`); // vinay 555
// console.log(`Vinay555`); // Vinay555

//Arithmetic operators
console.log("----------Addition------------");
console.log(55 + 45); // 100
console.log("55" + "45"); // 5545
console.log("55", "45"); // 55 45
console.log("55" + 45); // 5545
console.log(55 + "45"); // 5545

console.log("----------Subtraction------------");
console.log(55 - "45"); // B: 10, R: 10, P: 5545, Ro: 10, An:10
console.log(55 - "30"); // B: 5545ab , R: xx , P: NaN , Ro: NaN , An: NaN
console.log("100" - 55); // 45
console.log(100 - 55); // 45

console.log("----------MULTIPLICATION------------");

console.log(10 * 5); // 50
console.log(10 * "5"); // 50
console.log("10" * "5"); // 50
console.log("10" * 5); // 50
console.log("10ab" * 5); // NaN
console.log("10ab" * "5"); // NaN
console.log("10ab" * "5ab"); // NaN

console.log("----------division------------");
console.log(10 / 5); // 2
console.log(10 / "5"); // 2
console.log("10" / "5"); // 2
console.log("10" / 5); // 2
console.log("10ab" / 5); // NaN
console.log("10ab" / "5"); // NaN
console.log("10ab" / "5ab"); // NaN

console.log("----------Modulus % ------------");
console.log(10 % 5); // 0
console.log(10 % "5"); // 0
console.log("10" % "5"); // 0
console.log("10" % 5); // 0

console.log(10 % 3); // 1
console.log(10 % 4); // 2
console.log(101 % 2); // 1

console.log("10ab" % 5); // NaN
console.log("10ab" % "5"); // NaN
console.log("10ab" % "5ab"); // NaN

console.log("----------Relational Operator ------------");
console.log("----------== and === ------------");

// == --> only value, not datatype
// === --> value and datatype

console.log("==  -->", "5" == 5); // true
console.log("==  -->", 15 == "15"); // true

console.log("==  -->", "5" == 6); // false
console.log("==  -->", 6 == "7"); // false
console.log("==  -->", "7" == "7"); // true

console.log("==  -->", "5" === 5); // string  === number , 5 === 5  // false
console.log("==  -->", "5" === 6); //  string  === number , 5 === 6  // false
console.log("==  -->", 6 === "7"); // number  === string , 6=== 7  // false
console.log("===  -->", "7" === "7"); // string  === string , 7 === 7  // true
console.log("===  -->", 7 === 7); //  number  === number , 7 === 7  // true
console.log("===  -->", 11 === 7); //  number  === number , 11 === 7  // false

console.log("==  -->", 15 == "15"); // true
console.log("==  -->", 15 === "15"); // false
