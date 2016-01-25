var bannerDown = true;

var reset = function (height, which) {

	// animation banner
	$("#header").animate({
		"height": height
	}, 1000, function () {
		$("#header").css({
			"height": height
		});
	});
	temp.resizeCanvas($("#header").width(), height.replace("px", ""));

	// color for banners
	$(".active").removeClass("active");
	$(which).addClass("active");
};

$(document).ready(function () {
	$(".design").click(function (event) {
		reset("100px", ".design");
		$("#main").load("views/design.html")
	});

	$(".video").click(function (event) {
		reset("100px", ".video");
		$("#main").load("views/video.html")
	});

	$(".music").click(function (event) {
		reset("100px", ".music");
		$("#main").load("views/music.html")
	});

	$(".text").click(function (event) {
		reset("100px", ".text");
		$("#main").load("views/text.html")
	});

	$(".about").click(function (event) {
		reset("100px", ".about");
		$("#main").load("views/about.html")
	});

	$("#header").click(function (event) {
		reset("600px");
	})
});
