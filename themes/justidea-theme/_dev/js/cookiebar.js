import Cookies from '../node_modules/js-cookie/dist/js.cookie.mjs';

(function ($) {

  $(document).on('ready', function () {
    cookiesPolicyBar()
  });

  function cookiesPolicyBar() {
    // Check cookie
    if (Cookies.get('ciacho') != "active") $('#cookieAcceptBar').show();
    //Assign cookie on click
    $('#cookieAcceptBarConfirm').on('click', function () {
      Cookies.set('ciacho', 'active', {
        expires: 7
      }); // cookie will expire in 7 days
      $('#cookieAcceptBar').fadeOut();
    });
  }
})(jQuery)