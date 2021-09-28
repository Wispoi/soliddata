document.addEventListener("DOMContentLoaded", function () {

    $('.tab-nav__item').click(function () {
        var index = $(this).index();
        $(this).parent().find('.active').removeClass('active')
        $(this).closest('section').find('.tab-panel.active').removeClass('active')
        $(this).addClass('active')
        $(this).closest('section').find('.tab-panel').eq(index).addClass('active')
    })
    $('.news-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.news .slider-nav__prev'),
        nextArrow: $('.news .slider-nav__next'),
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }).on("afterChange", function () {
        var index = Number($(this).find('.slick-current').attr('data-slick-index'))
        var index1 = index + 1;

        if (index1 <= 9) {
            $('.news .slider-nav__count span:first-child').html('0' + index1)
        } else {
            $('.news .slider-nav__count span:first-child').html(index1)
        }
    });


    $('.tutorial-wrapper .tab-panel:nth-child(1) .tutorial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '16vw',
        dots: false,
        arrows: true,
        prevArrow: $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__prev'),
        nextArrow: $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__next'),
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '8vw',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    speed: 1000
                }
            }
        ]
    }).on("afterChange", function () {
        var index = Number($(this).find('.slick-current').attr('data-slick-index'))
        var index1 = index + 1;

        if (index1 <= 9) {
            $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__count span:first-child').html('0' + index1)
        } else {
            $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__count span:first-child').html(index1)
        }
    });

    $('.tutorial-wrapper .tab-panel:nth-child(2) .tutorial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '16vw',
        dots: false,
        arrows: true,
        prevArrow: $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__prev'),
        nextArrow: $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__next'),
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '8vw',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    speed: 1000
                }
            }
        ]
    }).on("afterChange", function () {
        var index = Number($(this).find('.slick-current').attr('data-slick-index'))
        var index1 = index + 1;

        if (index1 <= 9) {
            $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__count span:first-child').html('0' + index1)
        } else {
            $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__count span:first-child').html(index1)
        }
    });

    $('.slick-slider').each(function () {
        var $this = $(this)
        var length = $($this).find('.slick-slide:not(.slick-cloned)').length;
        $($this).next().find('.slider-nav__count span:last-child').html(length)
    })

    $('.password-toggle').click(function () {
        if ($(this).parent().find('input').attr('type') === "password") {
            $(this).parent().find('input').attr('type', 'text');
        } else {
            $(this).parent().find('input').attr('type', 'password');
        }
    })
    $('.close-modal').click(function () {
        $(this).closest('.modal').hide(300);
    })
    $('.open-modal').click(function () {
        $('.modal').hide(300);
        var modal = $(this).attr('data-modal');
        $('#' + modal).show(300);
    })
    $(".header-mobile").click(function() {
        var API = $("#mobileMenu").data("mmenu");
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $('.mobile-nav').css('transform', 'translateX(0)')
            
        } else {
            $(this).addClass('active')
            $('.mobile-nav').css('transform', 'translateX(-100%)')
            
        }
     });
    if ($(window).width() < 1440) {
        $('#mobileMenu').mmenu({
            navbar: {
              title: "Навигация"
            }
          });
        var API = $("#mobileMenu").data("mmenu");
        $(".header-mobile").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                API.close();
            } else {
                $(this).addClass('active')

            }
        });
    }
    $(window).resize(function () {
        if ($(window).width() < 1440) {
            $('#mobileMenu').mmenu();
            var API = $("#mobileMenu").data("mmenu");
        }
        else {

        }
    });
    $('.faq-item').click(function() {
        $(this).toggleClass('active')
    })

});
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }	

    var accordion = new Accordion($('#accordion'), false);
});