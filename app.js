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
