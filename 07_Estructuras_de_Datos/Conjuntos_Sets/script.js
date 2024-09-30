'use strict';

// Sets (Conjuntos)

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);

console.log(ordersSet);

console.log(new Set('Jonas'));

// Obtener tamaño del conjunto
console.log(ordersSet.size);

// Comprobar si determinado elemento esta en el conjunto
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Choripan'));

// Agregar elementos a un conjunto
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Eliminar elementos de un conjunto
ordersSet.delete('Garlic Bread');
console.log(ordersSet);

// Eliminar todos los elementos del conjunto
//ordersSet.clear()

// Iterar sobre un Conjunto

for (const order of ordersSet) {
  console.log(order);
}

// ----------- EJEMPLO ---------------

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Cuantas letras hay en un conjunto de un Nombre

console.log(new Set('danielcarvajal').size);
