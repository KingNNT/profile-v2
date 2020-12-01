$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll <= 200) {
		$("header nav").addClass("bg-dark");
		$("header nav").removeClass("bg-dark__secondary");
	} else {
		$("header nav").removeClass("bg-dark");
		$("header nav").addClass("bg-dark__secondary");
	}
});
