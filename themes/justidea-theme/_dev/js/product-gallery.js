// Custom script
import Swiper from './swiper7'
let galleryThumbs = undefined;
let mainSwiper = undefined;

function initializeProductSwipers() {

  galleryThumbs = new Swiper('#product-thumbnails-carousel', {
    observer: true,
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 5,
    slidesPerColumn: 2,
    watchSlidesProgress: true,
    direction: 'vertical',
    noSwiping: false,
    breakpoints: {
      991: {
        spaceBetween: 10,
      },
      1119: {
        spaceBetween: 20,
      },
      1600: {
        spaceBetween: 30,
      }
    },
  });

  mainSwiper = new Swiper('#product-cover-carousel', {
    observer: true,
    // loop: true,
    navigation: {
      nextEl: '#product-cover-carousel .swiper-button-next',
      prevEl: '#product-cover-carousel .swiper-button-prev',
    },
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs,
      autoScrollOffset: 1,
    },
  });

}

// function rerenderSwipers(){
//   if (mainSwiper) {
//     mainSwiper.update()
//     console.log("Swiper update!");
//   }
//   if (galleryThumbs) {
//     galleryThumbs.update()
//   }
// }


jQuery(document).on('ready', function () {
  initializeProductSwipers();
  
  if (typeof prestashop !== 'undefined') {
    prestashop.on(
      'updatedProduct',
      initializeProductSwipers
    );
  }

  // let resizeAwaiting;
  // jQuery(window).on('resize', function() {
  //   clearTimeout(resizeAwaiting);
  //   resizeAwaiting = setTimeout(rerenderSwipers, 300);
  // });
});
