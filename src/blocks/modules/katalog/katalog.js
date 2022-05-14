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

let modalClose = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')
let cartBtn = document.querySelector('.katalog__cart-button')

modalClose.onclick = (e) => {
  modal.style.display = 'none'
}

cartBtn.onclick = (e) => {
  modal.style.display = 'flex'
}