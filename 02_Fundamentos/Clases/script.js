'use strict';

// --------------- Funciones ----------------------

function logger(){
    console.log('Mi nombre es Daniel');
}

logger();   // Llamar a la función
logger();

function frutasProcesador(manzanas, naranjas){
    console.log(manzanas, naranjas);
    const jugo = `Jugo hecho con ${manzanas} manzanas y ${naranjas} naranjas.`;
    return jugo;
}

// Pasamos los valores que se asignarán a los parámetros (Argumentos)
const jugoManzana = frutasProcesador(5, 2);
// Guardamos ese valor y lo capturamos en una variable.
console.log(jugoManzana);

const jugoNaranja = frutasProcesador(1, 4);
console.log(jugoNaranja);


// Funcion para calcular edad

function calcEdad(anioNacimiento){
    return 2024 - anioNacimiento;
}

const edad = calcEdad(1991);


// Funcion Expresión

const calcEdad2 = function (anioNacimiento){
    return 2024 - anioNacimiento;
}

const edad2 = calcEdad2(1991);

console.log(edad, edad2);

// Funcion de Flecha

const calcEdad3 = birthYear => 2024 - birthYear;

const edad3 = calcEdad3(2000);
console.log(edad3);

// Funcion de Flecha

const aniosJubilacion = (anioNacimiento, primerNombre) => {
    const edadActual = 2024 - anioNacimiento;
    const jubilacion = 65 - edadActual;
    // Retorno
    return `${primerNombre} se puede jubilar en ${jubilacion} años.`;
}

console.log(aniosJubilacion(1961, 'Nancy'));
console.log(aniosJubilacion(1965, 'Manuel'));

// Funciones que llaman a otras Funciones

function cortarFruta(fruit){
    return fruit * 4;
}

function procesadorFrutas(apples, oranges) {
    // Llamando una función dentro de otra función
    const pedazosManzana = cortarFruta(apples);
    const pedazosNaranja = cortarFruta(oranges);

    const jugo = `Jugo hecho con ${pedazosManzana} trozos de manzana y con ${pedazosNaranja} trozos de naranja.`

    return jugo;
};

console.log(procesadorFrutas(2,3));

// ------------- Arreglos --------------------

const amigos = ['Daniel', 'Marco', 'Jorge'];
console.log(amigos);
console.log(amigos[0]);         // Obtenemos el primer elemento del arreglo
console.log(amigos.length);     // Numero de elementos en arreglo
console.log(amigos[amigos.length - 1]);     // Obtener el ultimo elemento del arreglo

// Ejercicio

// Funcion que determina la edad de una persona
const calculadEdad = function(anioNacimiento){
    return 2024 - anioNacimiento;
}

// Arreglo con los años de nacimiento de cada persona
const anios = [1990, 1995, 1998, 2002, 2010, 2018];

// Usando la funcion para calcular los años de algunos elementos en el arreglo
const anio = calculadEdad(anios[0]);
const anio2 = calculadEdad(anios[2]);
const anio3 = calculadEdad(anios[anios.length - 1]);

// Guardando los resultados en un nuevo arreglo e imprimiendo en consola
const edades = [anio, anio2, anio3];
console.log(edades);

// -------------- Objetos ------------------------

// Ejemplo de un Objeto

const daniel = {
	firstName: 'Daniel',
	lastName: 'Carvajal',
	edad: 23,
	cargo: 'Estudiante',
	amigos: ['Juan', 'Jonathan', 'Adrian']
};

console.log(daniel);

console.log(daniel.lastName);

const interesadoEn = prompt ('Que quieres concer de Daniel? ' +
    'Elige entre firstName, lastName, edad, cargo y amigos')

    if (daniel[interesadoEn]){
        console.log(daniel[interesadoEn])
    }else{
        console.log("Solicitud Incorrecta")
}

// Ejercicio

// Replicar la oración: "Daniel tiene 3 amigos, y su mejor amigo se llama Juan"

console.log(`${daniel.firstName} tiene ${daniel.amigos.length} amigos y su mejor amigo se llama ${daniel.amigos[0]}`);

// --------------- Bucles o Iteraciones -----------------------------

for (let rep = 1; rep <= 10; rep++){
    console.log(`Repeticiones Realizadas: ${rep}`);
}

// Usando bucles para recorrer un arreglo.
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

for (let i = 0; i< dias.length; i++){
    console.log(`El día de hoy es: ${dias[i]}`)

}

// Guardando los resultados del bucle en otro arreglo
const years = [1991, 2007, 1969, 2020]

// Arreglo Vacio
const ages = []

// Llenando el Arreglo
for (let i = 0; i < years.length; i++){
    ages[i] = 2024 - years[i] 
}

console.log(ages);

// Recorriendo una matriz en sentido contrario
for (let i = years.length - 1; i >= 0; i--){
    console.log(years[i]);
}

// Un bucle dentro de otro bucle

for (let exercise = 1; exercise < 4; exercise++){
    console.log('------- Iniciando Ejercicio ' + exercise)

    for (let rep = 1; rep < 6; rep++){
        console.log('Ejercicio: ' + exercise + ' Levantando peson en la Repeticion: ' + rep)
    }
}

// ------------------- Ciclo WHILE -------------------------

let rep = 1;

while (rep <= 10){
    console.log('Levantando peso en la repeticion: ' + rep);
    rep++;
}

// Ciclo While sin usar un contador

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6){
    console.log('Haz sacado un: ' + dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice ===6) console.log('El ciclo va a terminar, salió un 6')
}