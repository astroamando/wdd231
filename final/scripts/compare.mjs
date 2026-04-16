const compareFilter = document.querySelector("#compare-filter");
const compareResults = document.querySelector("#compare-results");

let aircraftData = [];

async function getAircraftForCompare() {
  try {
    const response = await fetch("data/aircraft.json");

    if (!response.ok) {
      throw new Error("Comparison data could not be loaded.");
    }

    const data = await response.json();
    aircraftData = data;

    const savedFilter = localStorage.getItem("selectedAircraftType") || "all";
    compareFilter.value = savedFilter;
    applyFilter(savedFilter);
  } catch (error) {
    compareResults.innerHTML = `<p class="error-message">${error.message}</p>`;
    console.error(error);
  }
}

function displayCompareCards(aircraftList) {
  compareResults.innerHTML = "";

  aircraftList.forEach((aircraft) => {
    const card = document.createElement("article");
    card.classList.add("compare-card");

    card.innerHTML = `
      <img src="${aircraft.image}" alt="${aircraft.name} ${aircraft.type} aircraft" width="400" height="250" loading="lazy">
      <div class="card-content">
        <h2>${aircraft.name}</h2>
        <p><strong>Type:</strong> ${aircraft.type}</p>
        <p><strong>Manufacturer:</strong> ${aircraft.manufacturer}</p>
        <p><strong>Speed:</strong> ${aircraft.speed}</p>
        <p><strong>Range:</strong> ${aircraft.range}</p>
        <p><strong>Role:</strong> ${aircraft.role}</p>
      </div>
    `;
    compareResults.appendChild(card);
  });
}

function applyFilter(selectedType) {
  if (selectedType === "all") {
    displayCompareCards(aircraftData);
  } else {
    const filteredAircraft = aircraftData.filter(
      (aircraft) => aircraft.type === selectedType
    );
    displayCompareCards(filteredAircraft);
  }
}

compareFilter.addEventListener("change", () => {
  const selectedType = compareFilter.value;
  localStorage.setItem("selectedAircraftType", selectedType);
  applyFilter(selectedType);
});

getAircraftForCompare();