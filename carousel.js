var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 20000); // Cambia de slide cada 2 segundos
}

// Mostrar la primera slide
showSlides();

// Botones de navegación
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
prevBtn.addEventListener("click", function() {
  slideIndex = slideIndex - 2;
  showSlides();
});
nextBtn.addEventListener("click", function() {
  showSlides();
});