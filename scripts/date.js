const yearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();

lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;