'use strict';

// Funciones

// Usando la Palabra "this"

// Metodos "call" y "apply"

const tame = {
  airline: 'Tame',
  iataCode: 'TM',
  bookings: [],
  book: function (flightNumber, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      passengerName,
    });
  },
};

tame.book(239, 'Daniel Carvajal');
tame.book(636, 'Mike Smith');
console.log(tame);

// Creando un nuevo Objeto de Aerolinea
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Nueva funcion que se llamara en los objetos
const book = tame.book; // Guardando la funcion de Tame en una variable

// book(23, 'Sarah Williams')  Esto no es posible

// ----- Usando "Apply" -----
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(tame, 541, 'Juan Perez');
console.log(tame);

// Creando un nuevo Objeto de Aerolinea
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// ----- Usando "Apply" -----

// Toma una matriz de Argumentos
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

// Forma moderna de hacer lo mismo de Apply
book.call(swiss, ...flightData);

// ----- Usando "Bind" -----

const bookEW = book.bind(eurowings);
bookEW(123, 'Steven Williams');

const bookTame = book.bind(tame);
bookTame(456, 'Juanito Escarcha');

const bookLX = book.bind(swiss);
bookLX(789, 'Sarah Logan');

// De Manera Específica
const bookEW23 = book.bind(eurowings, 23); // Seteando el primer argumento a 23
bookEW23('Alfredo Mateos'); // Solo necesita el nombre ahora

// Con Event Listeners

tame.planes = 300;
tame.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// Pasar a una funcion, se necesita Bind
document
  .querySelector('.buy')
  .addEventListener('click', tame.buyPlane.bind(tame));

// Aplicacion Parcial

const addTax = function (tax, value) {
  return value + value * tax;
};

console.log(addTax(0.1, 200));

const addIVA = addTax.bind(null, 0.15);
// addIVA = value => value + value * 0.15

console.log(addIVA(100));
console.log(addIVA(23));

// Funcion que devuelve otra funcion
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTaxRate(0.23);

console.log(addVAT(100));
console.log(addVAT(23));
