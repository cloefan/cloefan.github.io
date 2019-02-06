$(document).ready(function() {

  var $window = $(window);
  var stickyNavContainer = $('.sticky-nav-container');
  var nav = $('nav#project');
  var navTop = nav.offset().top;

  $window.scroll(function() {
    nav.toggleClass('sticky-nav', $window.scrollTop() > navTop);
  });
});
