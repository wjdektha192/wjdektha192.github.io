gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const start = document.body.style.overflow = 'auto';

document.scrollingElement.scrollTo(0, 0);

//Gallery
gsap.utils.toArray('section').forEach((section, index) => {
  const w = section.querySelector('.wrapper');
  const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
  gsap.fromTo(w, { x }, {
    x: xEnd,
    scrollTrigger: {
      trigger: section,
      scrub: 0.5
    }
  });
});



// text
gsap.utils.toArray(".textUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 70%",
    end: "bottom 20%",
    markers: false,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});

//textmove
const tlPj1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cartier-gallery-tit",
    endTrigger: '.cartier-gallery',
    start: "top top",
    end: 'top 25%',
    pin: ".gallery-tit-text",
    pinSpacing: false,
    scrub: 1
  }
});


//slide 
// var swiper = new Swiper(".mySwiper", {
//   mousewheel: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   loop:true,
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  breakpoints: {
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    // 480: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    // 640: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});