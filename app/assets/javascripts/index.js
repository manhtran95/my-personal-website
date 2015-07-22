// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function () {
	$(".container-welcome-message").on("mouseenter", changeText);
	$(".container-welcome-message").on("mouseleave", changeBack);

	// $('.figure').each(function() {
	// 	// $(this).fadeIn(3000);
	// });

	function changeText() {
		var elem = $(".welcome-message")[0];
		elem.innerText = "Hi there!";
	}

	function changeBack() {
		var elem = $(".welcome-message")[0];
		elem.innerText = "Warmest welcome to my personal blog!";
	}
});


