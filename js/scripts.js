/* Load sounds */
var bell_sound = new Audio("sound/Bell.mp3");
var bg_music = new Audio("sound/Music.mp3"); //update with music box sound!

/* Click Events */
function bell_start() {
  var element = document.getElementById("bell");
  element.setAttribute('src', 'anim/GIFs/bell.gif');
  bell_sound.play();
  window.setTimeout(bell_stop, 6500);
}

function bell_stop() {
  var element = document.getElementById("bell");
  element.setAttribute('src', 'fg/bell.png');
}

function box_start() {
  var element = document.getElementById("box");
  element.setAttribute('src', 'anim/GIFs/music-box.gif');
  window.setTimeout(box_stop, 5000);
}

function box_stop() {
  var element = document.getElementById("box");
  element.setAttribute('src', 'fg/music-box.png');
}

function journal_open() {
  $('#notes-popup').fadeOut();
  $('#journal-popup').fadeIn();
}

function journal_close() {
  $('#journal-popup').fadeOut();
}

function lock_start() {
  var element = document.getElementById("lock");
  element.setAttribute('src', 'anim/GIFs/lock.gif');
  window.setTimeout(lock_stop, 700);
}

function lock_stop() {
  var element = document.getElementById("lock");
  element.setAttribute('src', 'fg/lock.png');
}

function notes_open() {
  $('#journal-popup').fadeOut();
  $('#notes-popup').fadeIn();
}

function notes_close() {
  $('#notes-popup').fadeOut();
}

/* Hover Events */

function machine_hover(element) {
  element.setAttribute('src', 'anim/GIFs/machine.gif');
}

function machine_unhover(element) {
  element.setAttribute('src', 'fg/machine.png');
}

function painting_hover(element) {
  element.setAttribute('src', 'anim/GIFs/painting.gif');
}

function painting_unhover(element) {
  element.setAttribute('src', 'fg/painting.png');
}
