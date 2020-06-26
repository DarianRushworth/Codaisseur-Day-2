const patients = require("./patients");

const contactDetails = patients.map(function(patient){
    const {phoneNumber} = patient
    return phoneNumber
})
console.log(contactDetails)