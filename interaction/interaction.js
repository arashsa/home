var reset = function (height, which) {
	$("#header").animate({
		"height": height
	}, 1000, function () {
		$("#header").css({
			"height": height
		});
	});
	temp.resizeCanvas($("#header").width(), height.replace("px", ""));
	$(".active").removeClass("active");
	$(which).addClass("active");
};

$(document).ready(function () {
	$(".design").click(function (event) {
		reset("100px", ".design");
	});

	$(".video").click(function (event) {
		reset("100px", ".video");
	});

	$(".music").click(function (event) {
		reset("100px", ".music");
	});

	$(".text").click(function (event) {
		reset("100px", ".text");
	});

	$(".about").click(function (event) {
		reset("100px", ".about");
	});

	$("#header").click(function (event) {
		reset("600px");
	})
});
