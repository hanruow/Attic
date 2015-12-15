/* Load sounds */
var bell_sound = new Audio("sound/Bell.mp3");
var box_sound = new Audio("sound/Music\ Box\ Sound\ Effect.mp3");
var sea_sound = new Audio("sound/Sea\ Sound\ Effect.mp3");
var whisper_sound = new Audio("sound/Whispers.mp3");
var laugh_sound = new Audio("sound/Evil\ Laugh.mp3");
var bg_music = new Audio("sound/Music.mp3");
var flag = false;

/* Meta Functions */
function load_page() {
  bg_music.play();
  random_events();
}

function random_events() {
  var events = [tap_window, whisper, laugh];
  var time = Math.floor((Math.random() * 5000) + 10000); //random event every 10-15 secs
  var random_event = Math.floor(Math.random() * events.length);
  if(flag) {
    events[random_event]();
  }
  setTimeout(random_events, time);
  //flag = true;
}

function mute() {
  var element = document.getElementById('mute');
  element.innerHTML = "<span class=\"glyphicon glyphicon-volume-off\" aria-hidden=\"true\"></span>";
  element.onclick = unmute;
  bg_music.pause();
}

function unmute() {
  var element = document.getElementById('mute');
  element.innerHTML = "<span class=\"glyphicon glyphicon-volume-up\" aria-hidden=\"true\"></span>";
  element.onclick = mute;
  bg_music.play();
}

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
  box_sound.play();
  window.setTimeout(box_stop, 17000);
}

function box_stop() {
  var element = document.getElementById("box");
  box_sound.pause();
  box_sound.load();
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
  setTimeout(notes_blink, 5000);
}

function notes_close() {
  $('#notes-popup').fadeOut();
}

function notes_blink() {
  var element = document.getElementById("big_notes");
  element.setAttribute('src', 'anim/GIFs/notes.gif');
  setTimeout(notes_unblink, 5000);
}

function notes_unblink() {
  var element = document.getElementById("big_notes");
  element.setAttribute('src', 'popup-random/notes-popup.png');
  setTimeout(notes_blink, 5000);
}

/* Hover Events */

function machine_hover(element) {
  element.setAttribute('src', 'anim/GIFs/machine.gif');
}

function machine_unhover(element) {
  element.setAttribute('src', 'fg/machine.png');
}

function painting_hover(element) {
  sea_sound.play();
  element.setAttribute('src', 'anim/GIFs/painting.gif');
}

function painting_unhover(element) {
  sea_sound.pause();
  sea_sound.load();
  element.setAttribute('src', 'fg/painting.png');
}

/* Random Events */
function tap_window() {
  var element = document.getElementById('window');
  element.setAttribute('visibility', 'visible');
  element.setAttribute('src', 'anim/GIFs/window.gif');
  setTimeout(reset_window, 2000);
}

function reset_window() {
  var element = document.getElementById('window');
  element.setAttribute('visibility', 'hidden');
}

function whisper() {
  whisper_sound.play();
  setTimeout(whisper_stop, 8000);
}

function whisper_stop() {
  whisper_sound.pause();
  whisper_sound.load();
}

function laugh() {
   laugh_sound.play();
   setTimeout(laugh_stop, 5000);
 }

function laugh_stop() {
  laugh_sound.pause();
  laugh_sound.load();
}
