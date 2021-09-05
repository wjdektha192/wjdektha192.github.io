gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".section").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top", 
    pin: true, 
    pinSpacing: false,
    scrub: true,
  });
});