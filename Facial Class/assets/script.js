// Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
});

// Section FAQ
const faqInputs = document.querySelectorAll('.faq-item input');
faqInputs.forEach((input) => {
  input.addEventListener('change', () => {
    if (input.checked) {
      faqInputs.forEach((otherInput) => {
        if (otherInput !== input) { otherInput.checked = false; }
      });
    }
  });
});

// Fechar todas as perguntas ao clicar fora 
document.addEventListener('click', function (e) {
  const faqContainer = document.querySelector('.faq-container');
  if (!faqContainer.contains(e.target)) {
    faqInputs.forEach((input) => {
      input.checked = false;
    });
  }
});
