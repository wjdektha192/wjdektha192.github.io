


TweenMax.to('#intro', 1, {
    delay: 3,
    clipPath: "circle(0% at 50% 50%)",
    ease: Power3.easeOut,
});




gsap.registerPlugin(ScrollTrigger);





const pageContainer = document.querySelector(".beoplay-contents");


/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});



//////////////////////////////////// Header Scroll
ScrollTrigger.create({
  scroller: pageContainer, //locomotive-scroll
  start: 'top -800',
  end: 99999,
  toggleClass: { className: 'header-on', targets: '#beoplay-menu' }
});



//////////////////////////////////// Sound Slide

var swiper = new Swiper(".sound-slide01", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: 'fade',
  simulateTouch: false,
});

var swiper = new Swiper(".sound-slide02", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  effect: 'fade',
  simulateTouch: false,
});

var swiper = new Swiper(".sound-slide03", {
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
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#beoplay-technology",
      pin: true,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });
  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});


//////////////////////////////////// Product Slide

var swiper = new Swiper(".mySwiper", {
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


swiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});
