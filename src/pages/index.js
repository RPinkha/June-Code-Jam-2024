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
