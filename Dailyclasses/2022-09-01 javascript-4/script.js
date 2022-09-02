console.log("Hello from script.js file");

// single line Comment

/* 
This is
multi
line comment
*/

// This is
// multi
// line comment

/* This is single line comment-2 */

// What are the variable?

// = assign operator
var a23 = 10;
var $b = 5;
var _c = a + b;
var d = _c;

console.log("This is variable -a", a);
console.log("This is variable -b", b);
console.log("This is variable -c", _c);
console.log("This is variable -d", d);

/**
 * Rules for variables
 *
 * 1. Variable must be declared by var,let,const
 * 2. Do not initialize variable with numbers  XXX var 454 = 90, var 5Value = 90,
 * 3. Do not initialize variables with special characters XXXX  var %abc  = 9, var #abc  = 9
 * 4. Variable start with underscore( _ ) is acceptable var _component    = 9;
 * 5. Do not use any reserved keywords
 *          var, this, function, console, for, if,
 */

/**
 * What are the identifiers?
 * Ans; Identifiers can be used to specify any value or character
 * variables, functions, reserved keywords
 */

/**
 * Syntax terminator
 * Semi-colon (;) is used as syntax terminator to end any line
 *
 */

/**
 * Indentation
 *
 * To make your code look more neat and readable
 *
 */

/**
 * Data-types
 *
 * We have 2 types of datatypes
 * A. Primitives
 * B. Non-primitives
 *
 * A. Primitives
 *      1. Number
 *      2. String
 *      3. Boolean
 *      4. undefined
 *      5. Null
 *      6. NaN
 *
 * B. Non-primitives
 *      1. Array
 *      2. Object
 *      3. Regex
 * */

/*
 * 1. Number dataType
 */
var anyNumber = 15;

console.log("anyNumber", anyNumber, typeof anyNumber);

/*
 * 2. String dataType
 * Any thing declared inside double quotes(""), single quotes('') and template literals(``)
 */

var myName = "Vinay";
console.log("myName", myName, typeof myName);

var numberInString = "4578745";
console.log("numberInString", numberInString, typeof numberInString);

var doubleQuote = "doubleQuote";
var singleQuote = "singleQuote";
var templateLiteral = `Template literals`;

console.log(
  "this is combination of ",
  doubleQuote,
  singleQuote,
  templateLiteral
);

console.log(
  "this is combination of join strings" +
    doubleQuote +
    singleQuote +
    templateLiteral
);

const whyMethods = "this is Rahul's dog";
const quotes = 'I just want to tell you, "You are duffer"';
const template = `This is template Literal`;

/**
 * Boolean
 *
 * Boolean is nothing but a set of True/False
 */
var isItSunnyToday = "false";

console.log("isItSunnyToday", isItSunnyToday, typeof isItSunnyToday);

/**
 * Undefined
 *
 * when we declare any variable but don't assign any value it will show undefined
 */
var undefinedVar;
console.log("undefinedVar", typeof undefinedVar, undefinedVar);
undefinedVar = 45;
console.log("undefinedVar--2", typeof undefinedVar, undefinedVar);

/**
 * null
 *
 * when we don't want to assign any value in the variable.
 */
var nullDatatype = null;
console.log("nullDatatype", typeof nullDatatype, nullDatatype);

/**
 * NaN --> Not a number
 */

console.log("--->", 10 + "vinay", 10 + 78);

console.log(
  "------------------------------------------------------------------------------------"
);

// ----2022-09-02
console.log(
  "conversion-->",
  45,
  String(45),
  typeof false,
  false,
  String(false),
  Number(false),
  Number(true),
  Number("vinay")
);

var ironMan = "Iron Man";
var hulk = "Hulk";

("we love avengers specially Iron Man and Hulk");

console.log("we love avengers specially", ironMan, "and", hulk);

console.log(
  "we love avengers specially" + " " + ironMan + " " + "and" + " " + hulk
);

console.log(`we love avengers specially ${ironMan} and ${hulk}`);

var city = "New Delhi";
var state = "Punjab";
console.log("1.--->", `${city} is a city and ${state} is State`);

var city = "Ludhiana";
console.log("2--->", `${city} is a city and ${state} is State`);

city = "Ludhiana";
state = "Punjab";

console.log("3--->", `${city} is a city and ${state} is State`);

//------------------------------------------------------------------------------

let num = 10;
let num2 = 45;
console.log("let--1->", num + num2);

num = 21;

console.log("let--2->", num + num2);

//---------------------------------------------------------------------------
// const --- constant

const capital = "Mumbai";
const state2 = "Maharashtra";

// capital = "Pune";

console.log(`${capital} is the capital of ${state2}`);

// ---------------------------------

console.log("output-1", "500" + 100); // 56100
console.log("output-2", 56 + 100); // 156
console.log("output-3", 56 + "100"); // 56100
console.log("output-4", "500" / "100"); //  5
console.log("output-5", 56 + 100 + true); // r-157
console.log("output-6", 56 + 100 + Number(true)); //157
console.log("output-7", 56 + 100 + "true"); // 156true
console.log("output-8", 56 + 100 + Number("true")); // NaN
console.log("output-9", 56 + 100 + Number("Vinay")); // Nan
console.log("output-9", 50 - "100" + "Vinay"); // 50100Vinay,
