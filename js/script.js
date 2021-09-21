new WOW().init();

// About owl carousel
$(document).ready(function(){
    $(".projects").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });
  });

//   Reviews owl carousel
$(document).ready(function(){
    $('.reviews').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        margin: 50,
        responsiveClass: true,
        responsive:{
            0: {
              items: 1,
            },
            480: {
              items: 1,
            },
            767: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 3,
            },
          },
    });
});
