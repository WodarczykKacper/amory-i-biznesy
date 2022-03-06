
(function($) {
  $(document).on('ready', function() {
    setTimeout(() => {
      $("#loader").removeClass('loader');
    }, 300)
    
    if (typeof prestashop !== 'undefined') {
      let timeoutCart
      let timeoutProduct

      prestashop.on(
        'updateCart',
        function (event) {
          // console.log('updating cart');
          $("#loader").addClass('loader');
          timeoutCart = setTimeout(() => {
            // console.log('updating cart timeout');
            $("#loader").removeClass('loader');
          }, 3000)
        }
      );
      prestashop.on(
        'updatedCart',
        function (event) {
          // console.log('UPDATED cart');
          $("#loader").removeClass('loader');
          clearTimeout(timeoutCart)
        }
      );
      prestashop.on(
        'updateCartPopup',
        function (event) {
          // console.log('updateCartPopup');
          $("#loader").removeClass('loader');
          clearTimeout(timeoutCart)
        }
      );

      prestashop.on(
        'updateProduct',
        function (event) {
          // console.log('updating product');
          $("#loader").addClass('loader');
          timeoutProduct = setTimeout(() => {
            // console.log('updating product timeout');
            $("#loader").removeClass('loader');
          }, 5000)
        }
      );
      prestashop.on(
        'updatedProduct',
        function (event) {
          // console.log('UPDATED product');
          $("#loader").removeClass('loader');
          clearTimeout(timeoutProduct)
        }
      );
    }
  })
})(jQuery)