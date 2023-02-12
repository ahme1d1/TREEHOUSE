import "intersection-observer";
import "./sliders.js";

import Headroom from "headroom.js";

let myElement = document.querySelector(".headroom");
let options = {
  offset: 30,

  classes: {
    // when element is initialised
    initial: "headroom",
    // when scrolling up
    pinned: "headroom--pinned",
    // when scrolling down
    unpinned: "headroom--unpinned",
    // when above offset
    top: "headroom--top",
    // when below offset
    notTop: "headroom--not-top",
    // when at bottom of scroll area
    bottom: "headroom--bottom",
    // when not at bottom of scroll area
    notBottom: "headroom--not-bottom",
    // when frozen method has been called
    frozen: "headroom--frozen",
    // multiple classes are also supported with a space-separated list
    pinned: "headroom--pinned foo bar",
  },
};
let headroom = new Headroom(myElement, options);
headroom.init();

// loadClass
const theApp = document.getElementById("theApp");
theApp.classList.add("is-loaded");

// LazyLoad Images
window.addEventListener("load", (event) => {
  // Observer
  const inViewElms = document.querySelectorAll(".inViewJs");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        const lazyImage = entry.target.querySelector("img[data-src]");
        if (entry.intersectionRatio > 0) {
          // console.log(lazyImage.querySelector("img[data-src]"));
          lazyImage.src = lazyImage.dataset.src;

          lazyImage.onload = function () {
            entry.target.classList.add("inViewJs-active");
            observer.unobserve(entry.target);
          };
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );
  });

  inViewElms.forEach((elm) => {
    observer.observe(elm);
  });
});

// OVERLAY MENU
let closeMenu = document.getElementById("closeMenu"),
  menuOverlay = document.querySelector(".menuOverlay"),
  menuBgOverlay = document.querySelector(".menuOverlay .menuOverlay-menuBG"),
  menuCloseOverlay = document.querySelector(
    ".menuOverlay .menuOverlay-close p"
  );
if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    menuOverlay.classList.add("is-active");
  });
  menuBgOverlay.addEventListener("click", () => {
    menuOverlay.classList.remove("is-active");
  });
  menuCloseOverlay.addEventListener("click", () => {
    menuOverlay.classList.remove("is-active");
  });
}