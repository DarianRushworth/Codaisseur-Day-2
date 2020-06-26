const patients = require("./patients");
const phoneNumber = process.argv[2]

let specificPatient = patients.find(function(patient){
    return phoneNumber === patient.phoneNumber
})

if(phoneNumber !== undefined){
    console.log(specificPatient)
} else {
    console.log(`That phone number does not register in our system: ${phoneNumber}`)
}