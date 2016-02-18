function x1(s, t, y) {
	return s.sin(t / 5) + s.sin(t / 5) * y * 10;
}

function y1(s, t) {
	return s.cos(t / 12) + s.cos(t / 12) * 10;
}

function x2(s, t, y) {
	return s.sin(t / 20) * s.cos(t / 10) * y;
}

function y2(s, t) {
	return s.sin(t / 10) * 100;
}

var vintage = function (s) {
	var t = 0;
	const LINES = 30;

	// color
	var a = 0;
	var aa = 2;
	var b = 100;
	var bb = 1.5;
	var c = 130;
	var cc = 0.4;

	s.setup = function () {
		s.createCanvas(s.windowWidth - 15, s.windowHeight - 15);
		s.translate(s.width / 2, s.height / 2);
		s.background(50);
		s.strokeWeight(3);
	}

	s.draw = function () {
		s.background(b, c, a);
		for (var i = 0; i < LINES * 2; i += 2) {
			s.fill(c, b, a);
			s.stroke(c, b, a);
			s.ellipse(x1(s, t + i, i), x2(s, t + i, i * 3), 10, 10);
			s.ellipse(y1(s, t + i), y2(s, t + i), 10, 10);
			s.stroke(a, b, c);
			s.line(x1(s, t + i, i), x2(s, t + i, i * 3), y1(s, t + i), y2(s, t + i));
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
