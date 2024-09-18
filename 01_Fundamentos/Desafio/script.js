// Variables
let massMark = 78; //kg 
let heightMark = 1.69;
let massJohn = 92; //kg 
let heightJohn = 1.95;

// Calculos
let BMIMark = massMark/(heightMark * heightMark);
let BMIJohn = massJohn/(heightJohn * heightJohn);

// Resultados

console.log("El BMI de Mark es: " + BMIMark);
console.log("El BMI de John es: " + BMIJohn);

// Boolean

let markHigherBMI = BMIMark > BMIJohn;

console.log("¿Es Mark quien tiene mayor BMI? " + markHigherBMI)