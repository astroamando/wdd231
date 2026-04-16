const submittedData = document.querySelector("#submitted-data");

const params = new URLSearchParams(window.location.search);

const first = params.get("first");
const last = params.get("last");
const email = params.get("email");
const favorite = params.get("favorite");
const type = params.get("type");
const comments = params.get("comments");

submittedData.innerHTML = `
  <p><strong>First Name:</strong> ${first ?? ""}</p>
  <p><strong>Last Name:</strong> ${last ?? ""}</p>
  <p><strong>Email:</strong> ${email ?? ""}</p>
  <p><strong>Favorite Aircraft:</strong> ${favorite ?? ""}</p>
  <p><strong>Aircraft Type:</strong> ${type ?? ""}</p>
  <p><strong>Comments:</strong> ${comments ?? ""}</p>
`;