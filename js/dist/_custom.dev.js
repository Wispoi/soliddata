"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener("DOMContentLoaded", function () {
  var _$$slick, _$$slick2, _$$slick3;

  $('.tab-nav__item').click(function () {
    var index = $(this).index();
    $(this).parent().find('.active').removeClass('active');
    $(this).closest('section').find('.tab-panel.active').removeClass('active');
    $(this).addClass('active');
    $(this).closest('section').find('.tab-panel').eq(index).addClass('active');
  });
  $('.news-wrapper').slick((_$$slick = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  }, _defineProperty(_$$slick, "dots", false), _defineProperty(_$$slick, "arrows", true), _defineProperty(_$$slick, "prevArrow", $('.news .slider-nav__prev')), _defineProperty(_$$slick, "nextArrow", $('.news .slider-nav__next')), _defineProperty(_$$slick, "responsive", [{
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]), _$$slick)).on("afterChange", function () {
    var index = Number($(this).find('.slick-current').attr('data-slick-index'));
    var index1 = index + 1;

    if (index1 <= 9) {
      $('.news .slider-nav__count span:first-child').html('0' + index1);
    } else {
      $('.news .slider-nav__count span:first-child').html(index1);
    }
  });
  $('.tutorial-wrapper .tab-panel:nth-child(1) .tutorial-slider').slick((_$$slick2 = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '16vw'
  }, _defineProperty(_$$slick2, "dots", false), _defineProperty(_$$slick2, "arrows", true), _defineProperty(_$$slick2, "prevArrow", $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__prev')), _defineProperty(_$$slick2, "nextArrow", $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__next')), _defineProperty(_$$slick2, "responsive", [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]), _$$slick2)).on("afterChange", function () {
    var index = Number($(this).find('.slick-current').attr('data-slick-index'));
    var index1 = index + 1;

    if (index1 <= 9) {
      $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__count span:first-child').html('0' + index1);
    } else {
      $('.tutorial-wrapper .tab-panel:nth-child(1) .slider-nav__count span:first-child').html(index1);
    }
  });
  $('.tutorial-wrapper .tab-panel:nth-child(2) .tutorial-slider').slick((_$$slick3 = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '16vw'
  }, _defineProperty(_$$slick3, "dots", false), _defineProperty(_$$slick3, "arrows", true), _defineProperty(_$$slick3, "prevArrow", $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__prev')), _defineProperty(_$$slick3, "nextArrow", $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__next')), _defineProperty(_$$slick3, "responsive", [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]), _$$slick3)).on("afterChange", function () {
    var index = Number($(this).find('.slick-current').attr('data-slick-index'));
    var index1 = index + 1;

    if (index1 <= 9) {
      $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__count span:first-child').html('0' + index1);
    } else {
      $('.tutorial-wrapper .tab-panel:nth-child(2) .slider-nav__count span:first-child').html(index1);
    }
  });
  $('.slick-slider').each(function () {
    var $this = $(this);
    var length = $($this).find('.slick-slide:not(.slick-cloned)').length;
    console.log(length);
    $($this).next().find('.slider-nav__count span:last-child').html(length);
  });
  $('.password-toggle').click(function () {
    if ($(this).parent().find('input').attr('type') === "password") {
      $(this).parent().find('input').attr('type', 'text');
    } else {
      $(this).parent().find('input').attr('type', 'password');
    }
  });
  $('.close-modal').click(function () {
    $(this).closest('.modal').hide(300);
  });
  $('.open-modal').click(function () {
    $('.modal').hide(300);
    var modal = $(this).attr('data-modal');
    $('#' + modal).show(300);
  });
});