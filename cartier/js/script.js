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
    markers: true,
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


const tlPj1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cartier-gallery-tit",
    endTrigger: '.cartier-gallery',
    start: "top top",
    end: 'top 35%',
    markers: true,
    pin: ".gallery-tit-text",
    pinSpacing: false,
    scrub: 1
  }
});
