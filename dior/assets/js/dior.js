let bodyScrollBar = Scrollbar.init(document.body, {
  damping: 0.1,
  delegateTo: document
});
ScrollTrigger.scrollerProxy("#dior", {
  scrollTop(value) {
    if (arguments.length) {
      bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
  }
});
bodyScrollBar.addListener(ScrollTrigger.update);

gsap.registerPlugin(ScrollTrigger);

gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.panel:not(.purple)');

images.forEach((image, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".dior-ex",
      scroller: "#dior",
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      markers: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl
  .to(image, { height: 0 })
  ;
  
});







gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

var texts = gsap.utils.toArray('.panel-text');

texts.forEach((text, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: ".dior-ex",
      scroller: "#dior",
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl
  .to(text, { duration: 0.33, opacity: 1, y:"50%" })  
  .to(text, { duration: 0.33, opacity: 0, y:"0%" }, 0.66)
  ;
  
});





ScrollTrigger.create({

    trigger: ".dior-ex",
    scroller: "#dior",
    scrub: true,
    markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,

});