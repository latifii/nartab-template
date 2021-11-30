const menuIcon = document.querySelector(".main-menu__icon");
const menuWrapper = document.querySelector(".menu-wrapper");
const backdrop = document.querySelector(".backdrop");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener('click',()=>{
    menuWrapper.classList.add('open')
    backdrop.style.display = 'block'
})
closeIcon.addEventListener('click',()=>{
  menuWrapper.classList.remove('open')
  backdrop.style.display = 'none'
})