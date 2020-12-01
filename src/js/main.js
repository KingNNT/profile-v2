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

$(window).scroll(function () {
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
		$("footer").hide();
	} else {
		$("footer").show();
	}
});

$(document).ready(function () {
	let btn = $("#button__onTop");

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.show();
		} else {
			btn.hide();
		}
	});

	btn.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});
});
