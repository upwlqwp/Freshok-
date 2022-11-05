$(function () {
  $(".hero-slider__inner").slick({
    infinite: false,
    prevArrow: '<button type="button" class="hero-slider__arrow hero-slider__arrow--left"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="hero-slider__arrow hero-slider__arrow--right"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

var mixer = mixitup(".top-products__list");
