// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from "swiper";

// configure Swiper to use modules
Swiper.use([Autoplay, Navigation, Pagination, Thumbs]);

const defaultSliderOptions = {
  slidesPerView: 1,
  spaceBetween: 8,
  autoplay: 2000
};

let defaultSlider = document.querySelector(".swiper-container");

if (defaultSlider) {
  new Swiper(defaultSlider, {
    ...defaultSliderOptions,
  });
}
