// 1. Write a program to find the overtime of 10 employees. Overtime is paid at the
// rate Rs. 12/hour. Every employees worked above 40 hours. Assume that employees do
//  not work fractional part of an hour
// employees - 10
//  overtime - 12/hour
// overtime <40 hours
// 40,45,48,12 --Done

function getOvertime() {
  for (let i = 1; i <= 10; i++) {
    const empName = prompt("Enter name of employee");
    let overtime = prompt("Enter the overtime of employee:");
    overtime = Number(overtime).toFixed(0);

    if (overtime > 40) {
      console.log(
        `The overtime of ${empName} is ${overtime * 12} for ${overtime} hours`
      );
    } else {
      console.log(
        `No overtime is given to ${empName} because OT is below 40 hours. He worked for ${overtime} hours`
      );
    }
  }
}

getOvertime();
