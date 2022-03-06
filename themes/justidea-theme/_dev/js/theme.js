/**
 * 2007-2018 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

import 'expose-loader?Tether!tether';
import 'bootstrap/dist/js/bootstrap.min';
import 'flexibility';
import 'bootstrap-touchspin';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'simplebar/dist/simplebar.css';
import 'simplebar';
import '@fortawesome/fontawesome-pro/css/all.css';

import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';

import anime from 'animejs';
import SimpleBar from 'simplebar';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet';

import './responsive';
import './checkout';
import './customer';
import './listing';
import './product';
import './cart';
import './custom';

import DropDown from './components/drop-down';
import Form from './components/form';
import ProductMinitature from './components/product-miniature';
import ProductSelect from './components/product-select';
import TopMenu from './components/top-menu';

import prestashop from 'prestashop';
import EventEmitter from 'events';

import './lib/bootstrap-filestyle.min';
import './lib/jquery.scrollbox.min';

import './components/block-cart';


// "inherit" EventEmitter
for (var i in EventEmitter.prototype) {
  prestashop[i] = EventEmitter.prototype[i];
}

$('[data-fancybox="gallery"]').fancybox({
  loop: true,
  keyboard: true,
  arrows: true,
  //   false            - disable
  //   "fade'
  //   "slide'
  //   "circular'
  //   "tube'
  //   "zoom-in-out'
  //   "rotate'
  //
  transitionEffect: "fade",

});



$(document).ready(() => {
  let dropDownEl = $('.js-dropdown');
  const form = new Form();
  let topMenuEl = $('.js-top-menu ul[data-depth="0"]');
  let dropDown = new DropDown(dropDownEl);
  let topMenu = new TopMenu(topMenuEl);
  let productMinitature = new ProductMinitature();
  let productSelect = new ProductSelect();
  dropDown.init();
  form.init();
  topMenu.init();
  productMinitature.init();
  productSelect.init();
});

// Carousel
$(document).ready(function () {
  $(".jacuzzi-and-spa-carousel").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      },
      // breakpoint from 768 up
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
});

//Product Carousel
$(document).ready(function () {
  $(".product-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    // responsive : {
    //   // breakpoint from 0 up
    //   0 : {
    //     items: 1
    //   },
    //   // breakpoint from 480 up
    //   480 : {
    //     items: 2
    //   },
    //   // breakpoint from 768 up
    //   768 : {
    //     items: 3
    //   },
    //   992: {
    //     items: 4
    //   }
    // }
  });
});

// Gallery Carousel
$(document).ready(function () {
  $(".product-gallery").owlCarousel({
    items: 1,
    loop: true,
    stagePadding: 40,
    margin: 10,
    nav: true,
    autoplay: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
     responsive : {
       // breakpoint from 0 up
       0 : {
         items: 1
       },
       // breakpoint from 480 up
       480 : {
         items: 2
       },
       // breakpoint from 768 up
       768 : {
         items: 3
       },
       992: {
         items: 4
       }
     }
});
});

//Testimonial Carousel
$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    center: true,

    autoplay: true,
    navText: ['<span class="material-icons">chevron_left</span>', '<span class="material-icons">chevron_right</span>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 768 up
      992: {
        items: 3
      }
    }
  });
});

$(document).ready(function () {
  // run test on initial page load
  checkSize();
  // run test on resize of the window
  $(window).resize(checkSize);
});


function checkSize() {
  if ($(".queryTest").css("float") == "none") {
    new SimpleBar(document.getElementById('catsubmenu'), {
      scrollbarMinSize: 200,
      autoHide: false,
    });
  }
}



$(function () {
  $('a[href="#search_widget"]').on("click", function (event) {
    event.preventDefault();
    $("#search_widget").addClass("open");
    $('#search_widget > form > input[type="search"]').focus();
  });

  $("#search_widget, #search_widget button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  /*  $("form").submit(function(event) {
      event.preventDefault();
      return false;
    });*/
});


//leaflet
// if (!!(document.querySelector('#map'))) {
//   var mymap = L.map('map').setView([50.065421, 19.9497173], 13);

//   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     style: 'mapbox://styles/justidea/cjmbzqlm00b652spldkaaknav',
//     id: 'mapbox.light',
//     accessToken: 'pk.eyJ1IjoianVzdGlkZWEiLCJhIjoiY2ptYnlqMTF0MDl6djNrcjJxNzN3c3NnYyJ9.olwY2tqos2_9RdIKIiysQg'
//   }).addTo(mymap);

//   var icon = L.icon({
//     iconUrl: 'img/marker-icon.png',
//   });

//   var marker = L.marker([50.065421, 19.9497173], {icon: icon}).addTo(mymap);
//   mymap.scrollWheelZoom.disable();

// }
