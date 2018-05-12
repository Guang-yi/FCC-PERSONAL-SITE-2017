/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$(document).ready(function($) {
  var x = $('#myNavbar');
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > window.innerHeight) {
      x.addClass('fix-nav');
    } else {
      x.removeClass('fix-nav');
    }
  });

  
  $("#about-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#about-content").offset().top},
        'slow','swing');
  });
  
  $("#portfolio-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio-content").offset().top},
        'slow','swing');
  });
    $("#contact-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact-content").offset().top},
        'slow', 'swing');
  });
});