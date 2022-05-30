$(document).ready(function(){  /* document - наша HTML структура */ /* Код будет запускаться, когда HTML структура будет готова(ready) - ready(function()  */
    $('.carousel__inner').slick({  /* с помощью библиотеки JQuery мы обращаемся к какому-то классу */
        speed: 1200,/*  скорость, при помощи которой мы будем переключать наш слайдер/ как быстро */
        adaptiveHeight: true,/*  слайдер будет подстраиваться под высоту картинок */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>', /* стрелки наши. Вместо текста мы вве тэг img и добавли картинку */
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',  /* Путь к картинке прописать так, будт омы находимся в index.html | так работает система */
        responsive: [ /* как себя слайдер будет вести на определенных промежутках */
            {
                breakpoint: 992, /* На каком промежутке пикселей странице мы будем устанавливать эти правила */
                settings: {
                    dots: true, /* точки/кружочки внизу под слайдером */
                    arrows: false /* стрелки на таком разрешении отключаю */
                }
            }
        ]
    });
});

