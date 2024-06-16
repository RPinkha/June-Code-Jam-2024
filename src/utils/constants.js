import data from "../data/parks_data.json";

const header = document.querySelector(".header");
export const navButton = header.querySelector(".nav__toggle");
export const navButtonTopLine = header.querySelector(".nav__toggle-line_top");
export const navButtonBottomLine = header.querySelector(
  ".nav__toggle-line_bottom"
);
export const navLinks = header.querySelector(".nav__links");

const routeCaption = document.querySelector(".route__caption");
export const routeCaptionOptimized = routeCaption.querySelector(
  ".route__caption_data_optimized"
);
export const routeCaptionUnoptimized = routeCaption.querySelector(
  ".route__caption_data_unoptimized"
);
export const routeCaptionDifference = routeCaption.querySelector(
  ".route__caption_data_difference"
);
export const routeCaptionEfficiency = routeCaption.querySelector(
  ".route__caption_data_efficiency"
);

export const footerYear = document.querySelector(".footer__year");

export const thankYou = document.querySelector(".suggest__thankyou");

export const currentYear = new Date().getFullYear();

const parksForOptimizedOrder = [...data.parks];
export const orderedParks = parksForOptimizedOrder.sort(
  (a, b) => a.optimized_order - b.optimized_order
);

const parksForBaselineOrder = [...data.parks];
export const unorderedParks = parksForBaselineOrder.sort(
  (a, b) => a.baseline_order - b.baseline_order
);

export const optimizedDistance = data.optimizedDistance;
export const unoptimizedDistance = data.unoptimizedDistance;
export const distanceDifference = unoptimizedDistance - optimizedDistance;
export const distanceEfficiency = (
  (distanceDifference * 100) /
  unoptimizedDistance
).toFixed(2);
