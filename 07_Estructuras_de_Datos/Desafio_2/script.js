'use strict';

// Desafio de Programacion

/*
  Continuando con la aplicacion de apuestas de fútbol.

  1. Realizar una iteración sobre el arreglo game.scored e imprimir cada nombre del jugador 
     junto con el numero del gol (Ej: Goal 1: Lewandowski)

  2. Usar un bucle para calcular el promedio de la apuesta y registrarlo en la consola.
  
  3. Imrimir las 3 apuestas en la consola de manera formateada, de esta forma:
      - Odd of victory Bayern Munich: 1.33
      - Odd of draw: 3.25
      - Odd of victory Borussia Dortmund: 6.5
     Obtener los nombres de los equipos directamente del objeto game.
     
  Extra: Crear un objeto denominado "scorers" que contenga los nombres de los jugadores como
  propiedades, y el numero de goles como un valor.

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Task 2
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);

// Task 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory`;

  console.log(`Odd of ${teamStr} ${team}: ${odd}`);
}
