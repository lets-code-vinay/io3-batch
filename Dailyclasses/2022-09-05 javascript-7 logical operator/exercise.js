console.log("-----------Exercise ----------------");
// Enter marks of 5 subjects through keyboard  -done
// No marks will be greater than 100
// Find aggregate(average)
// Find obtained marks
// percentage

const math = prompt("Enter math marks");
const eng = prompt("Enter English marks.");
const physics = prompt("Enter physics marks.");
const chemistry = prompt("Enter chemistry marks.");
const coding = prompt("Enter coding marks.");

/**
 * @description Function to get student data
 * @param {Number} mathMarks
 * @param {Number} englishMarks
 * @param {Number} physicsMarks
 * @param {Number} chemistryMarks
 * @param {Number} codingMarks
 *
 */
function studentReportCard({
  mathMarks,
  englishMarks,
  physicsMarks,
  chemistryMarks,
  codingMarks,
}) {
  if (mathMarks > 100) {
    console.warn(`Enter the correct marks ${mathMarks} of Math below 100`);
  }
  if (englishMarks > 100) {
    console.warn(
      `Enter the correct marks ${englishMarks} of English below 100`
    );
  }
  if (physicsMarks > 100) {
    console.warn(
      `Enter the correct marks ${physicsMarks} of Physics below 100`
    );
  }
  if (chemistryMarks > 100) {
    console.warn(
      `Enter the correct marks ${chemistryMarks} of Chemistry below 100`
    );
  }
  if (codingMarks > 100) {
    console.warn(`Enter the correct marks ${codingMarks} of Coding below 100`);
  }

  const obtainedMarks =
    Number(mathMarks) +
    Number(englishMarks) +
    Number(physicsMarks) +
    Number(chemistryMarks) +
    Number(codingMarks);
  console.log("obtainedMarks --> ", obtainedMarks);
  const totalMarks = 500;

  if (
    mathMarks <= 100 &&
    englishMarks <= 100 &&
    physicsMarks <= 100 &&
    chemistryMarks <= 100 &&
    codingMarks <= 100
  ) {
    console.log("lets calculate the marks");

    // total of obtained marks/ no. of subjects
    const average = obtainedMarks / 5;
    console.log("The average of marks is:", average);

    // percentage -- obtained marks/ total marks * 100

    const percentage = (obtainedMarks / totalMarks) * 100;
    console.log("The percentage of marks is:", percentage);
  }
}

studentReportCard({
  mathMarks: math,
  englishMarks: eng,
  physicsMarks: physics,
  chemistryMarks: chemistry,
  codingMarks: coding,
});
