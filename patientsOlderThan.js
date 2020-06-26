const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
const age = parseInt(process.argv[2]);

const patientsOlderThan = patients.filter(function(patient) {
  return age < patient.age
});

if(patientsOlderThan.length > 0){
    console.log("OUTPUT:", patientsOlderThan);
    console.log("TOTAL NUMBER OF PATIENTS", patients.length);
    console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
} else {
    console.log(`There are no older patients, try adding a younger age.`)
}
