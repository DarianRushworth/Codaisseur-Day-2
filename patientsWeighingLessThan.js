const patients = require("./patients");
const weight = parseInt(process.argv[2]);


const patientsWeighingLessThan = patients.filter(function(patient){
    return weight > patient.weight
})

if(patientsWeighingLessThan.length > 0){
    console.log("OUTPUT:", patientsWeighingLessThan);
    console.log("TOTAL NUMBER OF PATIENTS", patients.length);
    console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);
} else {
    console.log(`There is no-one that weighs less than that, please try adding more weight.`)
}
