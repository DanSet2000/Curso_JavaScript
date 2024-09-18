'use strict';

// Cadena de Alcance
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `Hola ${firstName}, tienes ${age} años, naciste en el año ${birthYear}`;
    console.log(output);

    if (birthYear <= 1986 && birthYear >= 1981) {
      const str = `${firstName} eres un millenial`;
      console.log(str);
    } else {
      const str = `${firstName} eres un centenial`;
      console.log(str);
    }
  }

  printAge();

  return age;
}

// Variable Global
const firstName = 'Daniel';

calcAge(2000);
