var header = function (s) {
	s.setup = function () {
		s.createCanvas(400, 400);
		s.background(0);
	}

	s.draw = function () {

	}
}

$(document).ready(function () {
	var temp = new p5(header, "header");
});
