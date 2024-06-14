import "./index.css";
import { footerYear, currentYear } from "../utils/constants.js";

footerYear.textContent = currentYear;

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
