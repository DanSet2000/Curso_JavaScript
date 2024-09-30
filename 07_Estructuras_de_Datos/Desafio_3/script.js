'use strict';

// Desafio de Programacion

/*
  Continuando con la aplicacion de apuestas de fútbol.

  Para esta ocasión se tiene un Map que posee un registro de los eventos que han ocurrido 
  durante el partido. Los valores son los eventos en sí, y sus keys son el minuto en el 
  cual ocurrio dicho evento.

  1. Crear un arreglo "eventos" de los diferentes eventos que sucedieron durante el juego
     (No duplicados)

  2. Después de que el juego concluye, se encontró que una tarjeta amarilla en el minuto 64
     fue injusto. Remover este evento de los registros del juego.
     
  3. Imprimir la siguiente cadena en consola "An event happened, on average, every 9 minutes"
     (Tener en cuenta que un juego tiene 90 minutos)
     
  4. Iterar los eventos y registrarlos en la consola, marcando si sucedio en el primer tiempo
     o en el segundo tiempo.
     Ej: [FIRST HALF] 17: GOAL
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Task 1

const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2

gameEvents.delete(64);
console.log(gameEvents);

// Task 3

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// Task 4

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
