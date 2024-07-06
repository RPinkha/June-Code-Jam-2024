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
  optimizedDistance,
  unoptimizedDistance,
  distanceDifference,
  distanceEfficiency,
  routeCaptionOptimized,
  routeCaptionUnoptimized,
  routeCaptionDifference,
  routeCaptionEfficiency,
} from "../utils/constants.js";

//footer year updates automatically every year
footerYear.textContent = currentYear;

//data for the map caption
routeCaptionOptimized.textContent = optimizedDistance + "-mile";
routeCaptionUnoptimized.textContent = unoptimizedDistance + "-mile";
routeCaptionDifference.textContent = distanceDifference + "-mile";
routeCaptionEfficiency.textContent = distanceEfficiency + "%";

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
  setTimeout(removeThankYou, 15000);
};
document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  submitSuggestion();
});

const map = L.map("map").setView([39.8283, -98.5795], 4);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

function addMarkersToMap(parks) {
  parks.forEach((park) => {
    L.marker([park.latitude, park.longitude], {
      icon: L.icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      }),
    })
      .addTo(map)
      .bindPopup(park.name);
  });
}

function addRoutingToMap(parks) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Routing.Control) {
      map.removeLayer(layer);
    }
  });

  const waypoints = parks.map((park) =>
    L.latLng(park.latitude, park.longitude)
  );

  L.Routing.control({
    waypoints: waypoints,
    createMarker: () => {
      return null;
    },
    routeWhileDragging: false,
    addWaypoints: false,
  }).addTo(map);
}

addMarkersToMap(orderedParks);
addRoutingToMap(orderedParks);
