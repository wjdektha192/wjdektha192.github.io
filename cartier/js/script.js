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

//Interview 
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("interview-img-left")) {
    x = -150;
    y = 0;
  } else if (elem.classList.contains("interview-img-right")) {
    x = 150;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".interview-reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

//Product
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: "fade",
  loop: "infinite",
});

swiper.on('slideChange', function (sld) {
  document.body.setAttribute('data-sld', sld.realIndex);
});
