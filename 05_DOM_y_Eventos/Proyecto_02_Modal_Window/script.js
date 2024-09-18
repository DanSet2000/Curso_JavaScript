'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Selecciona todos los elementos dentro de un "NodeList"
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// Funciones

// Función para Abrir el Modal
const openModal = function () {
  console.log('Button clicked');
  // Eliminar una clase
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Función para Cerrar el Modal con el Botón y al Hacer click fuera del Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Se invoca a la función para abrir el modal al presionar los botones
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Se invoca a la funcion al presionar el botón de cerrar
btnCloseModal.addEventListener('click', closeModal);
// Se invoca a la funcion al presionar cualquier lugar fuera del modal
overlay.addEventListener('click', closeModal);

// Manejar eventos del Teclado
// Cerrar el Modal usando la tecla 'Esc'
document.addEventListener('keydown', function (event) {
  console.log('Tecla Presionada');
  console.log(event.key); // Obteniendo la tecla que se presiona

  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
    console.log('Se presiono la tecla Esc');
  }
});
