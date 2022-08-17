'use strict';

const modal = document.querySelector('.modal');

const buttons = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

for(let i = 0;i<buttons.length;i++) {
    buttons[i].addEventListener('click',function() {
    openModals();
    console.log(`The content of the selected button is : ${buttons[i].textContent}`);
  });
};

closeModal.addEventListener('click',function () {
  closeModals ()
});

overlay.addEventListener('click',function () {
  closeModals ()
});

//DRY principle
function closeModals () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function openModals () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

document.addEventListener('keydown', function(e){
  //console.log(e.key);
  if (e.key === 'Escape') {
    closeModals();
  };



});
