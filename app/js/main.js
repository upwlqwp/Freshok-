$(function () {
  $(".hero-slider__inner").slick({
    infinite: false,
    prevArrow:
      '<button type="button" class="hero-slider__arrow hero-slider__arrow--left"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    nextArrow:
      '<button type="button" class="hero-slider__arrow hero-slider__arrow--right"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".brands__list").slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    slidesToScroll: 6,
    slidesToShow: 6,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  });
});

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: "local",
  },
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);
