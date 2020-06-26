const patients = require("./patients");
// hardcoding id 4212 for now, we can make this dynamic later
const id = parseInt(process.argv[2]);

const specificPatient = patients.find(function(patient) {
  return id === patient.id
});

if(specificPatient !== undefined){
    console.log("OUTPUT:", specificPatient);
} else {
    console.log(`No patient in the records with that id: ${id}`)
}
