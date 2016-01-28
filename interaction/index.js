var bannerDown = true;
var minHeight = "100px";
var maxHeight = "600px";
var animationSpeed = 400;

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

var bannerEvents = function (name) {
	$(name).click(function (event) {
		reset(name);
		$("#main").load("views/" + name.replace('.', '') + ".html");
		if (bannerDown) {
			animate(minHeight);
		}
	});
}

// click events
$(document).ready(function () {
	bannerEvents(".design");
	bannerEvents(".video");
	bannerEvents(".music");
	bannerEvents(".text");
	bannerEvents(".about");

	$("#header").click(function (event) {
		reset("");
		$("#main").html("")
		if (!bannerDown) {
			animate(maxHeight);
		}
	})
});
