var p5Instance = function (s) {

	s.setup = function () {
		s.createCanvas(600, 400);
	};

	s.draw = function () {
		s.rect(s.random(s.width), s.random(s.height), 10, 10);
	};
}

$("#modal").one("click", function () {
	var toRender = new p5(p5Instance, "name-of-id");
});
