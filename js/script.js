new WOW().init();


// navbar hide when scroll down
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){
    navbar.style.top='-90px';
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});

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


// Back to top button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

    document.getElementById("myBtn").style.transition = "all 2s";
  }
  else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrolltop = 0;
  document.documentElement.scrollTop = 0;

  var body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
           console.log("Animation has finished");
      });
}
