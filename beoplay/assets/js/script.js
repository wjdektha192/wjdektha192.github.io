gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".beoplay-contents");

//////////////////////////////////// Header Scroll
ScrollTrigger.create({
  start: 'top -800',
  end: 99999,
  toggleClass: { className: 'header-on', targets: '#beoplay-menu' }
});

//////////////////////////////////// Sound Slide

var soundswiper01 = new Swiper(".sound-slide01", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: 'fade',
  simulateTouch: false,
});

var soundswiper02 = new Swiper(".sound-slide02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: 'fade',
  simulateTouch: false,
});

var soundswiper03 = new Swiper(".sound-slide03", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: 'fade',
  simulateTouch: false,
});


//////////////////////////////////// Technology Horizontal

window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scrub: 1,
      trigger: "#beoplay-technology",
      pin: true,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.refresh();
});


//////////////////////////////////// Product Slide

var productSwiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".product-next-button",
    prevEl: ".product-prev-button"
  },

  effect: "fade",
  loop: "infinite",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});


productSwiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});
