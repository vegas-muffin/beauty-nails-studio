$(document).ready(function () {
  $(".gallery__row").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow:
      '<div><button class="carousel__arrow left slick-arrow slick-prev"></button></div>',
    nextArrow:
      '<div><button class="carousel__arrow right slick-arrow slick-next"></button></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".testimonials__items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<div><button class="carousel__arrow left slick-arrow slick-prev"></button></div>',
    nextArrow:
      '<div><button class="carousel__arrow right slick-arrow slick-next"></button></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
