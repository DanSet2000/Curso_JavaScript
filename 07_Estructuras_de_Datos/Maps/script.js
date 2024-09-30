'use strict';

// Mapas (Maps)

const rest = new Map();

// Llenando el Map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisboa, Portugal');

console.log(rest);

// Encadenando varios set
rest
  .set('categories', ['Italian', 'Pizeeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed D:');

// Leer datos de un Mapa

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// Ver si existe una propiedad o no en el Mapa
console.log(rest.has('categories'));

// Eliminar una propiedad del mapa
rest.delete(2);
console.log(rest);

// Tamaño de un mapa
console.log(rest.size);

// Limpiar un mapa
//rest.clear();

// Usando un arreglo como propiedad
rest.set([1, 2], 'Test');
console.log(rest);

// Otro método para poblar un mapa nuevo

const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😊😊'],
  [false, 'Try Again 😒😒'],
]);

console.log(question);

// Convertir un Objeto a Mapa
/*console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap); */ 2;

// Iteracion sobre Maps
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your Answer'));

console.log(answer);

if (answer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

// Convertir un Map en un Array

console.log([...question]);
