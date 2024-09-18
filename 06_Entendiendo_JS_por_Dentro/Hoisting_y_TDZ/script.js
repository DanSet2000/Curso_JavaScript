'use strict';

// Usar variables antes de declararlas
//console.log(me);
//console.log(job);
//console.log(birthYear);

// Declaracion de Variables
var me = 'Daniel';
let job = 'Student';
const birthYear = 2000;

// Declaracion de Funciones
console.log(addDeclaracion(2, 3)); // Me da el resultado
//console.log(addExpresion(2, 3));
//console.log(addArrow);

// Funciones

function addDeclaracion(a, b) {
  return a + b;
}

const addExpresion = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Ejemplo

// Cuando no hay productos, queremos eliminar el carrito de compras

if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('Eliminados todos los productos');
}
