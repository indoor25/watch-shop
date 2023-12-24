const searchXmark = document.querySelector('.search__xmark')
const searchForm = document.querySelector('.search__form')
const searchGlass = document.querySelector('.search__glass')
const burgerIcon = document.querySelector('.navbar-burger')

const handlerSearchForm = () => {
  if (!searchForm.classList.contains('active')) {
    searchForm.style.display = 'block'
    searchXmark.style.display = 'block'
    searchGlass.style.display = 'none'
    burgerIcon.style.display = 'none'
  }
}

const handlerCloseSearch = () => {
  if (searchForm.style.display) {
    searchForm.removeAttribute('style')
    searchXmark.removeAttribute('style')
    searchGlass.removeAttribute('style')
    burgerIcon.removeAttribute('style')
  }
}
searchGlass.addEventListener('click', handlerSearchForm)
searchXmark.addEventListener('click', handlerCloseSearch)

const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

$(document).ready(function () {

  $('.navbar-burger').on('click', function () {
    $(this).toggleClass('active');
    $('.navbar-list').stop(true, true).slideToggle('500', function () {
      if (!$('.navbar-burger').hasClass('active')) {
        $('.navbar-list').removeAttr('style')
      }
    });
  });
});
