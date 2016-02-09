function x1(s, t) {
	return s.sin(t / 10) * 100 + s.sin(t / 5) * 20;
}

function y1(s, t) {
	return s.cos(t / 12) * 200;
}

function x2(s, t) {
	return s.sin(t / 10) * 200;
}

function y2(s, t) {
	return s.sin(t / 15) * 200;
}

var vintage = function (s) {
	var t = 0;
	const LINES = 40;
	s.setup = function () {
		s.createCanvas(s.windowWidth - 15, s.windowHeight - 15);
		s.translate(s.width / 2, s.height / 2);
		s.background(50);
		s.strokeWeight(10);
	}

	s.draw = function () {
		s.background(50);
		for (var i = 0; i < LINES; i++) {
			//			s.stroke(s.random(255));
			s.line(x1(s, t + i), x2(s, t + i), y1(s, t + i), y2(s, t + i));
		}
		t += 0.5;
	}
}

new p5(vintage, "vintage");
