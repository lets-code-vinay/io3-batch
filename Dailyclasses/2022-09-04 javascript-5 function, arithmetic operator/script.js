console.log("-------------------2022-09-04 --> 1 -------------------------->");
// const studentName = "Ankur Kumar";

// let mathMarks = 55;
// let EngMarks = 70;
// let scienceMarks = 35;
// let phyMarks = 87;
// let chemMarks = 70;

// console.log(
//   `1. My name is ${studentName} Maurya. I got marks in math is ${mathMarks}, in science is ${scienceMarks} and in English is ${EngMarks}`
// );

// scienceMarks = 65;
// console.log(
//   `2. My name is ${studentName} Maurya. I got marks in math is ${mathMarks}, in science is ${scienceMarks} and in English is ${EngMarks}`
// );
// const obtainedMarks =
//   mathMarks + EngMarks + scienceMarks + phyMarks + chemMarks;
// const totalMarks = 500;
// const percentage = (obtainedMarks / totalMarks) * 100;

// console.log(
//   `3. ${studentName}'s obtained marks is ${obtainedMarks} out of ${totalMarks} and his percentage is ${percentage.toFixed(
//     1
//   )}%`
// );
//----------- Function-----------
// function plumber() {
//   console.log('Hi!! I"m Plumber');
//   mason();
// }

// function mason() {
//   console.log('Hi!! I"m Mason');
//   carpenter();
// }

// function carpenter() {
//   console.log('Hi!! I"m Carpenter');
//   // plumber(); // it will make infinite loop
// }

// plumber();

// ------Example 1--------------
// function studentData(name, math, eng, sci, phy, chem) {
//   console.log(
//     `1. My name is ${name}. I got marks in math is ${math}, in science is ${sci}, in English is ${eng}, in Physics is ${phy} and in Chemistry is ${chem}`
//   );

//   const obtainedMarks = math + eng + sci + phy + chem;
//   const totalMarks = 500;
//   const percentage = (obtainedMarks / totalMarks) * 100;

//   console.log(
//     `2. ${name}'s obtained marks is ${obtainedMarks} out of ${totalMarks} and his percentage is ${percentage.toFixed(
//       1
//     )}%`
//   );
// }

// studentData("Bablu", 50, 60, 70, 65, 70);
// studentData("Roshni", 60, 55, 75, 55, 80);
// studentData("Anshu", 40, 45, 45, 65, 40);

// ------Example 1--------------
function studentData({ name, math, eng, sci, phy, chem }) {
  console.log(
    `1. My name is ${name}. I got marks in math is ${math}, in science is ${sci}, in English is ${eng}, in Physics is ${phy} and in Chemistry is ${chem}`
  );

  const obtainedMarks = math + eng + sci + phy + chem;
  const totalMarks = 500;
  const percentage = (obtainedMarks / totalMarks) * 100;

  console.log(
    `2. ${name}'s obtained marks is ${obtainedMarks} out of ${totalMarks} and his percentage is ${percentage.toFixed(
      1
    )}%`
  );
}
const studentName = "Bablu Kumar";
const physics = 85;
const chemistry = 78;
const math = 88;
const science = 68;
const english = 78;

studentData({
  name: studentName,
  math: math,
  eng: english,
  sci: science,
  phy: physics,
  chem: chemistry,
});
