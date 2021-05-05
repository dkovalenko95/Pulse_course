// Carousel - slick-slider

$(document).ready(function() {
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


// Catalogue - tabs with product and price

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    /* $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    }); */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


// Modals

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    /* $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    }); */

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });


// Validation forms

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введети минимум {0} символа")
                },
                phone: "Пожалуйста введите свой номер телефна",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    }
    
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');


// Phone number

    $('input[name=phone]').mask("+38 (999) 999-9999");


// Mailer - sending data on email adress

    $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
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