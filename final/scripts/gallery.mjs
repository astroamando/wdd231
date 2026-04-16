const gallery = document.querySelector("#aircraft-gallery");
const filter = document.querySelector("#type-filter");
const modal = document.querySelector("#aircraft-modal");
const modalContent = document.querySelector("#modal-content");
const closeModalButton = document.querySelector("#close-modal");

let aircraftData = [];

async function getAircraft() {
  try {
    const response = await fetch("data/aircraft.json");

    if (!response.ok) {
      throw new Error("Aircraft data could not be loaded.");
    }

    const data = await response.json();
    aircraftData = data;
    displayAircraft(aircraftData);
  } catch (error) {
    gallery.innerHTML = `<p class="error-message">${error.message}</p>`;
    console.error(error);
  }
}

function displayAircraft(aircraftList) {
  gallery.innerHTML = "";

  aircraftList.forEach((aircraft) => {
    const card = document.createElement("article");
    card.classList.add("aircraft-card");

    card.innerHTML = `
      <img src="${aircraft.image}" alt="${aircraft.name}" width="400" height="250" loading="lazy">
      <div class="card-content">
        <h2>${aircraft.name}</h2>
        <p><strong>Type:</strong> ${aircraft.type}</p>
        <p><strong>Manufacturer:</strong> ${aircraft.manufacturer}</p>
        <p><strong>Speed:</strong> ${aircraft.speed}</p>
        <p><strong>Range:</strong> ${aircraft.range}</p>
        <button class="details-button">View Details</button>
      </div>
    `;

    const detailsButton = card.querySelector(".details-button");
    detailsButton.addEventListener("click", () => {
      openModal(aircraft);
    });

    gallery.appendChild(card);
  });
}

function openModal(aircraft) {
  modalContent.innerHTML = `
    <img src="${aircraft.image}" alt="${aircraft.name}" width="600" height="350" loading="lazy">
    <h2>${aircraft.name}</h2>
    <p><strong>Type:</strong> ${aircraft.type}</p>
    <p><strong>Manufacturer:</strong> ${aircraft.manufacturer}</p>
    <p><strong>Speed:</strong> ${aircraft.speed}</p>
    <p><strong>Range:</strong> ${aircraft.range}</p>
    <p><strong>First Flight:</strong> ${aircraft.firstFlight}</p>
    <p><strong>Role:</strong> ${aircraft.role}</p>
    <p>${aircraft.description}</p>
  `;

  modal.showModal();
}

filter.addEventListener("change", () => {
  const selectedType = filter.value;

  if (selectedType === "all") {
    displayAircraft(aircraftData);
  } else {
    const filteredAircraft = aircraftData.filter((aircraft) => aircraft.type === selectedType);
    displayAircraft(filteredAircraft);
  }
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});

getAircraft();