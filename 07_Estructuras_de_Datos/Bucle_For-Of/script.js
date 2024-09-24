'use strict';

// Bucle For - Of

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

const menu = [...restaurant.startedMenu, ...restaurant.mainMenu];

// Usando el bublce

for (const item of menu) console.log(item);

// Obtener el elemento actual

for (const item of menu.entries()) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
