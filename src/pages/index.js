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
