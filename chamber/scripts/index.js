const currentWeather = document.querySelector("#current-weather");
const forecast = document.querySelector("#forecast");
const spotlightContainer = document.querySelector("#spotlight-container");

const lat = 40.7608;
const lon = -111.8910;
const apiKey = "3639b9f13409af1588fc2955634380d5";

const currentUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastUrl =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getCurrentWeather() {
  const response = await fetch(currentUrl);
  const data = await response.json();

  currentWeather.innerHTML = `
    <p><strong>${Math.round(data.main.temp)}°F</strong></p>
    <p>${data.weather[0].description}</p>
  `;
}

async function getForecast() {
  const response = await fetch(forecastUrl);
  const data = await response.json();

  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

  forecast.innerHTML = daily.map(day => `
    <p><strong>${new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" })}:</strong>
    ${Math.round(day.main.temp)}°F</p>
  `).join("");
}

async function getSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const qualified = members.filter(member => member.membership >= 2);
  const shuffled = qualified.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  spotlightContainer.innerHTML = selected.map(member => `
    <section class="spotlight-card">
      <img src="images/${member.image}" alt="${member.name} logo" width="300" height="200" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>${member.membership === 3 ? "Gold Member" : "Silver Member"}</p>
      <a href="${member.website}" target="_blank" rel="noopener">${member.name} Website</a>
    </section>
  `).join("");
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

getCurrentWeather();
getForecast();
getSpotlights();