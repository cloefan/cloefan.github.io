$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    var pos1 = $('#one').offset().top-40;
    var pos2 = $('#two').offset().top-40;
    var pos3 = $('#three').offset().top-40;
    var pos4 = $('#four').offset().top-40;

    if (scroll <= pos2) {
        $("li#firstitem").addClass("selected");
        $("li#seconditem").removeClass("selected");
        $("li#thirditem").removeClass("selected");
        $("li#fourthitem").removeClass("selected");
    } 
    else if (scroll >= pos1 && scroll <= pos3)
    {
        $("li#seconditem").addClass("selected");
        $("li#firstitem").removeClass("selected");
        $("li#thirditem").removeClass("selected");
        $("li#fourthitem").removeClass("selected");
    }
    else if (scroll >= pos2 && scroll <= pos4)
    {
        $("li#thirditem").addClass("selected");
        $("li#firstitem").removeClass("selected");
        $("li#seconditem").removeClass("selected");
        $("li#fourthitem").removeClass("selected");
    }
    else{
      $("li#fourthitem").addClass("selected");
        $("li#firstitem").removeClass("selected");
        $("li#seconditem").removeClass("selected");
        $("li#thirditem").removeClass("selected");
    }
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



