import { places } from "../data/discover.mjs";

const grid = document.querySelector("#discoverGrid");
const visitMessage = document.querySelector("#visitMessage");

function displayPlaces(items) {
  items.forEach((place, index) => {
    const card = document.createElement("article");
    card.className = `discover-card card${index + 1}`;

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = place.image;
    img.alt = place.alt;
    img.width = 300;
    img.height = 200;
    img.loading = "lazy";

    figure.appendChild(img);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("a");
    button.href = place.url;
    button.target = "_blank";
    button.rel = "noopener";
    button.className = "learn-more";
    button.textContent = "Learn More";

    card.append(title, figure, address, description, button);
    grid.appendChild(card);
  });
}

function showVisitMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const difference = now - Number(lastVisit);
    const daysBetween = Math.floor(difference / 86400000);

    if (daysBetween < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      visitMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
}

displayPlaces(places);
showVisitMessage();