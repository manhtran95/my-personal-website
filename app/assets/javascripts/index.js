// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


$(document).ready(function () {
	$(".container-welcome-message").on("mouseenter", changeText);
	$(".container-welcome-message").on("mouseleave", changeBack);
	$("#write-new-note").on("mouseover", animate);
	$("#write-new-note").on("mouseout", stopAnimate);

	$('.figure').fadeIn(3000);

	function animate() {
		var elem = event.target;
		elem.className = "btn btn-default btn-lg new-note-animate";
	}

	function stopAnimate() {
		var elem = event.target;
		elem.className = "btn btn-default btn-lg";
	}

	function changeText() {
		var elem = $(".welcome-message")[0];
		elem.innerText = "Hi there!";
		elem.style.color = "#0000FF";
	}

	function changeBack() {
		var elem = $(".welcome-message")[0];
		elem.innerText = "Warmest welcome to my personal blog!";
		elem.style.color = "#FFA500";
	}
});


