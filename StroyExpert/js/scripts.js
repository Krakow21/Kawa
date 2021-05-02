$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: true,
    dots: true,
    prevArrow: $('.hero-arrow__left'),
    nextArrow: $('.hero-arrow__right'),
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.apart-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: $('.apart-arrow__left'),
    nextArrow: $('.apart-arrow__right'),
    autoplay: false,
    autoplaySpeed: 2000
  });

  $('.menu-btn').click(function(event){
    if (!$('.hero-nav').hasClass('hero-nav_active')) {
      $('.hero-nav').addClass('hero-nav_active')
    } else { 
      $('.hero-nav').removeClass('hero-nav_active')
    }
  });
  jQuery('a').on('click', function (e) {
    e.preventDefault(); 
  });
});

