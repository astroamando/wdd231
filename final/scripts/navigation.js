const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");

  const isOpen = nav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;