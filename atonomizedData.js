const patients = require("./patients");
console.log(patients);

// map executes a callback for each element in the array
const anonymizedData = patients.map(function(patient) {
  // return an object with id and age, it gets added to the output array
  return {
    firstname: patient.firstName,
    lastname: patient.lastName,
    id: patient.id,
    age: patient.age,
  };
});

console.log(anonymizedData);