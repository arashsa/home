// min and max inclusive
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomC(s) {
	return s.color(randInt(0, 255), randInt(0, 255), randInt(0, 255));
}

var makeEllipse = function (s, x, y, strokeWeight, width, g, which) {
	if (x > 0 && x < s.width && y > 0 && y < s.height) {
		s.fill(randInt(10, 100), randInt(10, 100), randInt(10, 100));
		s.strokeWeight(strokeWeight);
		s.ellipse(x, y, width, width);
		g.startGen(s, which, x, y, strokeWeight, width, g.stop);
	}
}

var up = function (s, px, py, pstrokeWeight, pWidth, g, which) {
	var
		x = px,
		y = py - (pWidth / 1.3),
		strokeWeight = pstrokeWeight / 1.3,
		width = pWidth / 2;

	makeEllipse(s, x, y, strokeWeight, width, g, which);
}

var left = function (s, px, py, pstrokeWeight, pWidth, g, which) {
	var
		x = px - (pWidth / 1.3),
		y = py,
		strokeWeight = pstrokeWeight / 1.3,
		width = pWidth / 2;
	makeEllipse(s, x, y, strokeWeight, width, g, which);
}

var right = function (s, px, py, pstrokeWeight, pWidth, g, which) {
	var
		x = px + (pWidth / 1.3),
		y = py,
		strokeWeight = pstrokeWeight / 1.3,
		width = pWidth / 2;
	makeEllipse(s, x, y, strokeWeight, width, g, which);
}

var down = function (s, px, py, pstrokeWeight, pWidth, g, which) {
	var
		x = px,
		y = py + (pWidth / 1.3),
		strokeWeight = pstrokeWeight / 1.3,
		width = pWidth / 2;
	makeEllipse(s, x, y, strokeWeight, width, g, which);
}

var startGen = function (s, start, px, py, pstrokeWeight, pWidth, stop) {

	this.stop = stop;

	if (pWidth < this.stop) {
		return 0;
	}

	if (start === 0) {
		var
			x = s.width / 2,
			y = s.height / 2,
			strokeWeight = pstrokeWeight,
			width = pWidth;

		//		makeEllipse(s, x, y, strokeWeight, width);
		startGen(s, 1, x, y, strokeWeight, width, stop);
	} else if (start === 1) {
		// up
		up(s, px, py, pstrokeWeight, pWidth, this, 2);

		// left
		left(s, px, py, pstrokeWeight, pWidth, this, 3);

		// right
		right(s, px, py, pstrokeWeight, pWidth, this, 4);

		// down
		down(s, px, py, pstrokeWeight, pWidth, this, 5);
	} else if (start === 2) {
		// from up
		up(s, px, py, pstrokeWeight, pWidth, this, 2);
		left(s, px, py, pstrokeWeight, pWidth, this, 3);
		right(s, px, py, pstrokeWeight, pWidth, this, 4);
	} else if (start === 3) {
		// from left
		down(s, px, py, pstrokeWeight, pWidth, this, 5);
		left(s, px, py, pstrokeWeight, pWidth, this, 3);
		up(s, px, py, pstrokeWeight, pWidth, this, 2);
	} else if (start === 4) {
		// from right
		right(s, px, py, pstrokeWeight, pWidth, this, 4);
		down(s, px, py, pstrokeWeight, pWidth, this, 5);
		up(s, px, py, pstrokeWeight, pWidth, this, 2);
	} else if (start === 5) {
		// from down
		right(s, px, py, pstrokeWeight, pWidth, this, 4);
		down(s, px, py, pstrokeWeight, pWidth, this, 5);
		left(s, px, py, pstrokeWeight, pWidth, this, 3);
	}
}

var gen1 = function (s) {
	var size = 0.1;
	s.setup = function () {
		s.createCanvas($("#header").width(), $("#header").height());
	}

	s.draw = function () {
		s.noStroke();
		s.fill(230, 10);
		s.rect(0, 0, s.width, s.height);
		s.fill(0);

		startGen(s, 0, 0, 0, 0, size, 6);
		size += 5;

		if (size > s.width / 2) {
			width = 1;
			size = 20;
			s.background(255);
		}
	}

	s.windowResized = function () {
		s.resizeCanvas($("#header").width(), $("#header").height());
	};
}

$(document).ready(function () {
	temp = new p5(gen1, "header");
});
