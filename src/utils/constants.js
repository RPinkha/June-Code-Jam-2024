import data from "../data/parks_data.json";

const header = document.querySelector(".header");
export const navButton = header.querySelector(".nav__toggle");
export const navButtonTopLine = header.querySelector(".nav__toggle-line_top");
export const navButtonBottomLine = header.querySelector(
  ".nav__toggle-line_bottom"
);
export const navLinks = header.querySelector(".nav__links");

export const footerYear = document.querySelector(".footer__year");

export const thankYou = document.querySelector(".suggest__thankyou");

export const currentYear = new Date().getFullYear();

export const orderedParks = data.parks.sort(
  (a, b) => a.optimized_order - b.optimized_order
);

export const unorderedParks = data.parks.sort(
  (a, b) => a.optimized_order - b.optimized_order
);
