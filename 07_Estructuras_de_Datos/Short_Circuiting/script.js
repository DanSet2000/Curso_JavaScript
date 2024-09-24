'use strict';

// Operadores Lógicos && y ||

// OR: Si el primer valor es un valor verdadero, inmediatamente devolverá ese primer valor.
console.log(3 || 'Daniel');

console.log('' || 'Jonas');

console.log(true || 0);

console.log(undefined || null);

// AND: Cuando el primer valor es un valor falso, inmediatamente devolverá ese valor.
console.log(0 && 'Daniel');

// Operador Coalescente Nulo (??)

// Operadores de Asignacion Lógica

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

// Operador de Asignacion de Ordenes

// OR Asignacion de Ordenes
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// Operador de Asignacion de Conocimiento Teológico
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Operador de Asignacion Final Ideologico

rest2.owner &&= '<ANONIMO>';
