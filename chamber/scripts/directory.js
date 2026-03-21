const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

const url = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not fetch member data.");
    }

    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("section");
    const name = document.createElement("h2");
    const image = document.createElement("img");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const website = document.createElement("a");
    const membership = document.createElement("p");
    const description = document.createElement("p");

    name.textContent = member.name;

    image.src = `images/${member.image}`;
    image.alt = `${member.name} business image`;
    image.loading = "lazy";
    image.width = 300;
    image.height = 200;

    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;

    website.href = member.website;
    website.target = "_blank";
    website.rel = "noopener";
    website.textContent = "Visit Website";

    let membershipText = "Member";
    if (member.membership === 2) membershipText = "Silver Member";
    if (member.membership === 3) membershipText = "Gold Member";

    membership.textContent = `Membership: ${membershipText}`;
    description.textContent = member.description;

    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(description);

    membersContainer.appendChild(card);
  });
}

gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid-view");
  membersContainer.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list-view");
  membersContainer.classList.remove("grid-view");
});

if (menuButton && navMenu) {
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

getMembers();