'use strict';

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
