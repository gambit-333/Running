$(document).ready(function(){  /* document - наша HTML структура */ /* Код будет запускаться, когда HTML структура будет готова(ready) - ready(function()  */
    $('.carousel__inner').slick({  /* с помощью библиотеки JQuery мы обращаемся к какому-то классу */
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

