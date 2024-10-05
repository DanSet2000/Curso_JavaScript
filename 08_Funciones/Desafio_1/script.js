'use strict';

// Desafio de Programacion #1

/*
  Se va a construir una app sencilla de Encuesta

  Una encuesta tiene una pregunta, un arreglo de opciones de los cuales puede elegir la gente
  y un arreglo con el numero de respuestas para cada opcion.

  1. Crear un método llamado "registerNewAnswer" dentro del objeto "poll". El método hace
     dos cosas.

     1.1. Despliega una ventana de prompr para el usuario que ingrese el numero de la 
          seleccion deseada. 

     1.2. Basado en el numero de entrada, actualizar las respuestas del arreglo.     

  2. Llamar a este metodo en el momento que el usuario da click en el boton de responder 
  
  3. Crear un método llamado "displayResults" que muestre los resultados de la encuesta.
     El método toma un string como una entrada (llamado "type"), el cual puede ser bien
     un string o un array.

  4. Correr los resultados al final de cada "registerNewAnswer" llamada de este método   
*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // Esto genera un arreglo [0, 0, 0, 0]
  answers: new Array(4).fill(0),
  // Task 1
  registerNewAnswer: function () {
    // Obtener la Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option Number)`
      )
    );
    console.log(answer);
    // Registrar la Answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  // Task 3
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// Task 2

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
