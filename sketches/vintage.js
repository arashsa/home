function x1(s, t) {
	return s.sin(t / 5) * 150 + s.sin(t / 5) * 200;
}

function y1(s, t) {
	return s.cos(t / 12) * 200 + s.cos(t / 12) * 30;
}

function x2(s, t) {
	return s.sin(t / 20) * 200;
}

function y2(s, t) {
	return s.sin(t / 15) * 200;
}

var vintage = function (s) {
	var t = 0;
	const LINES = 20;

	// color
	var a = 0;
	var aa = 0.2;
	var b = 100;
	var bb = 1.5;
	var c = 130;
	var cc = 0.4;

	s.setup = function () {
		s.createCanvas(s.windowWidth - 15, s.windowHeight - 15);
		s.translate(s.width / 2, s.height / 2);
		s.background(50);
		s.strokeWeight(5);
	}

	s.draw = function () {
		s.background(50);
		for (var i = 0; i < LINES; i++) {
			//			s.stroke(s.random(255));
			s.stroke(a, b, c);
			s.line(x1(s, t + i), x2(s, t + i), y1(s, t + i), y2(s, t + i));
		}
		a += aa;
		b += bb;
		c += cc;
		t += 0.5;

		if (a > 255 || a < 0)
			aa = -aa;
		if (b > 255 || b < 0)
			bb = -bb;
		if (c > 255 || b < 0)
			cc = -cc;
	}
}

new p5(vintage, "vintage");
