$(document).ready(function(){
    $('.carousel__slider').slick({
        arrows: true,
        dots: false,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }
        }
        ]
    });
});

/* $(document).ready(function(){
    $('.carousel__slider').slick({
        speed: 1000,
        arrows: true,
		dots: false,
        slidesToShow: 1, */

        // adaptiveHeight: true,
       /*  prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_red_arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_red_arrow.png"></button>', */
        
        /* responsive: [
            {
            breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
            breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
}); */

/* const slider = tns({
    container: '.carousel__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false
});


document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
    slider.goTo('next');
}; */