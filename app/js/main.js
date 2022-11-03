$(function () {
  $(".hero-slider__inner").slick({
    infinite: false,
    prevArrow: '<button type="button" class="arrows arrow--left"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="arrows arrow--right"><svg class="arrow"><use xlink:href="images/sprite.svg#arrow"></use></svg></button>',
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

var mixer = mixitup(".products");
