'use strict';

// Usando "Rest"

// 1) Desestructuracion

// Spread, porque esta en el lado DERECHO  de =
const arr = [1, 2, ...[3, 4]];

// Rest, porque esta en el lado IZQUIERDO de =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Abre las 24 horas
      close: 24,
    },
  },
};

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startedMenu,
];

console.log(pizza, risotto, otherFood);

restaurant.orderPizza('Pepperoni', 'Onion', 'Cheese', 'Pineapple');

// Trabajando con Objetos

const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

// 2) Funciones

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
