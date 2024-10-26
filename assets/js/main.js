/*=============== SHOW MENU ===============*/

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== IMAGE GALLERY ===============*/

/*=============== SWIPER CATEGORIES ===============*/
var swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1400: {
<<<<<<< HEAD
<<<<<<< HEAD
          slidesPerView: 6,
=======
          slidesPerView: 5,
>>>>>>> origin/master
=======
          slidesPerView: 6,
>>>>>>> 56bccc6 (update-new)
          spaceBetween: 24,
        },
      },
  });

/*=============== SWIPER PRODUCTS ===============*/
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 56bccc6 (update-new)
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
});
<<<<<<< HEAD
=======
>>>>>>> origin/master
=======
>>>>>>> 56bccc6 (update-new)

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) =>{
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);
      tabContents.forEach((tabContent) =>{
        tabContent.classList.remove('active-tab');
      });

      target.classList.add('active-tab');

      tabs.forEach((tab) =>{
        tab.classList.remove('active-tab');
      });
<<<<<<< HEAD
<<<<<<< HEAD

      tab.classList.add('active-tab');
    });
=======
    });

>>>>>>> origin/master
=======

      tab.classList.add('active-tab');
    });
>>>>>>> 56bccc6 (update-new)
  });