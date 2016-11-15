// MODAL REGISTRO llamado
// $(document).ready(function () {
//   $('#openBtn').click(function () {
//     $( "#success" ).load( "https://www.google.cl", function( response, status, xhr ) {
//       console.log(response);
//       if ( status == "error" ) {
//         var msg = "Sorry but there was an error: ";
//         $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
//       }
//     });
// });

// MODAL REGISTRO animaciones
$(document).ready(function () {
  $('#openBtn').click(function () {
    $('#modalRegistro').modal({
      show: true
    })
  });

  $(document).on('show.bs.modal', '.modal', function (event) {
    var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
        setTimeout(function() {
          $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
  });
});