const patients = require("./patients");
const email = process.argv[2];

let specificPatient = patients.find(function(patient){
    return email === patient.email
})

if(email !== undefined){
    console.log(specificPatient)
} else {
    console.log(`That email doesnt register within our system: ${email}`)
}
