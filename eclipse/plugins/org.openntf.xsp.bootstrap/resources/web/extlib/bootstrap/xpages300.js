/*
  XPages Boostrap specific JavaScript files
  This defines the missing JS code in Bs 3.0
*/

/* Fix the missing sub menu in BS 3.0*/
$(document).ready(function() {
	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    	event.preventDefault(); event.stopPropagation(); 
    	// 	opening the one you clicked on
    	$(this).parent().addClass('open');
    	var menu = $(this).parent().find("ul");
    	var menupos = menu.offset();
    	if ((menupos.left + menu.width()) + 30 > $(window).width()) {
        	var newpos = - menu.width();      
    	} else {
        	var newpos = $(this).parent().width();
    	}
    	menu.css({ left:newpos, width: menu.width() });
	});
});

