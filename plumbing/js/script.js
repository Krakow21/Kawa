document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Плавный движ

    $(document).ready(function () {
        $("a[href*=#]").on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });
    });

    // Анимации
    new WOW().init();

    //  Маска телефона
    $(document).ready(function () {
        var button = $('.services-button')
        button.mousemove(function () {
            $(this).text('от 500 р.')
        }).mouseout(function () {
            $(this).text('Узнать цену')
        });
        $('.phone').mask('+7 (999) 999-99-99')
    })

    

    // Модальное окно
    var button = document.querySelector('#button');
    var modal = document.querySelector('#modal');
    var close = document.querySelector('#close')

    button.addEventListener('click', function () {
        modal.classList.add('modal_active');
    });

    close.addEventListener('click', function () {
        modal.classList.remove('modal_active');
    });

    setInterval(function () {
        modal.classList.remove('modal_active');
    }, 3000);

    // Слайдер
    $(document).ready(function () {
        $('.hero-slider').slick({
            arrows: false,
            dots: true,
            autoplay: 500
        });
        $('.reviews-content').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true,
            infinite: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    });

})




// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//     animationTime = 300,
//     framesCount = 20;

// anchors.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         e.preventDefault();
//         let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
//         let scroller = setInterval(function () {
//             let scrollBy = coordY / framesCount;
//             if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//                 window.scrollBy(0, scrollBy);
//             } else {
//                 window.scrollTo(0, coordY);
//                 clearInterval(scroller);
//             }
//         }, animationTime / framesCount);
//     });
// });