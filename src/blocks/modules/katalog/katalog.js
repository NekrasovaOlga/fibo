import $ from "jquery";
import slick from "slick-carousel";

$('.popular__slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 757,
          settings: {
            arrows: false,
            slidesToShow: 1,
            variableWidth: true
          }
        }
      ]
});