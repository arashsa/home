var animate = function (height) {
	// animation banner
	$("#header").animate({
		"height": height
	}, 1000, function () {
		temp.resizeCanvas($("#header").width(), height.replace("px", ""));
	});
}

var reset = function (height, which) {
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
		$("#main").html("")
	})
});
