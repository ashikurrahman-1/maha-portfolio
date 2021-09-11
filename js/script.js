new WOW().init();

// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });
  });

