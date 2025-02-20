'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__burger-btn'),
    burgenMenu = document.querySelector('.header__burger-content');

  burgerBtn.addEventListener('click', (event) => {
    if (!event.target.classList.contains('is-active')) {
      burgerBtn.classList.add('is-active');
      burgenMenu.classList.add('is-open');
      document.body.style.overflowY = 'hidden';
    } else {
      burgerBtn.classList.remove('is-active');
      burgenMenu.classList.remove('is-open');
      document.body.style.overflowY = 'auto';
    }
  });

  const modal = document.querySelector('.dialog'),
    modalButton = document.querySelector('#modal-button');

  function openModal() {
    modal.showModal();
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.close();
    document.body.style.overflow = '';
  }

  const buttonEvent = modalButton.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  function closeModalOnOverlay({ currentTarget, target }) {
    const modal = currentTarget,
      clickOnOverlay = target === modal;

    if (clickOnOverlay) {
      closeModal();
    }
  };

  modal.addEventListener('click', closeModalOnOverlay);
  modal.addEventListener('cancel', () => closeModal());
});

