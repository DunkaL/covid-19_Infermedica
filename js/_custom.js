
document.addEventListener("DOMContentLoaded", function() {
	new WOW().init();

	var num = 50; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > num) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});
	
	$('#navToggle').on('click', function(){
		$('.nav').slideToggle();
	});

});
