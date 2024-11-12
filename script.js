// JavaScript for opening and closing the side menu
const hamburgerIcon = document.getElementById("hamburger-icon");
const sideMenu = document.getElementById("side-menu");

hamburgerIcon.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
});
