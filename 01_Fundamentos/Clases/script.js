//let js = 'Hola';
//if (js === 'Hola') alert ('Esto es una alerta de JavaScript');

// Esto se escribe en la consola del navegador web
console.log(25 + 10);


// Declaracion de Variables
let firstName = 'Daniel';
var secondNombre = 'Alejandro';


// Tipos de Datos
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof(javaScriptIsFun));

// Operadores Matemáticos
const anioActual = 2024;

const edadDaniel = anioActual - 2000;
const edadSara = anioActual - 1986;
console.log(edadDaniel, edadSara);

// Union de cadenas

const primerNombre = 'Daniel';
const segundoNombre = 'Alejandro';

console.log(primerNombre + ' ' + segundoNombre);  

// Operadores Comparacion

console.log(edadDaniel > edadSara);

// Cadenas

// const firstName = "Daniel";
const job = "Estudiante";
const anioNacimiento = 2000;

const Daniel = 'Mi nombre es: ' + firstName + ' ,trabajo como: ' + job + 
' y nací en el año: ' + anioNacimiento;

console.log(Daniel);

// Plantillas de Templates

const newDaniel = "Mi nombre es: ${firstName}, soy un ${job} y nací en el año: ${anioNacimiento}";
console.log(newDaniel);

// Estructuras de Control

// --------------------------------------------------------

// If - Else

let edad = 18;
let tieneLaEdad = edad >= 18;

if (tieneLaEdad === true){
    console.log("Puedes sacar una licencia");
}else{
    console.log("Aún no puedes sacar una licencia")
    console.log("Te faltan " + (18 - edad) + " años.")
}


let siglo;
if(anioNacimiento <= 2000){
    let siglo = 20;
}else{
    let siglo = 21;
}
console.log(siglo);

// Switch

const dia = 'Lunes';

switch (day){
    case 'Lunes': 
        console.log("Es Lunes");
        break;
    case 'Martes':
        console.log("Es Martes");
        break;
    case 'Miercoles':
        console.log("Es Miercoles");
        break;
    case 'Jueves':
        console.log("Es Jueves");
        break;
    case 'Viernes':
        console.log("Es Viernes");
        break;
    default:
        console.log("Es fin de semana");  
        break;                  
}

// Operador Condicional (Ternario)

const age = 23;
age >= 18 ? console.log('Me gusta el vino') : console.log('Me gusta el agua');


// Conversión de Datos

const inputYear = '1998';

console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

// Operadores Logicos

const tieneLicencia = true;     // A
const tieneBuenaVista = true;   // B

console.log(tieneLicencia && tieneBuenaVista);  // AND
console.log(tieneBuenaVista || tieneLicencia);  // OR
console.log(!tieneLicencia);    // NOT

