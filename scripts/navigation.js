const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});