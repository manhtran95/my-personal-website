$(document).ready(function () {
	$("#fbimg,#twimg").on("mouseover",  rotateRightAnimation);
	$("#gmimg").on("mouseover",  rotateLeftAnimation);
	$("#fbimg,#twimg, #gmimg").on("mouseout",  stopRotateAnimation);

	$('.container-img').click(function() {
		var clicks = $(this).data('clicks');
		if (!clicks) {
			animation();
		} else {
			stopAnimation();
		}
		$(this).data("clicks", !clicks);
	});

	var looper;
	var degrees = 0;
	function rotateRightAnimation(event){
		var speed = 30;
		var elem = event.target;
		elem.style.transform = "rotate("+degrees+"deg)";
		looper = setTimeout(rotateRightAnimation,speed, event);
		degrees++;
		if(degrees > 359){
			degrees = 1;
		}
	}

	function rotateLeftAnimation(event){
		var speed = 30;
		var elem = event.target;
		elem.style.transform = "rotate("+degrees+"deg)";
		looper = setTimeout(rotateLeftAnimation,speed, event);
		degrees--;
		if(degrees < -359){
			degrees = -1;
		}
	}


	function stopRotateAnimation(event){
		var elem = event.target;
		clearTimeout(looper);
		elem.style.transform = "rotate(0deg)";
		degrees = 0;
	}

	function animation(){
		var firstImg = $(".first-sig-img")[0];
		var secondImg = $(".second-sig-img")[0];
		firstImg.className = "first-sig-img imgAni1";	
		secondImg.className = "second-sig-img imgAni2";	

	}

	function stopAnimation(){
		var firstImg = $(".first-sig-img")[0];
		var secondImg = $(".second-sig-img")[0];
		firstImg.className = "first-sig-img";	
		secondImg.className = "second-sig-img";	

	}

});