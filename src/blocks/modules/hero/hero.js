import $ from "jquery";
import slick from "slick-carousel";

$('.hero__slider').slick({
    infinite: true,
    prevArrow: `<div class="arrow arrow-left"></div>`,
    nextArrow: `<div class="arrow arrow-right"></div>`,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 757,
          settings: {
            slidesToShow: 1,
            variableWidth: true
          }
        }
      ]
});