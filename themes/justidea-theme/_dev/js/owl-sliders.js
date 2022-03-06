// Custom script
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



/*****************  HOMEPAGE SLIDERS  *****************/
jQuery(document).on('ready', function () {
	jQuery('.home-slider-new').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		dots: false,
		lazyLoad: true,
		autoplayHoverPause: true,
		nav: true,
		navText: false,
		center: true,
		margin: 35,
		responsive: {
			1365: {
				margin: 0
			},
			1501: {
				margin: 75
			}
		}
	});
});
// owl slider on surf story page
jQuery(document).on('ready', function () {
	jQuery('.surf-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		lazyLoad: true,
		autoplayHoverPause: true,
		nav: true,
		navText: false,
		dots: false,
		center: true,
		margin: 30,
		responsive: {
			769: {
				items: 2
			},
			1025: {
				items: 3
			}
		}
	});
});


/*****************  RELOVEURION SLIDERS  *****************/
//jacket slider
jQuery(document).on('ready', function () {
	jQuery('.jacket__slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: false,
		// autoplayTimeout: 3000,
		// autoplayHoverPause: true,
		mouseDrag: true,
		touchDrag: true,
		nav: true,
		navText: false,
		dots: false,
		responsive: {
			480: {
				nav: true
			}
		}
	});
});

//specification slider
jQuery(document).on('ready', function () {
	jQuery('.specification__slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		mouseDrag: true,
		touchDrag: true,
		nav: true,
		navText: false,
		dots: false,
		responsive: {
			769: {
				nav: true,
			}
		}
	});
});

//img slider
jQuery(document).on('ready', function () {
	jQuery('.staywarm-slider').owlCarousel({
		loop: true,
		items: 1,
		autoplay: false,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		margin: 0,
		mouseDrag: false,
		touchDrag: true,
		nav: false,
		navText: false,
		dots: false,
		responsive: {
			320 : {
				margin: 14
			},
			768: {
				nav: true,
				margin: 32
			},
			992: {
				nav: true,
				margin: 35
			},
			1025: {
				nav: true,
				margin: 35,
				mouseDrag: true,
				touchDrag: false
			}
		}
	});
});



/*****************  CAMPAIGN SLIDERS  *****************/
//campaign slider
jQuery(document).on("ready", function(){
	jQuery('.baleal-slider').owlCarousel({
	  loop: true,
	  items : 1,
	  autoplay: true,
	  autoplayTimeout: 3500,
	  autoplayHoverPause: true,
	  margin: 0,
	  mouseDrag: true,
	  touchDrag: true,
	  nav: false,
	  navText: false,
	  dots: false,
	  responsive : {
	  320 : {
			margin: 30
		},
		992 : {
		  nav: true,
		  margin: 30,
    },
    1440 : {
      nav: true,
      margin: 50,
    }
	}
	});
});

//campaign vertical slider
jQuery(document).on("ready", function(){
	jQuery('.baleal-slider-vertical').owlCarousel({
	  loop: true,
	  items : 1,
	  autoplay: false,
	  autoplayTimeout: 3000,
	  autoplayHoverPause: true,
	  nav: false,
	  navText: false,
    dots: false,
    margin: 0,
    mouseDrag: true,
    touchDrag: true,
    responsive : {
      320 : {
        margin: 30      
      },
      768 : {
        nav: true           
      },
      992 : {
        nav: true,
        margin: 60
      }
    }
	});
});