const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".right-arrow",
    prevEl: ".left-arrow",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
