(function ($) {

  $(document).on('ready', function () {
    newsletterPopup()
  });

  function newsletterPopup() {
    $(".ss19-bottom__button, .newsletter-popup, .popup-exit").on('click', showPopUp)
  }

  function showPopUp() {
    $("#mc_embed_signup").toggleClass("form-popup-show")
    $("#mc_embed_signup").find('.input-popup-mailchimp').val('');
  }
})(jQuery)