'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startedMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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

  order: function (startedIndex, mainIndex) {
    return [this.startedMenu[startedIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (startedIndex, mainIndex, time, address) {
    console.log(
      `Order received! ${this.startedMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

// Desestructuracion del Objeto
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Darle nombre distinto a las variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Establecer valores predeterminados
const { menu = [], startedMenu: starters = [] } = restaurant;
console.log(menu);

// Mutacion de variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//{a, b} = obj; -- Error de Sintaxis
({ a, b } = obj);
console.log(a, b);

// Objetos Anidados
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Ejercicio de Funcion
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  startedIndex: 2,
});
