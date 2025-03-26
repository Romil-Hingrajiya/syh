// img shadow click
document.querySelectorAll('.shadow_click').forEach(img => {
  img.addEventListener('click', function() {
      this.classList.add('bounce'); // Add bounce effect
      setTimeout(() => {
          window.location.href = "courses.html"; // Redirect after animation
      }, 400); // Slight delay for animation effect
  });
});



// header - navbar
const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");
const navItemEls = document.querySelectorAll(".nav__item");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navItemEls.forEach((navItemEl) => {
  navItemEl.addEventListener("click", () => {
    navEl.classList.remove("nav--open");
    hamburgerEl.classList.remove("hamburger--open");
  });
});



// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlide); // Show first slide initially



// progress bar
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});
