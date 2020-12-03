/* Function Jquery */

jQuery.fn.visible = function () {
	return this.css("visibility", "visible");
};

jQuery.fn.invisible = function () {
	return this.css("visibility", "hidden");
};

jQuery.fn.visibilityToggle = function () {
	return this.css("visibility", function (i, visibility) {
		return visibility == "visible" ? "hidden" : "visible";
	});
};
/*  */

function changeBackgroundColorNavbar() {
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
}
function animationWhenOnTop() {
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 50) {
			$("#box__information").addClass("animate__bounce");
		} else {
			$("#box__information").removeClass("animate__bounce");
		}
	});
}
function animationPageBottom() {
	$(window).scroll(function () {
		if (
			$(window).scrollTop() + $(window).height() >=
			$(document).height() - 50
		) {
			$("footer").hide();
			$("#page__bottom .page__bottom__title").addClass(
				"animate__bounceInRight"
			);
		} else {
			$("footer").show();
			$("#page__bottom .page__bottom__title").removeClass(
				"animate__bounceInRight"
			);
		}
	});

	let typed = new Typed("#typed", {
		stringsElement: "#typed-strings",
		typeSpeed: 25,
		loop: true,
		loopCount: Infinity,
	});
}

function buttonOnTop() {
	let btn = $("#button__onTop");
	btn.invisible();
	$(window).scroll(function () {
		if ($(window).scrollTop() < 300) {
			btn.hide();
			btn.invisible();
		} else {
			btn.show();
			btn.visible();
		}
	});

	btn.on("click", function (e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "300");
	});
}
/*  */
$(document).ready(function () {
	animationWhenOnTop();
	changeBackgroundColorNavbar();
	animationPageBottom();
	buttonOnTop();
});
