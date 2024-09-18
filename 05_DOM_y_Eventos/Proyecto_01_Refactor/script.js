'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Funcion para desplegar mensajes
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // Se guarda el número escrito en el campo al momento de hacer click en el botón "Guess"
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Lógica para comparar el número del jugador con el número a adivinar

  // El primer if es cuando no hay nada en el Input
  if (!guess) {
    displayMessage('¡No es un número!');
  } else if (guess === secretNumber) {
    displayMessage('¡Número Correcto!');
    // Se muestra el número al adivinarlo
    document.querySelector('.number').textContent = secretNumber;

    // Cambiar el color de fondo de la página con CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    // Cambiar el ancho del campo al adivinarlo
    document.querySelector('.number').style.width = '30rem';

    // Agregar el alto puntaje
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Cuando el numero adivinado es erróneo
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Condicional para indicar si el numero es muy alto o muy bajo
      document.querySelector('.message').textContent =
        guess > secretNumber ? '¡Muy Alto! 📈' : '¡Muy Bajo! 📉';
      // Lógica para reducir el puntaje por cada respuesta errónea
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // Lógica para el caso que se pierde por quedar sin puntaje
      displayMessage('Fin del Juego');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Cambiar el color de fondo de la página con CSS
  document.querySelector('body').style.backgroundColor = '#222';
  // Cambiar el ancho del campo al adivinarlo
  document.querySelector('.number').style.width = '15rem';
  // Devolver el número al signo de interrogación
  document.querySelector('.number').textContent = '?';
  // Devolver el mensaje de Inicio
  displayMessage('Empieza Adivinando....');
  // Vaciar el Input
  document.querySelector('.guess').value = '';
  // Devolver el Score a 20
  document.querySelector('.score').textContent = score;
});
