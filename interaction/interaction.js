$(document).ready(function () {
	$("#design").click(function (event) {
		$("#header").css({
			"height": "100px"
		});
		temp.resizeCanvas($("#header").width(), $("#header").height());
	});

	$("#video").click(function (event) {
		$("#header").css({
			"height": "100px"
		});
		temp.resizeCanvas($("#header").width(), $("#header").height());
	});

	$("#music").click(function (event) {
		$("#header").css({
			"height": "100px"
		});
		temp.resizeCanvas($("#header").width(), $("#header").height());
	});

	$("#about").click(function (event) {
		$("#header").css({
			"height": "100px"
		});
		temp.resizeCanvas($("#header").width(), $("#header").height());
	});

	$("#header").click(function (event) {
		$("#header").css({
			"height": "500px"
		});
		temp.resizeCanvas($("#header").width(), $("#header").height());
	})
});
