'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    var sticky = new Waypoint.Sticky({
    	element: $('#nav-site2')[0]
    });

    $('#nav-toggle').on('click', function(e) {
    	e.preventDefault();
    	$(this).add('#slidebar').toggleClass('is-open'); 
  	});


  });
})(jQuery);
