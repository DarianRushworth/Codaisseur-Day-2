const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
const {weight,age,height} = firstPatient
console.log(weight)
console.log(age)
console.log(height)
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height

const fullName = `${firstPatient.firstName} ${firstPatient.lastName}`
console.log(fullName)
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient

if(firstPatient.dailyExercise === "yes"){
    console.log(`This patient exercises!`)
} else {
    console.log(`Doesn't exercise.`)
}
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"