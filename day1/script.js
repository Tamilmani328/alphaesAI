//CODING CHALLENGE 1

//TEST DATA 1

let markMass1 = 78;   
let markHeight1 = 1.69; 
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1> johnBMI1;

console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1.toFixed(2));
console.log("John's BMI:", johnBMI1.toFixed(2));
console.log("Is Mark's BMI higher?", markHigherBMI1);

// ........................................................

// Test Data 2

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("\nTest Data 2:");
console.log("Mark's BMI:", markBMI2.toFixed(2));
console.log("John's BMI:", johnBMI2.toFixed(2));
console.log("Is Mark's BMI higher?", markHigherBMI2);

//............................................................
//CODING CHALLENGE 2

//TEST DATA 1

let massMark3 = 78;
let heightMark3 = 1.69;
let massJohn3 = 92;
let heightJohn3 = 1.95;

let BMIMark3 = massMark3 / (heightMark3 ** 2);
let BMIJohn3 = massJohn3 / (heightJohn3 ** 2);

console.log("\nTest Data 1 :")
if (BMIMark3 > BMIJohn3) {
  console.log(`Mark's BMI (${BMIMark3.toFixed(2)}) is higher than John's (${BMIJohn3.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${BMIJohn3.toFixed(2)}) is higher than Mark's (${BMIMark3.toFixed(2)})!`);
}
//..........................................................
//TEST DATA 2

let massMark4 = 95;
let heightMark4= 1.88;
let massJohn4= 85;
let heightJohn4 = 1.76;

let BMIMark4 = massMark4 / (heightMark4 ** 2);
let BMIJohn4 = massJohn4 / (heightJohn4 ** 2);

console.log("\nTest Data 2 :")
if (BMIMark4 > BMIJohn4) {
  console.log(`Mark's BMI (${BMIMark4.toFixed(2)}) is higher than John's (${BMIJohn4.toFixed(2)})!`);
} else {
  console.log(`John's BMI (${BMIJohn4.toFixed(2)}) is higher than Mark's (${BMIMark4.toFixed(2)})!`);
}
