'use strict';

// Obtener los Elementos
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0'); // Se indica que es un ID
const score1Element = document.getElementById('score--1'); // Se sabe por defecto que es ID
const current0Element = document.getElementById('current--0');
const current1Eelement = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Condiciones de Inicio
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Funcion para Juego Nuevo
const init = function () {
  // Puntajes
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  // Puntajes Actuales al Jugar
  current0Element.textContent = 0;
  current1Eelement.textContent = 0;
  // Quitar la clase ganadora
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');

  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');

  diceElement.classList.add('hidden');
};

// Funcion para cambiar de Jugador
const switchPlayer = function () {
  // Pasar al otro jugador
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggle: Agrega si no hay la clase y Remueve si esta si existe
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Logica del Dado

// Boton Roll Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generar un Numero Aleatorio
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Mostrar el Dado
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    // 3. Revisar si el dado cayó en 1
    if (dice !== 1) {
      // Agregar puntaje
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Pasar al otro jugador
      switchPlayer();
    }
  }
});

// Boton Hold Score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Almacenar el puntaje del Jugador
    scores[activePlayer] += currentScore; //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Revisar si el Puntaje es >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      // Terminar el juego
      // Pasar al otro jugador
      switchPlayer();
    }
  }
});

// Boton New Game
btnNew.addEventListener('click', init);
