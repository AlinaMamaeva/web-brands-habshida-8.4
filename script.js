// Мобильный Swiper
let swiper = null;

function initSwiper() {
  if (window.innerWidth <= 767 && !swiper) {
    swiper = new Swiper(".mobile-swiper", {
      slidesPerView: 1.5,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
       mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
      },
    });
  }

  // Если ширина больше 767, уничтожаем Swiper
  if (window.innerWidth > 767 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

// Запуск при загрузке
initSwiper();

// Перезапуск при ресайзе
window.addEventListener("resize", initSwiper);

// Кнопка показать/скрыть
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggle-btn");
  const hiddenSlides = document.querySelectorAll(".hide-tablet, .hide-desktop");
  let isOpen = false;

  btn.addEventListener("click", () => {
    hiddenSlides.forEach((slide) => slide.classList.toggle("force-show"));
    isOpen = !isOpen;
    btn.textContent = isOpen ? "Скрыть" : "Показать все";
  });
});



  