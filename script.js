$(document).ready(function() {
	<--- 
	$('li').mouseenter(function() {
		$(this).fadeTo('slow', 0.5);
	});

	$('li').mouseexit(function() {
		$(this).fadeTo('slow', 1);
	});
	--->
});