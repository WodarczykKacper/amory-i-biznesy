// Custom script

// Floating header display change

jQuery(document).on('ready', function(){
  // add listener
  function floatingMenu() {
    let heightScroll = window.pageYOffset;
    const navBar = document.querySelector('#header');
    if(heightScroll >= 15){
        document.body.classList.add('fixed-navigation');
    }else{
      document.body.classList.remove('fixed-navigation');
    }
    if(heightScroll >= 95) {
        navBar.classList.add('nav-box-shadow');
    } else {
      navBar.classList.remove('nav-box-shadow');
    }
  }
  floatingMenu();
  window.addEventListener('scroll', floatingMenu)
});

