import "./index.css";
import {
  navButton,
  navButtonTopLine,
  navButtonBottomLine,
  footerYear,
  currentYear,
  navLinks,
} from "../utils/constants.js";

footerYear.textContent = currentYear;
navButton.addEventListener("click", () => {
  navButtonTopLine.classList.toggle("nav__toggle-line_top-rotate");
  navButtonBottomLine.classList.toggle("nav__toggle-line_bottom-rotate");
  navLinks.classList.toggle("nav__links_open");
});

import "../scripts/validate.js";

//suggest submit button
const thankYou = document.querySelector(".suggest__thankyou");
function removeThankYou() {
  thankYou.classList.remove("suggest__thankyou_show");
}
const submitSuggestion = function () {
  thankYou.classList.add("suggest__thankyou_show");
  setTimeout(removeThankYou, 2000);
};
document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  submitSuggestion();
});
