'use strict';

// Desafio de Programacion

/*
  Escribir un programa que reciba una lista de variable names escritos de manera 
  underscore_case y convertirlos en tipo camelCase.

  La entrada llegará de un Text Area insertado dentro del DOM, y la conversión ocurrirá 
  al momento de presionar el botón

  DATA DE PRUEBA:

  underscore_case
  first_name
  Some_Variable
  calculate_AGE
  delayed_departure

  Debería de producir la siguiente salida

  underscoreCase    ✅
  firstName         ✅✅
  someVariable      ✅✅✅
  calculateAge      ✅✅✅✅
  delayedDeparture  ✅✅✅✅✅
*/

// Dom
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button')); // Corrección aquí

// Programa
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');
  console.log(rows);

  for (const [i, row] of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
