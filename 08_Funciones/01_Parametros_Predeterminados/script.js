'use strict';

// Funciones

// Parametros Predeterminados

const bookings = [];

// Funcion que crea un objeto y agrega en el arreglo

// Valores por Defecto en los parametros de la funcion
const createBooking = function (
  flightNumber,
  numberPassenger = 1,
  price = 199 * numberPassenger
) {
  const booking = {
    flightNumber,
    numberPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
