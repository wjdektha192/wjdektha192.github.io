$(function () {

    //Intro
    $('#kirsh-index').delay(2500).fadeOut(800);

    //Menu
    $('.user-menu-btn').click(function () {
        $('.menu-btn, body').toggleClass('on');
        $('.kirsh-menu').fadeToggle(500);
    });

    //Category Text
    $('.kirsh-category-text p').delay(500).addClass('on');

    //Shop Instagram Slide
    new Swiper(".instagram-slide", {
        slidesPerView:5,
        loop:true,
        autoplay:true,
        navigation: {
            nextEl: ".insta-button-next",
            prevEl: ".insta-button-prev",bac1cb
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            860: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1140: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 20
            },
          }
    });
});

setTimeout(function(){
  jQuery('body').removeClass('on');
},3100);
