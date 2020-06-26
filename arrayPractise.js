const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

console.log(tenthPatient);

// DIY
const secondPatient = patients[1];
console.log("Second patient:",secondPatient)

const numberOfPatients = patients.length;
const lastPatient = patients[numberOfPatients-1]
console.log("Last patient:",lastPatient)
// - console.log the last patient from the array