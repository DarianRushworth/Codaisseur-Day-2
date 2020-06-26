const patients = require("./patients");

const databaseIds = patients.map(function(patient){
    const {id} = patient
    return id
})
console.log(databaseIds)