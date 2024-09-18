'use strict';

const array = [7, 8, 9];

// Usando "Spread"

const newArray = [1, 2, ...array]; // Elimina todos los valores del arreglo y los escribe individualmente
console.log(newArray);
console.log(...newArray); // 1 2 7 8 9

// Ejercicio

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startedMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startedIndex, mainIndex) {
    return [this.startedMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is you pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copias superficiales de un arreglo
const mainMenuCopy = [...restaurant.mainMenu];

// Fusionar dos arreglos
const menu = [...restaurant.startedMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables
const str = 'Daniel';
const letters = [...str, '', 'S'];
console.log(letters);

// Ejercicio con una Funcion
const ingredients = [
  prompt('Lets make pasta! Ingredient 1?'),
  prompt('Lets make pasta! Ingredient 2?'),
  prompt('Lets make pasta! Ingredient 3?'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
