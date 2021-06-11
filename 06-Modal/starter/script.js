'use strict';

// Select all the variables you need and store them into variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');

// Returns a node list
const buttonsShowModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < buttonsShowModal.length; i++) {
  console.log(buttonsShowModal[i].textContent);
  buttonsShowModal[i].addEventListener('click', openModal);
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

buttonCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
