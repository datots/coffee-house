window.onload = function () {
  // window.addEventListener("scroll", function (e) {
  //   if (window.pageXOffset > 100) {
  //     this.document.querySelector("header").classList.add("is-scrolling");
  //   } else {
  //     this.document.querySelector("header").classList.remove("is-scrolling ");
  //   }
  // });

  const menu_btn = document.querySelector(".hamburger");
  const tablet_menu = document.querySelector(".tablet-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    tablet_menu.classList.toggle("is-active");
  });
};

// CAROUSEL 



document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[index].style.display = "block";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  document.querySelector(".btn-next").addEventListener("click", nextSlide);
  document.querySelector(".btn-prev").addEventListener("click", prevSlide);

  // Show the initial slide
  showSlide(currentSlide);
});

