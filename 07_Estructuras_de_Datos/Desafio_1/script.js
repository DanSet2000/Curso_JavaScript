'use strict';

// Desafio de Programacion

/*
  El contexto de la aplicacion a desarrollar es una aplicacion de apuestas de fútbol

  Se supone que recibimos datos de un servicio web acerca de un juego en específico.
  En este reto se debe trabajar con esta data.

  1. Crear un arreglo de jugadores para cada equipo

  2. El primer jugador en cualquier arreglo es el arquero y los demas el equipo. Para el 
     equipo 1 crear una variable denominada 'gk' para el arquero y un arreglo 'fieldPlayers'
     para los otros 10 jugadores.

  3. Crear un arreglo 'allPlayers' que contenga a todos los jugadores (22).

  4. Durante el juego, el equipo 1 utilizó 3 cambios. Crear un arreglo 'players1Final', que
     contenga todos los jugadores iniciales además de los cambios.

  5. Basado en el objeto game.odds, crear una variable para cada apuesta denominados 
     'team1', 'draw', 'team2'.
  
  6. Escribir una funcion 'printGoals' que recibe un numero arbitrario de jugadores (NO ARREGLO)
     e imprima cada uno de ellos en consola, junto con el numero de goles que anotaron.

  7. El equipo con la apuesta más baja es el favorito a ganar. Imprime en consola que equipo
     es el más probable a ganar. SIN USAR UNA CONDICION IF/ELSE o un operador ternario.   
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

const [players1, players2] = game.players;
console.log(players1, players2);

// Task 2

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Task 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// Task 5

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 6

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// Task 7

team1 < team2 && console.log('Team 1 tiene mas probabilidad de ganar');
team1 > team2 && console.log('Team 2 tiene mas probabilidad de ganar');
