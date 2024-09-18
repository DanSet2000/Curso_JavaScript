'use strict';

// Primitivos
let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

// Objetos

const me = {
  name: 'Daniel',
  age: 23,
};

// Creando un nuevo objeto "amigo" a partir de me y cambiando un dato
const friend = me;
friend.age = 27;
console.log('Amigo:', friend);
console.log('Yo', me);
