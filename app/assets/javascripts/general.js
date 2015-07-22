$(document).ready(function () {
	$('#body-content').on('change keyup keydown', 'input, textarea, select', function (e) {
		$(this).addClass('changed-input');
	});
	var submit = false;
	$(':submit').click(function() {
		submit = true;
	});

	$(window).on('beforeunload', function () {
		if(submit == true) {
			return;
		}
		if ($('.changed-input').length) {
			return 'You haven\'t saved your changes.';
		}
	});

});
