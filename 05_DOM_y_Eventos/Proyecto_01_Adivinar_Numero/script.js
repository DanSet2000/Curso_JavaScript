'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  // Se guarda el número escrito en el campo al momento de hacer click en el botón "Guess"
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Lógica para comparar el número del jugador con el número a adivinar

  // El primer if es cuando no hay nada en el Input
  if (!guess) {
    document.querySelector('.message').textContent = '¡No es un número!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '¡Número Correcto!';
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
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '¡Muy Alto! 📈';
      // Lógica para reducir el puntaje por cada respuesta errónea
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // Lógica para el caso que se pierde por quedar sin puntaje
      document.querySelector('.message').textContent = 'Fin del Juego';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '¡Muy Bajo! 📉';
      // Lógica para reducir el puntaje por cada respuesta errónea
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // Lógica para el caso que se pierde por quedar sin puntaje
      document.querySelector('.message').textContent = 'Fin del Juego';
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
  document.querySelector('.message').textContent = 'Empieza Adivinando....';
  // Vaciar el Input
  document.querySelector('.guess').value = '';
  // Devolver el Score a 20
  document.querySelector('.score').textContent = score;
});
