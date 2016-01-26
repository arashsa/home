var bannerDown = true;
var minHeight = "100px";
var maxHeight = "500px";
var animationSpeed = 500;

var animate = function (height) {
	// animation banner
	$("#header").animate({
		"height": height
	}, animationSpeed, function () {
		if (bannerDown) {
			temp.resizeCanvas($("#header").width(), height.replace("px", ""));
			bannerDown = false;
		}
	});

	if (!bannerDown) {
		temp.resizeCanvas($("#header").width(), height.replace("px", ""));
		setTimeout(function () {
			bannerDown = true;
		}, animationSpeed + 100);
	}

}

var reset = function (which) {
	// color for banners
	$(".active").removeClass("active");
	$(which).addClass("active");
};

// click events
$(document).ready(function () {
	$(".design").click(function (event) {
		reset(".design");
		$("#main").load("views/design.html");
		if (bannerDown) {
			animate(minHeight);
		}
	});

	$(".video").click(function (event) {
		reset(".video");
		$("#main").load("views/video.html");
		if (bannerDown) {
			animate(minHeight);
		}
	});

	$(".music").click(function (event) {
		reset(".music");
		$("#main").load("views/music.html");
		if (bannerDown) {
			animate(minHeight);
		}
	});

	$(".text").click(function (event) {
		reset(".text");
		$("#main").load("views/text.html");
		if (bannerDown) {
			animate(minHeight);
		}
	});

	$(".about").click(function (event) {
		reset(".about");
		$("#main").load("views/about.html");
		if (bannerDown) {
			animate(minHeight);
		}
	});

	$("#header").click(function (event) {
		reset("");
		$("#main").html("")
		if (!bannerDown) {
			animate(maxHeight);
		}
	})
});
