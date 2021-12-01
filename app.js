const menuIcon = document.querySelector(".main-menu__icon");
const menuWrapper = document.querySelector(".menu-wrapper");
const backdrop = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".close-icon");
const contentBoxes = document.querySelectorAll(".content-head__box");
const serviceBoxes = document.querySelectorAll(
  ".content-description .service-box"
);
const contentImgs = document.querySelectorAll(".content-screen");
let index = 0;

menuIcon.addEventListener("click", () => {
  menuWrapper.classList.add("open");
  backdrop.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  menuWrapper.classList.remove("open");
  backdrop.style.display = "none";
});

contentBoxes.forEach((box) =>
  box.addEventListener("click", (e) => {
    contentBoxes.forEach((box) => box.classList.remove("open"));
    box.classList.add("open");

    index = Array.prototype.indexOf.call(contentBoxes, e.currentTarget);
    serviceBoxes.forEach((box) => box.classList.remove("open"));
    serviceBoxes[index].classList.add("open");

    contentImgs.forEach((img) => img.classList.add("dn"));
    contentImgs[index].classList.remove("dn");
  })
);


var swiper = new Swiper(".products", {
  // loop:true,
  // centeredSlides: true,
  // slidesPerView: 1,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// // const swiper = new Swiper('.swiper', {
// //   // Optional parameters
// //   direction: 'vertical',
// //   loop: true,

// //   // If we need pagination
// //   // pagination: {
// //   //   el: '.swiper-pagination',
// //   // },

// //   // Navigation arrows
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },

// //   // And if we need scrollbar
// //   // scrollbar: {
// //   //   el: '.swiper-scrollbar',
// //   // },
// // });
