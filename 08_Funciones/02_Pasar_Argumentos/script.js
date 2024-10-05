'use strict';

// Funciones

// Pasar Argumentos

const flight = 'LH234';

const daniel = {
  name: 'Daniel Carvajal',
  passport: 1750315887,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 1750315887) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, daniel);

console.log(flight);
console.log(daniel);

// Es lo mismo que hacer

const flightNumber = flight;
const passenger = daniel;

// Cosas que pueden suceder

/*
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(daniel);
checkIn(flight, daniel);
*/
