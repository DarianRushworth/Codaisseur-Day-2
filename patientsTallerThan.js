const patients = require("./patients");
const height= process.argv[2]

const patientsTallerThan = patients.filter(function(patient){
    return height < patient.height
})

if(patientsTallerThan.length > 0){
    console.log("OUTPUT:", patientsTallerThan);
    console.log("TOTAL NUMBER OF PATIENTS", patients.length);
    console.log(`NUMBER OF PATIENTS TALLER THAN ${height}:`, patientsTallerThan.length);
} else {
    console.log(`Nobody is taller than ${height}, try adding a shorter height.`)
}