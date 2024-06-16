import "./index.css";
import "../scripts/validate.js";
import {
  navButton,
  navButtonTopLine,
  navButtonBottomLine,
  footerYear,
  currentYear,
  navLinks,
  thankYou,
  orderedParks,
  unorderedParks,
} from "../utils/constants.js";

//footer year updates automatically every year
footerYear.textContent = currentYear;

//navButton mobile view interactiveity
navButton.addEventListener("click", () => {
  navButtonTopLine.classList.toggle("nav__toggle-line_top-rotate");
  navButtonBottomLine.classList.toggle("nav__toggle-line_bottom-rotate");
  navLinks.classList.toggle("nav__links_open");
});

//suggest submit button
function removeThankYou() {
  thankYou.classList.remove("suggest__thankyou_show");
}
const submitSuggestion = function () {
  thankYou.classList.add("suggest__thankyou_show");
  setTimeout(removeThankYou, 30000);
};
document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  submitSuggestion();
});

const map = L.map("map").setView([39.8283, -98.5795], 4);

const redCircleIcon = L.divIcon({
  className: "custom-marker-icon",
  html: '<div style="background-color: red; width: 12px; height: 12px; border-radius: 50%;"></div>',
});

// Add a tile layer to the map (OpenStreetMap tiles)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Add markers and collect the coordinates
const parkCoordinates = orderedParks.map((park) => {
  L.marker([park.latitude, park.longitude], { icon: redCircleIcon })
    .addTo(map)
    .bindPopup(`<b>${park.name}</b>`);
  return [park.latitude, park.longitude];
});

// Draw lines between the parks
const polyline = L.polyline(parkCoordinates, { color: "blue" }).addTo(map);

// Fit the map to the polyline bounds
map.fitBounds(polyline.getBounds());
