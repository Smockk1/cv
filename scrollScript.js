$(document).ready(function() {
  $("button").on("click", function(event) {
    var hash = $(this).attr("data-target"),
      target = $("#" + hash);

    event.preventDefault();
    $("html, body").animate({
        scrollTop: $(target).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  });
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
$(document).ready(function(){

	/*! Fades in page on load */
	$('h1.name').css('display', 'none');
	$('h1.name').fadeIn(2500);
	$('p.info').css('display', 'none');
	$('p.info').fadeIn(3500);
	$('button.menu').css('display', 'none');
	$('button.menu').fadeIn(1000);
	$('hr').css('display', 'none');
	$('hr').fadeIn(3500);
	$('div.carousel-inner').css('display', 'none');
	$('div.carousel-inner').fadeIn(5000);

});