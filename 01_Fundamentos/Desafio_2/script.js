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

// If - else

if(BMIMark > BMIJohn){
    console.log("El BMI de Mark " + BMIMark + " es mayor al BMI de John " + BMIJohn)
}else{
    console.log("El BMI de John " + BMIJohn + " es mayor al BMI de Mark " + BMIMark)
}

