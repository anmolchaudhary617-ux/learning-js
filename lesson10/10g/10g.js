const gaming = document.querySelector('.gaming-button');
const music = document.querySelector('.music-button');
const tech = document.querySelector('.tech-button');

function changeApperance1() {
  if (music.classList.contains('is-on') || tech.classList.contains('is-on')) {
    gaming.classList.remove('is-on');
    gaming.classList.add('is-off');
    alert('You are doing something else already!');
    return;
  }

  if (gaming.classList.contains('is-on')) {
    gaming.classList.remove('is-on');
    gaming.classList.add('is-off');
  }
  else {
    gaming.classList.remove('is-off');
    gaming.classList.add('is-on');
  }

  if (gaming.innerText === 'Gaming') {
    gaming.innerText = 'Start Gaming';
  }
  else gaming.innerText = 'Gaming';
}

function changeApperance2() {
  if (gaming.classList.contains('is-on') || tech.classList.contains('is-on')) {
    music.classList.remove('is-on');
    music.classList.add('is-off');
    alert('You are doing something else already!');
    return;
  }

  if (music.classList.contains('is-on')) {
    music.classList.remove('is-on');
    music.classList.add('is-off');
  }
  else {
    music.classList.remove('is-off');
    music.classList.add('is-on');
  }

  if (music.innerText === 'Music') {
    music.innerText = 'Start Music';
  }
  else music.innerText = 'Music';
}

function changeApperance3() {
  if (gaming.classList.contains('is-on') || music.classList.contains('is-on')) {
    tech.classList.remove('is-on');
    tech.classList.add('is-off');
    alert('You are doing something else already');
    return;
  }

  if (tech.classList.contains('is-on')) {
    tech.classList.remove('is-on');
    tech.classList.add('is-off');
  }
  else {
    tech.classList.remove('is-off');
    tech.classList.add('is-on');
  }

  if (tech.innerText === 'Tech') {
    tech.innerText = 'Do Tech';
  }
  else tech.innerText = 'Tech';
}