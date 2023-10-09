let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function themy(){
  window.location.href="themy.html";
}

function next(){
  window.location.href='hey.html';
}

function mystery(){
  window.location.href='mys.html';
}
function shl(){
  window.location.href='shlock.html';
}
function back(){
  window.location.href='hey.html';
}
function horror(){
  window.location.href='horror.html';
}
function thatnight(){
  window.location.href='thatnight.html';
}
function oneofus(){
  window.location.href='oneofus.html';
}