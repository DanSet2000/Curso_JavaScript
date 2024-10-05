'use strict';

// Funciones

// Funciones de Primera Clase

// Funcion que toma una cadena y devuelve una nueva sin espacios en ella
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Funcion que toma una cadena y pone en mayusculas la primera palabra
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Funcion de Orden Superior
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// Llamando a la funcion
transformer('JavaScript is the best!', upperFirstWord); // Solo se declara la funcion no se la llama

transformer('JavaScript is the best!', oneWord);

// JS usa el callback todo el tiempo
const high5 = function () {
  console.log('👋');
};

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Funcion que devuelve una nueva funcion

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Almacenamos la funcion dentro de la variable greeterHey
// Esta nueva variable ahora es una funcion
const greeterHey = greet('Hey');
greeterHey('Daniel');
greeterHey('Jonas');

// En una sola
// Funcion greet / Funcion greeterHey
greet('Hello')('Juanito');
