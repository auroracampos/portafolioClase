$(document).ready(function(){
  console.log("Hola");
$('#menu-barras').click(function(evento) {
  $('nav.menu').toggleClass("visible");

});

 $('#mobile-close').click(function(evento) {
   $('#mobile-close').hide();
   $('#mobile-button').show();
   $('#mobile-container').hide();

 });
});
