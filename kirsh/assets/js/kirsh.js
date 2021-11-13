$(function () {

    //Intro
    $('#kirsh-index').delay(2500).fadeOut(800);

    //Menu
    $('.user-menu-btn').click(function () {
        $('.menu-btn, body').toggleClass('on');
        $('.kirsh-menu').fadeToggle(500);
    });


    //Category Text
    $('.kirsh-category-text p').delay(1000).addClass('on');

    //Shop Item Slide

    //Shop Instagram Slide
    var swiper = new Swiper(".instagram-slide", {
        slidesPerView:5,
        spaceBetween: 10,
        loop:true,
        navigation: {
            nextEl: ".insta-button-next",
            prevEl: ".insta-button-prev",
          },
    });

});
