// Anonymous function preventing outside access
(function () {
	var p5Instance = function (s) {

		s.setup = function () {
			s.createCanvas(100, 100);
		};

		s.draw = function () {

		};
	}

	$(document).ready(function () {
		var toRender = new p5(p5Instance, "name-of-div");
	});
})();
