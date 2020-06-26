const patients = require("./patients");

console.log(patients);

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height));
}

const bmis = patients.map(function(patient) {

  const {firstName, height, weight} = patient
    let BMI = calculateBMI(height, weight) 

  return `Name: ${firstName}, BMI: ${BMI}`;
});

console.log(bmis);