const menu = document.querySelector(".nav-menu");
const mobile = document.querySelector(".menu-mobile");

menu.addEventListener("click", () => {
    menu.classList.toggle("close");
    mobile.classList.toggle("show");
})