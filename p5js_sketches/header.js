// Anonymous function preventing outside access
(function () {
	function fade(s) {
		s.noStroke();
		s.fill(0, 10);
		s.rect(0, 0, s.width, s.height);
	}

	var header = function (s) {
		s.setup = function () {
			s.createCanvas($("#header").width(), 200);
		};

		s.draw = function () {
			fade(s);
		};

		s.windowResized = function () {
			s.resizeCanvas($("#header").width(), 200);
		};
	}

	$(document).ready(function () {
		var temp = new p5(header, "header");
	});
})();
