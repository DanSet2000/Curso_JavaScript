'use strict';

// Strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Obtener la posicion de un Caractér de la Cadena

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// Leer longitud de la Cadena
console.log(airline.length);

// Metodos de Cadenas (Strings)

// --------- IndexOF ---------------

// Obtener la posicion en la cual se encuentra determinado elemento o caractér

// Arroja la primera coincidencia
console.log(airline.indexOf('r'));

// Arroja la última coincidencia
console.log(airline.lastIndexOf('r'));

// Buscar palabras completas dentro de la cadena
console.log(airline.indexOf('Portugal'));

// Extraer parte de la Cadena
console.log(airline.slice(4)); // Posicion en la cual comienza la extracción

console.log(airline.slice(4, 7)); // Posicion en la cual inicia y en la cual termina

console.log(airline.slice(0, airline.indexOf(' '))); // Obtener una palabra hasta un espacio vacio

// Ejercicio

const checkMiddleSeat = function (seat) {
  // B y E son asientos de la mitad
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got Lucky 😊');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// ------ Cambiar Case de una Cadena ----------

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Ejemplo - Corregir Nombre

const passenger = 'dAnIel'; // Daniel

const passengerLower = passenger.toLowerCase();

const passengerRight =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerRight);

// Ejemplo - Comparing email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // Elimina espacios vacios
console.log(trimmedEmail);
console.log(email === trimmedEmail);

// ----- Reemplazar partes de las Cadenas ------

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // Primer argumento que queremos reemplazar y el segundo es con que lo reemplazamos

console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate')); // Solo reemplaza el primer door

// ------ Uso de Expresiones Regulares ----------

console.log(announcement.replace(/door/g, 'gate'));

// ------ Metodos Boolean ---------

const newPlane = 'A320';
console.log(plane.includes('A320')); // Verificar si contiene lo que se ingresa
console.log(plane.includes('Boing'));

console.log(plane.startsWith('Air')); // Verificar si empieza con lo que se ingresa
console.log(plane.startsWith('A320'));

console.log(plane.endsWith('Donda')); // Verificar si termina con lo que se ingresa

// Practica

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome Aboard');
  }
};

checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// ----- Metodo Split -------

// Permite dividir una cadena en varias partes en función de una cadena divisoria

console.log('a+very+nice+string'.split('+'));

console.log('Daniel Carvajal'.split(' '));

const [firstName, lastName] = 'Daniel Carvajal'.split(' ');
console.log(firstName, lastName);

// ------- Metodo Join ---------

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Ejemplo - Poner Mayusculas en el Nombre

const newPassenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('daniel carvajal');

// ----- Padding ------

// Rellenar una cadena, agregando una cantidad de caracteres hasta tener la longitud deseada

const message = 'Go to gate 23!';

// Start al inicio y End al final
console.log(message.padStart(25, '+')); // Longitud y luego el caracter con el cual llenar
console.log('Daniel'.padEnd(12, '-'));

// Ejemplo

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4321215465));
console.log(maskCreditCard(3686734532));
console.log(maskCreditCard(3427879732));

// -------- Metodo Repeat ----------

const message2 = 'Bad weather...... All departures delayed';
console.log(message2.repeat(5)); // # de veces que se repite

// Ejemplo
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(3);
planesInLine(5);
planesInLine(12);

// Practica Final

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Dvidir la cadena

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ')} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ':',
    'h'
  )})`;

  console.log(output);
}
