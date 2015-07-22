

$(document).ready(function () {
	$("#comment-form").on("submit", validateForm);

	function validateForm() {
	var body = document.forms["commentForm"]["comment[body]"].value;
	var commenter = document.forms["commentForm"]["comment[commenter]"].value;
	if (body == null || body == "") {
		alert("Please fill out the comment!");
		return false;
	}
	if (commenter == null || commenter == "") {
		document.forms["commentForm"]["comment[commenter]"].value = "Anonymous user";
	}
}
});