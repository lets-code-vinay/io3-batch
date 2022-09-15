// {/* <li>Hardness must be greater than 50</li>
// <li>Carbon content must be less than 0.7</li>
// <li>Tensile strength must be greater than 5600</li> */}

// values - hardness, carbon, tensile

// const hardness = prompt("Enter the hardness");
// const carbon = prompt("Enter the carbon");
// const tensile = prompt("Enter the tensile strength");

const hardness = 56;
const carbon = 0.8;
const tensile = 5600;

function findGrade({ hardness, carbon, tensile }) {
  if (hardness > 50 && carbon < 0.7 && tensile > 5600) {
    console.log(
      `This steel is GRADE-10 Steel with carbon: ${carbon}, hardness: ${hardness}, tensile:${tensile}`
    );
  } else if (hardness > 50 && carbon < 0.7) {
    console.log(
      `This steel is GRADE-9 Steel with  hardness: ${hardness}, carbon:${carbon}`
    );
  } else if (carbon < 0.7 && tensile > 5600) {
    console.log(
      `This steel is GRADE-8 Steel with carbon: ${carbon}, tensile:${tensile}`
    );
  } else if (hardness > 50 && tensile > 5600) {
    console.log(
      `This steel is GRADE-7 Steel with  hardness: ${hardness}, tensile:${tensile}`
    );
  } else if (hardness > 50 || carbon < 0.7 || tensile > 5600) {
    console.log(`This steel is GRADE-6 Steel `);
  } else {
    console.log(`This steel is GRADE-5 Steel, Because no condition matched `);
  }
}

// findGrade({ hardness: hardness, carbon: carbon, tensile: tensile });
