'use strict';

// Arreglo
const array = [2, 3, 4];

// Metodo tradicional
const a = array[0];
const b = array[1];
const c = array[2];

// Desesctructuracion de Arreglos
const [x, y, z] = array;
console.log(x, y, z);

console.log(array);

// Arreglos Anidados
const anidado = [2, 4, [5, 6]];

const [i, , j] = anidado; //2, [5, 6]
const [v, w] = j;
console.log(v, w); // 5, 6

// Objeto

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startedMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startedIndex, mainIndex) {
    return [this.startedMenu[startedIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second);

// En este caso se eligen el primero y el tercero
const [primero, , tercero] = restaurant.categories; // Se deja un espacio en blanco
console.log(primero, tercero);

// Cambiar de Posicion las Variables
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Trabajando con la funcion
// Recibiendo 2 valores de retorno de la función
const [starter, principal] = restaurant.order(2, 0);
console.log(starter, principal);

// Establecer valores predeterminados
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
