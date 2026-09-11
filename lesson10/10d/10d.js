const gaming = document.querySelector('.gaming-button');

function changeApperance() {
  if (gaming.classList.contains('is-on')) {
    gaming.classList.remove('is-on');
    gaming.classList.add('is-off');
  }
  else {
    gaming.classList.remove('is-off');
    gaming.classList.add('is-on');
  }

  if(gaming.innerText === 'Gaming') {
    gaming.innerText = 'Start Gaming';
  }
  else gaming.innerText = 'Gaming';
}